import { createClient } from "contentful";

interface ContentfulDataProps {
  space: string;
  accessToken: string;
}

export const fetchContentfulData = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  } as ContentfulDataProps);

  const response = await client.getEntries({
    content_type: "yourContentType",
  });

  return response.items;
};
