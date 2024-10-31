// LoadingScreen.js
import React from "react";
import { Box, Flex, Spinner, Icon, keyframes } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

// Animación para el spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingScreen = () => {
  return (
    <Box
      height="100vh"
      bg="teal.600" // Color de fondo sólido
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={5}
    >
      <Flex direction="column" align="center">
        <Icon as={FaShoppingCart} boxSize={64} mb={4} color="black" /> 
        <Spinner 
          size="4xl"  
          color="black" 
          css={{ animation: `${spin} 0.75s linear infinite` }} 
        />
      </Flex>
    </Box>
  );
};

export default LoadingScreen;
