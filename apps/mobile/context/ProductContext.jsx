import {
    createContext,
    useContext,
    useState,
} from 'react';

import { mockedProducts } from '../mocks/products';

const ProductContext =
    createContext();

export function ProductProvider({
    children,
}) {

    const [products, setProducts] =
        useState(mockedProducts);

    const addProduct = (
        product
    ) => {

        setProducts((prev) => [
            ...prev,
            product,
        ]);
    };

    const updateProduct = (
        updatedProduct
    ) => {

        setProducts((prev) =>
            prev.map((product) =>
                product.id ===
                updatedProduct.id
                    ? updatedProduct
                    : product
            )
        );
    };

    const deleteProduct = (
        id
    ) => {

        setProducts((prev) =>
            prev.filter(
                (product) =>
                    product.id !== id
            )
        );
    };

    return (
        <ProductContext.Provider
            value={{
                products,
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
    return useContext(
        ProductContext
    );
}