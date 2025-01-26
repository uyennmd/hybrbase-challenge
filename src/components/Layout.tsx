import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import { ColorModeProvider } from "@/components/ui/color-mode"
import { Theme } from "@chakra-ui/react"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <ColorModeProvider forcedTheme="light">
        <Theme appearance="light">
          <Flex direction="column">
            <Header />
            <Box as="main" flex="1" py="20px" px="195px">
              {children}
            </Box>
            <Footer />
        </Flex>
        </Theme>
      </ColorModeProvider>
      

    );
  };
  
  export default Layout;