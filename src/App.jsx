import { BrowserRouter, Routes, Route } from "react-router-dom";

import { 
  HomePage,
  CartPage,
  CheckoutPage,
  PaymentPage
} from "@pages";

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />}
        />
        <Route path="/home" element={<HomePage />}
        />
        <Route path="/cart" element={<CartPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />}
        />
        <Route path="/payment" element={<PaymentPage />}
        />
        <Route path="*" element={<></>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
