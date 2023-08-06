import React from "react";
import { Box, Flex, Spacer, Button, Link } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      position={"fixed"}
      top={"0"}
      w={"100%"}
      bg="gray.800"
      px={4}
      py={4}
      color="white"
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
    >
      <Flex alignItems="center" maxWidth="1200px" margin="0 auto">
        <Link href="#" fontSize="xl" fontWeight="bold">
          Code Converter
        </Link>
        <Spacer />
        <Link href="#converter_ui">
          <Button colorScheme="teal" size="md">
            Get Started
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
