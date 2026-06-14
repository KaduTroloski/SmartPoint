import {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { mockedProducts } from '../mocks/products';

const ProductContext = createContext();

const STORAGE_KEY = '@products';

export function ProductProvider({ children }) {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProducts();
    }, []);

     async function loadProducts() {
        try {
            const storedProducts =
                await AsyncStorage.getItem(STORAGE_KEY);

            if (storedProducts) {
                setProducts(JSON.parse(storedProducts));

            } else {
                setProducts(mockedProducts);

            }

        } catch (error) {
            console.error(
                'Erro ao carregar produtos:',
                error
            );

            setProducts(mockedProducts);

        } finally {
            setLoading(false);
        }
    }

    // Salva sempre que products mudar
    useEffect(() => {
        if (!loading) {
            AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(products)
            );
        }

    }, [products, loading]);

    const addProduct = (product) => {
        setProducts((prev) => [
            ...prev,
            product,
        ]);
    };

    const updateProduct = (updatedProduct) => {
        setProducts((prev) =>
            prev.map((product) =>
                product.id === updatedProduct.id
                    ? updatedProduct
                    : product
            )
        );
    };

    const deleteProduct = (id) => {
        setProducts((prev) =>
            prev.filter(
                (product) => product.id !== id
            )
        );
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                loading,
                addProduct,
                updateProduct,
                deleteProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductContext);

    if(!context) {
        throw new Error('useProducts deve ser usado dentro de ProductProvider');
    }

    return context;
}