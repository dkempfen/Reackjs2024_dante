// App.js
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layouts/MainLayout";
import { MainRouter } from "./router";
import { CartProvider } from "./context";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { FaShoppingCart } from "react-icons/fa";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Temporizador para la pantalla de carga (por ejemplo, 3 segundos)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  // Muestra LoadingScreen mientras isLoading es true
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Muestra el contenido principal cuando isLoading es false
  return (
    <ChakraProvider>
      <CartProvider>
        <MainLayout>
          <MainRouter /> 
        </MainLayout>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;

