import "./App.css";
import ResponsiveHeader from "./components/ResponsiveHeader";
import React, { useEffect } from "react";
import {
    RouterProvider,
    createBrowserRouter,
    redirect,
} from "react-router-dom";
import ProductPreview from "./pages/ProductPreview";
import BannerSlider from "./components/BannerSlider";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BackToTop from "./components/BackToTop";
import FilterProducts from "./components/product/FilterProducts";
import { FilteringProvider } from "./components/context/FilteringContext";
import CartPage from "./pages/CartPage";
import AddressForm from "./pages/AddressForm";
import CreditCardForm from "./pages/CreditCardForm";
function App() {
    useEffect(() => {
        redirect("/home");
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <ResponsiveHeader />
                    <BannerSlider />
                    <HomePage />
                    <Footer />
                </>
            ),
        },

        {
            path: "/product/:productID",
            element: (
                <>
                    {" "}
                    <ResponsiveHeader />
                    <ProductPreview />
                    <Footer />
                </>
            ),
        },
        {
            path: "/products/:category",
            element: (
                <>
                    <ResponsiveHeader />
                    <FilteringProvider>
                        <FilterProducts />
                    </FilteringProvider>
                </>
            ),
        },
        {
            path: "/cart",
            element: (
                <>
                    <ResponsiveHeader />
                    <CartPage />
                    <Footer />
                </>
            ),
        },
        {
            path: "/cart/address",
            element: (
                <>
                    <ResponsiveHeader />
                    <AddressForm />
                    <Footer />
                </>
            ),
        },
        {
            path: "/cart/payment",
            element: (
                <>
                    <ResponsiveHeader />
                    <CreditCardForm />
                    <Footer />
                </>
            ),
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
            <BackToTop />
        </div>
    );
}

export default App;
