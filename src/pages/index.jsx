import { lazy } from "react";

export const HomePage = lazy(()=> import('@pages/home'));
export const CartPage = lazy(()=> import('@pages/cart'));
export const CheckoutPage = lazy(()=> import('@pages/checkout'));