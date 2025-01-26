import { GetServerSideProps } from "next";
import { Box, Button, Flex, Image, Text, VStack, HStack, Group } from "@chakra-ui/react";
import { useState } from "react";
import { Product } from "@/types/product";
import { fetchProducts } from "@/lib/contentful";
import Layout from "@/components/Layout";
import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input"

interface ProductPageProps {
  product: Product;
}

const sizes = ["XS", "S", "M", "L", "XL"];

const ProductPage = ({ product }: ProductPageProps) => {
  const [quantity, setQuantity] = useState("1");
  const [size, setSize] = useState("M");

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of size ${size} to the cart.`);
  };

  const handleBuyNow = () => {
    console.log(`Bought ${quantity} of size ${size}.`);
  };

  return (
  <Layout>
    <Box mx="auto" py="10" px="100px" height={"80vh"}>
      <Flex gap="10" align="start">
        {/* Left: Product Image */}
        <Box flex="1" paddingLeft={50}>
          <Image src={product.fields.image.fields.file.url} alt={product.fields.name} borderRadius="md" w={"300px"}/>
        </Box>

        {/* Right: Product Details */}
        <VStack align="start" flex="1" gap="6">
          <Text fontSize="2xl" fontWeight="bold">
            {product.fields.name}
          </Text>
          <Text fontSize="xl" fontWeight="medium">
            {product.fields.price}VND
          </Text>
          <Text color="gray.600" marginRight="100px">{product.fields.description}</Text>

          {/* Size Selector */}
          <Group>
            {sizes.map((siz) => (
              <Button
                key={siz}
                onClick={() => setSize(siz)}
                variant={size === siz ? "solid" : "outline"}
              >
                {siz}
              </Button>
            ))}
          </Group>

          {/* Quantity Selector */}
          <NumberInputRoot
            width="70px"
            value={quantity}
            min={1}
            onValueChange={(e) => setQuantity(e.value)}
          >
            <NumberInputField />
          </NumberInputRoot>

          {/* Add to Cart and Buy Now Buttons */}
          <HStack gap="4">
            <Button colorScheme="blackAlpha" size="md" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button colorScheme="blue" size="md" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
    </Layout>
  );
};

// Server-side Rendering
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const products = await fetchProducts();
  const product = products.find((p) => p.sys.id === params?.id);
  return {
    props: {
      product,
    },
  };
};

export default ProductPage;