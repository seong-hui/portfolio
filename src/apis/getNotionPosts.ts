import axios from "axios";

export async function fetchNotionItems() {
  const notionKey = import.meta.env.VITE_NOTION_TOKEN;
  const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID;

  const url = `/api/notion/databases/${databaseId}/query`;

  try {
    const { data } = await axios.post(
      url,
      {
        filter: {
          or: [
            {
              property: "블로그 개시",
              status: {
                equals: "완료",
              },
            },
            {
              property: "블로그 개시",
              status: {
                equals: "작성중",
              },
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${notionKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (err) {
    console.error("Notion API 호출 실패:", err);
    throw err;
  }
}

export async function fetchNotionPageContent(pageId: string) {
  const notionKey = import.meta.env.VITE_NOTION_TOKEN;
  const url = `/api/notion/blocks/${pageId}/children`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${notionKey}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (err) {
    console.error("Notion 페이지 콘텐츠 호출 실패:", err);
    throw err;
  }
}

export default fetchNotionItems;
