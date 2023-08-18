import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { logEvent } from "../../ga4Config";
import { Config } from "../../Config";

const BlogsDescription = () => {
  useEffect(() => {
    logEvent(
      "blog",
      {
        category: "user_interaction",
        label: "blogDescription",
      },
      [Config.blog_analytic_key]
    );
  }, []);
  return (
    <div className="bg-red-300 p-10">
      <Helmet>
        <title>Blog Desc!</title>
        <meta name="description" content="This is blog description page" />
      </Helmet>
      BlogsDescription
    </div>
  );
};

export default BlogsDescription;
