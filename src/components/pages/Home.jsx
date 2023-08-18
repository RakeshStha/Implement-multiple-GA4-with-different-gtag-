import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { logEvent } from "../../ga4Config";
import { Config } from "../../Config";

const Home = () => {
  useEffect(() => {
    logEvent(
      "home",
      {
        category: "user_interaction",
        label: "homepage",
      },
      [Config.home_analytic_key]
    );
  }, []);

  return (
    <div className="p-10">
      <Helmet>
        <title>Home!</title>
        <meta name="description" content="This is home" />
      </Helmet>
      This is home page
    </div>
  );
};

export default Home;
