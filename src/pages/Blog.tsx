import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";
import { colors } from "../styles/colors";
import { Spinner } from "../components/Spinner";
import { layout } from "../styles/layout";

interface VelogPost {
  id: string;
  title: string;
  short_description: string;
  thumbnail: string;
  url_slug: string;
  released_at: string;

  tags: string[];
}

interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  thumbnail?: string;
  categories?: string[];
}

interface RSSResponse {
  status: string;
  items: RSSItem[];
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<VelogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const fetchVelogPosts = async () => {
      try {
        const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://v2.velog.io/rss/seonghui`;

        const response = await fetch(rssUrl);
        const data = await response.json();

        const rssData = data as RSSResponse;

        if (rssData.status === "ok" && rssData.items) {
          const velogPosts: VelogPost[] = rssData.items
            .slice(0, 10)
            .map((item: RSSItem, index: number) => {
              // URL에서 slug 추출
              const urlParts = item.link.split("/");
              const urlSlug = urlParts[urlParts.length - 1];

              // 설명에서 HTML 태그 제거
              const description = item.description
                ? item.description.replace(/<[^>]*>/g, "").substring(0, 150) +
                  "..."
                : "내용을 확인하려면 글을 읽어보세요.";

              // 카테고리를 태그로 변환
              const tags = item.categories || [];

              return {
                id: String(index + 1),
                title: item.title,
                short_description: description,
                thumbnail: item.thumbnail || "",
                url_slug: urlSlug,
                released_at: item.pubDate,
                tags: tags,
              };
            });

          setPosts(velogPosts);
        } else {
          throw new Error("RSS 데이터를 불러올 수 없습니다.");
        }
      } catch (err) {
        console.error("Error fetching Velog RSS:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVelogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <BlogSection>
        <Container>
          <Title>Velog</Title>
          <LoadingWrapper>
            <Spinner text="블로그 글을 불러오는 중..." />
          </LoadingWrapper>
        </Container>
      </BlogSection>
    );
  }

  if (error) {
    return (
      <BlogSection>
        <Container>
          <Title>Velog</Title>
          <ErrorMessage>{error}</ErrorMessage>
        </Container>
      </BlogSection>
    );
  }

  return (
    <BlogSection>
      <Container>
        <Title>Velog</Title>
        <Description>
          개발하면서 배운 것들과 경험을 기록하고 공유합니다.
        </Description>

        <PostGrid>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              href={`https://velog.io/@seonghui/${post.url_slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.thumbnail && (
                <PostThumbnail>
                  <img src={post.thumbnail} alt={post.title} />
                </PostThumbnail>
              )}

              <PostContent>
                <PostTitle>{post.title}</PostTitle>

                {post.short_description && (
                  <PostDescription>{post.short_description}</PostDescription>
                )}

                <PostMeta>
                  <MetaItem>
                    <FaCalendarAlt />
                    <span>{formatDate(post.released_at)}</span>
                  </MetaItem>
                </PostMeta>

                {post.tags && post.tags.length > 0 && (
                  <TagList>
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Tag key={index}>#{tag}</Tag>
                    ))}
                  </TagList>
                )}
              </PostContent>
            </PostCard>
          ))}
        </PostGrid>

        <VelogLink
          href="https://velog.io/@seonghui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt />
          Velog에서 더 많은 글 보기
        </VelogLink>
      </Container>
    </BlogSection>
  );
};

const BlogSection = styled.section`
  min-height: 100vh;
  padding: 40px 0 80px;
  background: ${colors.background};
`;

const Container = styled.div`
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: ${layout.containerPadding};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${colors.textPrimary};
  letter-spacing: 2px;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.textSecondary};
  margin-bottom: 4rem;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.danger};
  padding: 4rem 0;
`;

const PostGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const PostCard = styled.a`
  background: ${colors.surface};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const PostThumbnail = styled.div`
  width: 200px;
  height: 150px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostContent = styled.div`
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostDescription = styled.p`
  font-size: 0.95rem;
  color: ${colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: ${colors.textTertiary};

  svg {
    font-size: 0.8rem;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: ${colors.gray200};
  color: ${colors.gray600};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const VelogLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  max-width: 300px;
  margin: 0 auto;

  color: ${colors.gray600};
  border: 2px solid ${colors.gray300};
  background: ${colors.gray50};

  &:hover {
    background: ${colors.gray200};
    transform: translateY(-2px);
  }
`;

export default Blog;
