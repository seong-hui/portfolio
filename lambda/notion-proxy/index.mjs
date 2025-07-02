export const handler = async (event) => {
  // 1) 요청 정보 해석
  const {
    rawPath,
    rawQueryString = "",
    body,
    headers,
    isBase64Encoded,
    requestContext,
  } = event;
  const method = requestContext.http.method;

  // 2) Notion API URL 구성
  const notionURL =
    `https://api.notion.com/v1` +
    rawPath.replace("/api/notion", "") +
    (rawQueryString ? `?${rawQueryString}` : "");

  // 3) 브라우저에서 넘어온 바디를 그대로 전달 (GET / HEAD 제외)
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
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type,Authorization,Notion-Version",
      ...Object.fromEntries(upstream.headers), // JSON / HTML 등 그대로 전달
    },
    body: text,
  };
};
