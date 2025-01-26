import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => (
    <Box
      as="footer"
      w="100%"
      px="20px"
      py="20px"
      borderTop="1px solid"
      borderColor="gray.200"
    >
      <Flex justify="space-between" align="center" flexWrap="wrap" gap="10px">
        <Text fontSize="sm" color="gray.500">
          &copy; 2025 Ecommerce. All rights reserved.
        </Text>
        <Flex gap="20px">
          <Link href="#" fontSize="sm">
            Privacy Policy
          </Link>
          <Link href="#" fontSize="sm">
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );

export default Footer;