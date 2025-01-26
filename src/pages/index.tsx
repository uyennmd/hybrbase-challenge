"use client";

import { GetServerSideProps } from "next";
import { fetchProducts } from "@/lib/contentful";
import { use, useEffect, useState } from "react";
import {
  Box,
  createListCollection,
  Flex,
  Grid,
  GridItem,
  Group,
  Heading,
  HStack,
  Separator,
  Text,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText, } from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { Product } from "../types/product";

interface HomeProps {
  products: Product[];
}

const pageSize = 4;
const categories = ["All", "Dress", "Shoe", "Shirt", "Skirt"];
const sortOptions = ["Popular", "Alphabetical"];

const Home = ({ products }: HomeProps) => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Popular");
  const [visibleProducts, setVisibleProducts] = useState(products);
  const [totalProducts, setTotalProducts] = useState(products.length);

  // Pagination
  const startRange = (page - 1) * pageSize;
  const endRange = startRange + pageSize;

  useEffect(() => {
    // Filter by category (if applicable)
    const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.fields.category === category);

    // Sort logic (example: popular or alphabetical)
    const sortedProducts =
    sortOption === "Popular"
      ? filteredProducts // Assuming default order is by popularity
      : [...filteredProducts].sort((a, b) =>
          a.fields.name.localeCompare(b.fields.name)
        );
    setVisibleProducts(sortedProducts);
    setTotalProducts(sortedProducts.length);
    setPage(1)
  }, [category, sortOption]);

  return (
    <Layout>
      <Box rounded="sm" py="30px">
        <Flex direction={"column"} gap="7">
          <Heading as="h1" fontSize="5xl" fontWeight="bold">E-Commerce</Heading>
          <Text paddingEnd="600px" fontSize="xl">Revamp your style with the latest designer trends in clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.</Text>
        </Flex>
      </Box>
      <Separator />
      {/* Filters and Sort */}
      <Flex justify="space-between" align="center" my={8}>
        <Group>
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setCategory(cat)}
              variant={category === cat ? "solid" : "outline"}
            >
              {cat}
            </Button>
          ))}
          </Group>
        <Flex align="center" gap={4} w={"200px"}>
          <SegmentedControl
            value={sortOption}
            onValueChange={(e) => setSortOption(e.value)}
            items={sortOptions}
          />
        </Flex>
      </Flex>
      {/* Product Grid */}
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {visibleProducts.slice(startRange, endRange).map((product) => (
          <GridItem key={product.sys.id}>
            <ProductCard {...product} />
          </GridItem>
        ))}
      </Grid>

      {/* Pagination */}
      <Box mt={8}>
        <PaginationRoot
          page={page}
          count={totalProducts}
          pageSize={pageSize}
          onPageChange={(e) => setPage(e.page)}
        >
          <HStack justify="center">
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchProducts();
  console.log(products);
  return {
    props: {
      products,
    },
  };
};

export default Home;