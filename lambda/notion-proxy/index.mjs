export const handler = async (event) => {
  // 0) 공통 CORS 헤더
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,Notion-Version",
  };

  // OPTIONS 프리플라이트는 바로 204 응답
  const { requestContext } = event;
  const method = requestContext.http.method;

  if (method === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: "",
    };
  }

  /* ---------------------------------------------------------- */

  // 1) 요청 정보 해석
  const {
    rawPath,
    rawQueryString = "",
    body,
    headers,
    isBase64Encoded,
  } = event;

  // 2) Notion API URL 구성
  const notionURL =
    `https://api.notion.com/v1` +
    rawPath.replace("/api/notion", "") +
    (rawQueryString ? `?${rawQueryString}` : "");

  // 3) 바디 전달 여부 결정
  const upstreamBody =
    ["GET", "HEAD"].includes(method) || !body
      ? undefined
      : isBase64Encoded
        ? Buffer.from(body, "base64")
        : body;

  // 4) Notion API 호출
  const upstream = await fetch(notionURL, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Notion-Version": process.env.NOTION_VERSION,
      "Content-Type": headers["content-type"] || "application/json",
    },
    body: upstreamBody,
  });

  const text = await upstream.text();

  // 5) 결과 반환 + CORS
  return {
    statusCode: upstream.status,
    headers: {
      ...corsHeaders,
      ...Object.fromEntries(upstream.headers), // Notion 응답 헤더 이어붙이기
    },
    body: text,
  };
};
