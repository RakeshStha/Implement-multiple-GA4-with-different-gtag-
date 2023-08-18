import { Link, Outlet } from "react-router-dom";
const Blog = () => {
  return (
    <div className="p-10">
      Blog
      <br></br>
      <button className="bg-sky-500 hover:bg-sky-700 ...">
        <Link to="/blog/blog-detail">Blog detal</Link>
      </button>
      <div className="p-5 bg-grey-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;
