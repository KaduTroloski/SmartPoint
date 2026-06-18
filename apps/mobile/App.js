import 'react-native-gesture-handler';
import React from 'react';
import Routes from "./navigation/Routes";
import { AuthProvider } from "./context/AuthContext";
import { PaperProvider } from "react-native-paper";
import { ProductProvider } from "./context/ProductContext";
import { ClientProvider } from "./context/ClientContext";

export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <ClientProvider>
          <ProductProvider>
            <Routes />
          </ProductProvider>
        </ClientProvider>
      </AuthProvider>
    </PaperProvider>
  );
}