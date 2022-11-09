import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Playground from "./screens/Playground";
import Error404 from "./screens/Error404";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
  );
}

export default App;
