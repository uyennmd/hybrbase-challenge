import { Flex, Heading, Link } from '@chakra-ui/react';

const Header = () => (
  <Flex
    as="header"
    w="100%"
    px="195px"
    py="20px"
    top="0"
    borderBottom="1px solid"
    borderColor="gray.200"
    align="center"
    justify="space-between"
  >
    <Heading fontWeight="bold" textStyle="2xl">
      <Link href="/" _hover={{ textDecoration: 'none' }}>
        E-Commerce
      </Link>
    </Heading>
    <Flex as="nav" gap="20px">
      <Link href="#" fontSize="sm" fontWeight="medium">
        Shop
      </Link>
      <Link href="#" fontSize="sm" fontWeight="medium">
        Stories
      </Link>
      <Link href="#" fontSize="sm" fontWeight="medium">
        About
      </Link>
    </Flex>
    <Flex gap="20px" align="center">
      <Link href="#" fontSize="sm" fontWeight="medium">
        Login
      </Link>
      <Link href="#" fontSize="sm" fontWeight="medium">
        Cart
      </Link>
    </Flex>
  </Flex>
);
export default Header;