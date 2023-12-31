import {
  // BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";

function App() {
  return (
    // <BrowserRouter>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
