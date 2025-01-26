import { Image, Link, Text, Badge, Center, Card, Flex } from '@chakra-ui/react';
import { Button } from './ui/button';
import { Product } from '../types/product';

const ProductCard = (product: Product) => (
    <Card.Root maxW="sm" overflow="hidden" variant={"elevated"} w={"260px"} h={"270px"}>
        <Center>
            <Image
            src={`https:${product.fields.image.fields.file.url}`}
            alt={product.fields.name}
            h="180px"
            w="200px"
            fit="contain"
            />
        </Center>
        <Card.Body>
            <Card.Title>
                <Flex align="center" justify="space-between">
                    <Link href={`/product/${product.sys.id}`} _hover={{ textDecoration: 'none' }}>
                        {product.fields.name}
                    </Link>
                    <Badge 
                        colorScheme="gray" 
                        px={3} 
                        py={1} 
                        rounded="full" 
                    >{product.fields.category}</Badge>
                </Flex>
            </Card.Title>
            <Flex align="center">
                <Text textStyle="md" fontWeight="medium" letterSpacing="tight">
                    {product.fields.price}VND
                </Text>
            </Flex>
        </Card.Body>
    </Card.Root>

);

export default ProductCard;