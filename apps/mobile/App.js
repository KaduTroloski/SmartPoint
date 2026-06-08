import Routes from "./navigation/Routes";
import { AuthProvider } from "./context/AuthContext";
import { PaperProvider } from "react-native-paper";
import { ProductProvider } from "./context/ProductContext";

export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <ProductProvider>
          <Routes />
        </ProductProvider>
      </AuthProvider>
    </PaperProvider>
  );
}