import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Before from "./routes/Before";
import NotFound from "./routes/NotFound";




function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/before" element={<Before/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
