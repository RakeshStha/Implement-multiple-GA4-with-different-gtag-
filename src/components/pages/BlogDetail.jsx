import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { logEvent } from "../../ga4Config";
import { Config } from "../../Config";

const BlogDetail = () => {
  useEffect(() => {
    logEvent(
      "blog_detail",
      {
        category: "user_interaction",
        label: "blogDetail",
      },
      [Config.blog_analytic_key]
    );
  }, []);

  console.log("@data", Config);

  return (
    <div className="p-10 bg-red-100">
      <Helmet>
        <title>Blog details!</title>
        <meta name="description" content="This is blog details page" />
      </Helmet>
      BlogDetail
    </div>
  );
};

export default BlogDetail;
