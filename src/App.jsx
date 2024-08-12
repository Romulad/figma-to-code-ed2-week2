import { BrowserRouter, Routes, Route } from "react-router-dom";

import { 
  HomePage 
} from "@pages";

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />}
        />
        <Route path="/home" element={<HomePage />}
        />
        <Route path="*" element={<></>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
