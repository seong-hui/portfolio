import instance from "./axiosNotion";

const NOTION_DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID;

export async function fetchNotionItems() {
  const url = `/databases/${NOTION_DATABASE_ID}/query`;

  const { data } = await instance.post(url, {
    filter: {
      or: [
        { property: "블로그 개시", status: { equals: "완료" } },
        { property: "블로그 개시", status: { equals: "작성중" } },
      ],
    },
  });

  return data;
}

export async function fetchNotionPageContent(pageId: string) {
  const url = `/blocks/${pageId}/children`;
  const { data } = await instance.get(url);
  return data;
}
