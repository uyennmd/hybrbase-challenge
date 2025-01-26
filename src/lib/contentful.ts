import { createClient } from 'contentful';

// Create Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Fetch products from Contentful
export const fetchProducts = async () => {
  const response = await client.getEntries({
    content_type: 'product', 
  });
  return response.items;
};

