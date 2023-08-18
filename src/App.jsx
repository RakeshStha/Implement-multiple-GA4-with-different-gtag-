import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Blog,
  BlogDetail,
  BlogsDescription,
} from "./components/pages";

function App() {
  return (
    <>
      <nav>
        <div className="flex p-5 bg-sky-100">
          <div className="mr-2 hover:bg-sky-700">
            <Link to="/">Home</Link>
          </div>
          <div className="mr-2 hover:bg-sky-700">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="mr-2 hover:bg-sky-700">
            <Link to="/about">About</Link>
          </div>
          <div className="mr-2 hover:bg-sky-700">
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />}>
          <Route index element={<BlogsDescription />} />
          <Route path="/blog/blog-detail" element={<BlogDetail />} />
        </Route>
      </Routes>
      ;
    </>
  );
}

export default App;
