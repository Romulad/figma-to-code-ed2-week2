import { lazy } from "react";

export const HomePage = lazy(()=> import('@pages/home'));
export const CartPage = lazy(()=> import('@pages/cart'));
export const CheckoutPage = lazy(()=> import('@pages/checkout'));
export const PaymentPage = lazy(()=>import('@pages/payment/'));
export const ProductDeatilPage = lazy(()=> import('@pages/productDetail'));
export const CollectionsPage = lazy(()=> import('@pages/collections'));
export const CollectionDetailPage = lazy(()=> import('@pages/collectionDetail'));