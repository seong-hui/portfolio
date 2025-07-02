import axios from "axios";

const NOTION_API_BASE =
  // dev 모드인지 여부는 Vite가 자동 주입하는 플래그
  import.meta.env.MODE === "development"
    ? "/api/notion" // 로컬 dev : Vite 프록시
    : import.meta.env.VITE_NOTION_API; // prod    : 실제 Notion API

const NOTION_TOKEN = import.meta.env.VITE_NOTION_TOKEN;
const NOTION_DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID;

export async function fetchNotionItems() {
  const url = `${NOTION_API_BASE}/databases/${NOTION_DATABASE_ID}/query`;

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
          Authorization: `Bearer ${NOTION_TOKEN}`,
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
  const url = `${NOTION_API_BASE}/blocks/${pageId}/children`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
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
