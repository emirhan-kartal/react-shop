import { State } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import config from "../../components/Config";
import { ProductCardProps } from "../../components/product/ProductCard";

const initialState: State = {
    cart: [{ productInstance: config.products["1"], count: 1 }] as ProductCardProps[],
};

const cartSlice = createSlice({
    name: "cartContent",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<string>) => {
            const product = state.cart.find(
                (product) => product.productInstance.id === action.payload
            );
            if (product) {
                state.cart = state.cart.map((product) =>
                    product.productInstance.id === action.payload
                        ? { ...product, count: (product.count || 0) + 1 }
                        : product
                );
            } else {

                state.cart = [
                    ...state.cart,
                    {
                        productInstance: {
                            ...config.products.find(
                                (product) => product.id === action.payload
                            ),
                        },
                        count: 1,
                    } as ProductCardProps,
                ];
            }
            console.log(state.cart);
        },
        removeReduce: (state, action: PayloadAction<string>) => {
            const product = state.cart
                .map((product) => {
                    if (product.productInstance.id === action.payload && product.count! > 0) {
                        return { ...product, count: product.count! - 1 };
                    } else {
                        return product;
                    }
                })
                .filter((product) => product.count! > 0);
            console.log(action.payload + "=ID");
            console.log(product);
            state.cart = product;
        },
    },
});

export const { removeReduce, addProduct } = cartSlice.actions;
export const selectCart = (state: { cart: ProductCardProps[] }) => state.cart;
export default cartSlice.reducer;
