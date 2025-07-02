import axios from "axios";

const instance = axios.create({
  baseURL: "/api/notion",
  headers: { "Content-Type": "application/json" },
});

if (import.meta.env.DEV) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${
    import.meta.env.VITE_NOTION_TOKEN
  }`;
  instance.defaults.headers.common["Notion-Version"] = "2022-06-28";
}

export default instance;
