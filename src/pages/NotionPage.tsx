import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import { fetchNotionItems } from "../apis/getNotionPosts";

type NotionTag = {
  name: string;
  color: string;
};

type NotionPost = {
  id: string;
  title: string;
  url: string;
  icon?: string;
  created_time: string;
  last_edited_time: string;
  tags: NotionTag[];
  status?: string;
  organization: NotionTag[];
  content?: string;
};

type NotionMultiSelect = {
  name: string;
  color: string;
};

type NotionTitle = {
  plain_text: string;
};

type NotionStatus = {
  name: string;
};

type NotionIcon = {
  emoji: string;
};

type NotionPageProperties = {
  이름: {
    title: NotionTitle[];
  };
  태그: {
    multi_select: NotionMultiSelect[];
  };
  소속: {
    multi_select: NotionMultiSelect[];
  };
  "블로그 개시": {
    status: NotionStatus;
  };
  내용: {
    rich_text: { plain_text: string }[];
  };
};

type NotionPageResponse = {
  id: string;
  url: string;
  created_time: string;
  last_edited_time: string;
  icon: NotionIcon;
  properties: NotionPageProperties;
};

type NotionApiResponse = {
  results: NotionPageResponse[];
};

const fetchNotionBasicData = async (): Promise<NotionPost[]> => {
  const data = await fetchNotionItems();

  return (data as NotionApiResponse).results.map((page: NotionPageResponse) => {
    const title = page.properties["이름"]?.title?.[0]?.plain_text || "Untitled";
    const tags =
      page.properties["태그"]?.multi_select?.map((tag: NotionMultiSelect) => ({
        name: tag.name,
        color: tag.color,
      })) || [];
    const organization =
      page.properties["소속"]?.multi_select?.map((org: NotionMultiSelect) => ({
        name: org.name,
        color: org.color,
      })) || [];
    const status = page.properties["블로그 개시"]?.status?.name || "미완료";
    const icon = page.icon?.emoji || "📝";
    const content =
      page.properties["내용"]?.rich_text
        ?.map((text) => text.plain_text)
        .join("")
        .substring(0, 150) || "";

    return {
      id: page.id,
      title,
      url: page.url,
      icon,
      created_time: page.created_time,
      last_edited_time: page.last_edited_time,
      tags,
      status,
      organization,
      content,
    };
  });
};

const NotionPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");
  const navigate = useNavigate();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["notion-posts"],
    queryFn: fetchNotionBasicData,
  });

  const categories = useMemo(() => {
    const orgSet = new Set<string>();
    posts.forEach((post) => {
      post.organization.forEach((org) => orgSet.add(org.name));
    });
    const orgCategories = Array.from(orgSet).sort();
    const hasNoOrg = posts.some((post) => post.organization.length === 0);
    const allCategories = ["전체", ...orgCategories];
    if (hasNoOrg) {
      allCategories.push("기타");
    }
    return allCategories;
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "전체") {
      return posts;
    } else if (selectedCategory === "기타") {
      return posts.filter((post) => post.organization.length === 0);
    } else {
      return posts.filter((post) =>
        post.organization.some((org) => org.name === selectedCategory)
      );
    }
  }, [posts, selectedCategory]);

  const handlePostClick = (postId: string) => {
    navigate(`/notion/${postId}`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Notion</Title>
        <Description>
          Notion에서 작성한 개발 관련 글과 생각들을 공유합니다.
        </Description>

        {isLoading ? (
          <LoadingWrapper>Loading...</LoadingWrapper>
        ) : (
          <>
            <CategoryTabs>
              {categories.map((category) => (
                <CategoryTab
                  key={category}
                  active={selectedCategory === category}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </CategoryTab>
              ))}
            </CategoryTabs>

            <PostGrid>
              {filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  onClick={() => handlePostClick(post.id)}
                >
                  <PostContent>
                    <PostHeader>
                      <PostIcon>{post.icon}</PostIcon>
                      <PostTitle>{post.title}</PostTitle>
                      <StatusBadge status={post.status}>
                        {post.status}
                      </StatusBadge>
                    </PostHeader>

                    {post.content && (
                      <PostPreview>{post.content}...</PostPreview>
                    )}

                    <PostMeta>
                      <MetaItem>
                        작성:{" "}
                        {new Date(post.created_time).toLocaleDateString(
                          "ko-KR"
                        )}
                      </MetaItem>
                      <MetaItem>
                        수정:{" "}
                        {new Date(post.last_edited_time).toLocaleDateString(
                          "ko-KR"
                        )}
                      </MetaItem>
                    </PostMeta>

                    {post.organization.length > 0 && (
                      <OrgList>
                        {post.organization.map((org, index) => (
                          <OrgTag key={index} color={org.color}>
                            {org.name}
                          </OrgTag>
                        ))}
                      </OrgList>
                    )}

                    {post.tags.length > 0 && (
                      <TagList>
                        {post.tags.map((tag, index) => (
                          <Tag key={index} color={tag.color}>
                            {tag.name}
                          </Tag>
                        ))}
                      </TagList>
                    )}
                  </PostContent>
                </PostCard>
              ))}
            </PostGrid>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 40px 0 80px;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const CategoryTab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ active }) => (active ? "#007bff" : "#dee2e6")};
  background: ${({ active }) => (active ? "#007bff" : "white")};
  color: ${({ active }) => (active ? "white" : "#666")};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #007bff;
    background: ${({ active }) => (active ? "#0056b3" : "#f8f9fa")};
    color: ${({ active }) => (active ? "white" : "#007bff")};
  }
`;

const LoadingWrapper = styled.div`
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: #666;
`;

const PostGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const PostCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const PostContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0;
`;

const PostIcon = styled.span`
  font-size: 1.5rem;
`;

const PostTitle = styled.h3`
  flex: 1;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

const StatusBadge = styled.span<{ status?: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${({ status }) => (status === "완료" ? "#d4edda" : "#fff3cd")};
  color: ${({ status }) => (status === "완료" ? "#155724" : "#856404")};
`;

const PostPreview = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const MetaItem = styled.span`
  font-size: 0.85rem;
  color: #888;
`;

const OrgList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
`;

const OrgTag = styled.span<{ color: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid;
  background: ${({ color }) => {
    const colorMap: { [key: string]: string } = {
      default: "#f8f9fa",
      gray: "#f8f9fa",
      brown: "#fdf6e3",
      orange: "#fff4e6",
      yellow: "#fffbf0",
      green: "#f0f9f4",
      blue: "#f0f8ff",
      purple: "#f8f4ff",
      pink: "#fdf2f8",
      red: "#fef2f2",
    };
    return colorMap[color] || colorMap.default;
  }};
  border-color: ${({ color }) => {
    const borderColorMap: { [key: string]: string } = {
      default: "#dee2e6",
      gray: "#adb5bd",
      brown: "#d4a574",
      orange: "#fd7e14",
      yellow: "#ffc107",
      green: "#28a745",
      blue: "#007bff",
      purple: "#6f42c1",
      pink: "#e83e8c",
      red: "#dc3545",
    };
    return borderColorMap[color] || borderColorMap.default;
  }};
  color: ${({ color }) => {
    const textColorMap: { [key: string]: string } = {
      default: "#495057",
      gray: "#495057",
      brown: "#8b4513",
      orange: "#d2691e",
      yellow: "#b8860b",
      green: "#155724",
      blue: "#004085",
      purple: "#6f42c1",
      pink: "#721c24",
      red: "#721c24",
    };
    return textColorMap[color] || textColorMap.default;
  }};
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
`;

const Tag = styled.span<{ color: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${({ color }) => {
    const colorMap: { [key: string]: string } = {
      default: "#f1f3f4",
      gray: "#e9ecef",
      brown: "#f4e4bc",
      orange: "#fde2cc",
      yellow: "#fff2cd",
      green: "#d4edda",
      blue: "#cce7ff",
      purple: "#e2d9f3",
      pink: "#f8d7da",
      red: "#f5c6cb",
    };
    return colorMap[color] || colorMap.default;
  }};
  color: ${({ color }) => {
    const textColorMap: { [key: string]: string } = {
      default: "#5f6368",
      gray: "#495057",
      brown: "#8b4513",
      orange: "#d2691e",
      yellow: "#b8860b",
      green: "#155724",
      blue: "#004085",
      purple: "#6f42c1",
      pink: "#721c24",
      red: "#721c24",
    };
    return textColorMap[color] || textColorMap.default;
  }};
`;

export default NotionPage;
