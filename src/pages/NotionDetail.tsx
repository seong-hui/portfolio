import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import {
  fetchNotionPageContent,
  fetchNotionPageInfo,
} from "../apis/getNotionPosts";
import { colors } from "../styles/colors";
import { Spinner } from "../components/Spinner";
import { NotionTag } from "../components/NotionTag";
import { layout } from "../styles/layout";

type NotionBlock = {
  id: string;
  type: string;
  paragraph?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  heading_1?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  heading_2?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  heading_3?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  bulleted_list_item?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  numbered_list_item?: {
    rich_text: Array<{
      plain_text: string;
    }>;
  };
  image?: {
    type: string;
    file?: {
      url: string;
    };
    external?: {
      url: string;
    };
    caption?: Array<{
      plain_text: string;
    }>;
  };
};

type NotionContentResponse = {
  results: NotionBlock[];
};

type NotionMultiSelect = {
  name: string;
  color: string;
};

const NotionDetail: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const navigate = useNavigate();

  const { data: pageInfo, isLoading: pageLoading } = useQuery({
    queryKey: ["notion-page-info", pageId],
    queryFn: async () => {
      if (!pageId) throw new Error("Page ID not found");
      return await fetchNotionPageInfo(pageId);
    },
    enabled: !!pageId,
  });

  const { data, isLoading: contentLoading } = useQuery({
    queryKey: ["notion-detail", pageId],
    queryFn: async () => {
      if (!pageId) throw new Error("Page ID not found");
      const data = await fetchNotionPageContent(pageId);
      return (data as NotionContentResponse).results;
    },
    enabled: !!pageId,
  });

  const loading = pageLoading || contentLoading;

  const content = data || [];
  const pageTitle =
    pageInfo?.properties?.["이름"]?.title?.[0]?.plain_text || "제목 없음";
  const createdDate = pageInfo?.created_time;
  const organization = pageInfo?.properties?.["소속"]?.multi_select?.[0];
  const status = pageInfo?.properties?.["블로그 개시"]?.status?.name;
  const tags = pageInfo?.properties?.["태그"]?.multi_select || [];

  const renderBlock = (block: NotionBlock) => {
    const getText = (richText: Array<{ plain_text: string }>) =>
      richText?.map((text) => text.plain_text).join("") || "";

    switch (block.type) {
      case "paragraph":
        return (
          <Paragraph key={block.id}>
            {getText(block.paragraph?.rich_text || [])}
          </Paragraph>
        );
      case "heading_1":
        return (
          <Heading1 key={block.id}>
            {getText(block.heading_1?.rich_text || [])}
          </Heading1>
        );
      case "heading_2":
        return (
          <Heading2 key={block.id}>
            {getText(block.heading_2?.rich_text || [])}
          </Heading2>
        );
      case "heading_3":
        return (
          <Heading3 key={block.id}>
            {getText(block.heading_3?.rich_text || [])}
          </Heading3>
        );
      case "bulleted_list_item":
        return (
          <ListItem key={block.id}>
            • {getText(block.bulleted_list_item?.rich_text || [])}
          </ListItem>
        );
      case "numbered_list_item":
        return (
          <ListItem key={block.id}>
            1. {getText(block.numbered_list_item?.rich_text || [])}
          </ListItem>
        );
      case "image": {
        const imageUrl = block.image?.file?.url || block.image?.external?.url;
        const caption = getText(block.image?.caption || []);

        return imageUrl ? (
          <ImageWrapper key={block.id}>
            <NotionImage src={imageUrl} alt={caption || "이미지"} />
            {caption && <ImageCaption>{caption}</ImageCaption>}
          </ImageWrapper>
        ) : null;
      }
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <LoadingWrapper>
        <Spinner text="내용을 불러오는 중..." />
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      <BackButton onClick={() => navigate(-1)}>← 뒤로가기</BackButton>
      <ContentWrapper>
        <PageTitle>{pageTitle}</PageTitle>
        <PageMeta>
          <MetaLeft>
            {createdDate && (
              <MetaItem>
                <TagLabel>작성일:</TagLabel>
                {new Date(createdDate).toLocaleDateString("ko-KR")}
              </MetaItem>
            )}
            {organization && (
              <MetaItem>
                <TagLabel>소속:</TagLabel>
                <NotionTag color={organization.color}>
                  {organization.name}
                </NotionTag>
              </MetaItem>
            )}
            {tags.length > 0 && (
              <MetaItem>
                <TagLabel>카테고리:</TagLabel>
                <TagList>
                  {tags.map((tag: NotionMultiSelect, index: number) => (
                    <NotionTag key={index} color={tag.color}>
                      {tag.name}
                    </NotionTag>
                  ))}
                </TagList>
              </MetaItem>
            )}
          </MetaLeft>
          {status && (
            <MetaItem>
              <StatusBadge status={status}>{status}</StatusBadge>
            </MetaItem>
          )}
        </PageMeta>

        {content.map(renderBlock)}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${layout.maxWidth};
  margin: 40px auto;
  padding: 0 16px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

const BackButton = styled.button`
  background: ${colors.gray50};
  border: 1px solid ${colors.gray300};
  border-radius: 25px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  color: ${colors.gray600};

  &:hover {
    background: ${colors.gray200};
    transform: translateY(-2px);
  }
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${colors.textPrimary};
  text-align: center;
`;

const ContentWrapper = styled.div`
  background: ${colors.surface};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
`;

const PageMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${colors.gray200};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MetaLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${colors.textSecondary};

  strong {
    color: ${colors.textPrimary};
  }
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${({ status }) =>
    status === "완료"
      ? colors.successLight
      : status === "작성중"
      ? colors.warningLight
      : colors.gray200};
  color: ${({ status }) =>
    status === "완료"
      ? colors.successDark
      : status === "작성중"
      ? colors.warningDark
      : colors.textSecondary};
`;

const TagLabel = styled.p`
  color: ${colors.textPrimary};
  font-size: 0.9rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Heading1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 1.2rem 0 1rem 0;
  color: ${colors.textPrimary};
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 0.8rem 0;
  color: ${colors.textPrimary};
`;

const Heading3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.8rem 0 0.75rem 0;
  color: ${colors.textPrimary};
`;

const Paragraph = styled.p`
  margin: 0.3rem 0;
  color: ${colors.textSecondary};
  font-size: 1rem;
`;

const ListItem = styled.div`
  margin: 0.5rem 0;
  padding-left: 1rem;
  color: ${colors.textSecondary};
  font-size: 1rem;
`;

const ImageWrapper = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const NotionImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ImageCaption = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 0.9rem;
  color: ${colors.textSecondary};
  font-style: italic;
`;

export default NotionDetail;
