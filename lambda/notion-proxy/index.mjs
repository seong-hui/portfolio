export const handler = async (event) => {
  /* ---------- 공통 CORS ---------- */
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,Notion-Version",
  };

  /* ---------- OPTIONS 프리플라이트 ---------- */
  const method = event.requestContext.http.method;
  if (method === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  /* ---------- Notion API 호출 준비 ---------- */
  const {
    rawPath,
    rawQueryString = "",
    body,
    headers,
    isBase64Encoded,
  } = event;

  const notionURL =
    "https://api.notion.com/v1" +
    rawPath.replace("/api/notion", "") +
    (rawQueryString ? `?${rawQueryString}` : "");

  const upstreamBody =
    ["GET", "HEAD"].includes(method) || !body
      ? undefined
      : isBase64Encoded
        ? Buffer.from(body, "base64")
        : body;

  /* ---------- Notion API 호출 ---------- */
  const upstream = await fetch(notionURL, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Notion-Version": process.env.NOTION_VERSION,
      "Content-Type": headers["content-type"] || "application/json",
    },
    body: upstreamBody,
  });

  const text = await upstream.text(); // 여기서 gzip 자동 해제됨

  /* ---------- 헤더 정리: gzip/transfer-encoding 제거 ---------- */
  const passthrough = Object.fromEntries(
    [...upstream.headers].filter(
      ([key]) =>
        key.toLowerCase() !== "content-encoding" &&
        key.toLowerCase() !== "transfer-encoding"
    )
  );

  /* ---------- 최종 응답 ---------- */
  return {
    statusCode: upstream.status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
      ...passthrough,
    },
    body: text,
  };
};
