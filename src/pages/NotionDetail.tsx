import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "@emotion/styled";
import { fetchNotionPageContent } from "../apis/getNotionPosts";
import { colors } from "../styles/colors";

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

const NotionDetail: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const navigate = useNavigate();

  const { data, isLoading: loading } = useQuery({
    queryKey: ["notion-detail", pageId],
    queryFn: async () => {
      if (!pageId) throw new Error("Page ID not found");
      const data = await fetchNotionPageContent(pageId);
      return (data as NotionContentResponse).results;
    },
    enabled: !!pageId,
  });

  const content = data || [];

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
      <Wrapper>
        <BackButton onClick={() => navigate(-1)}>← 뒤로가기</BackButton>
        <LoadingWrapper>내용을 불러오는 중...</LoadingWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <BackButton onClick={() => navigate(-1)}>← 뒤로가기</BackButton>
      <ContentWrapper>{content.map(renderBlock)}</ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 820px;
  margin: 40px auto 0;
  padding: 1.5rem 16px;
`;

const BackButton = styled.button`
  background: ${colors.gray50};
  border: 1px solid ${colors.gray300};
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: ${colors.gray600};

  &:hover {
    background: ${colors.gray200};
  }
`;

const LoadingWrapper = styled.div`
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: ${colors.textSecondary};
`;

const ContentWrapper = styled.div`
  background: ${colors.surface};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem 0 1rem 0;
  color: ${colors.textPrimary};
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem 0;
  color: ${colors.textPrimary};
`;

const Heading3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.25rem 0 0.75rem 0;
  color: ${colors.textPrimary};
`;

const Paragraph = styled.p`
  margin: 1rem 0;
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
