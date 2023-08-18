import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { logEvent } from "../../ga4Config";
import { Config } from "../../Config";

const About = () => {
  useEffect(() => {
    logEvent(
      "about",
      {
        category: "user_interaction",
        label: "about",
      },
      [Config.home_analytic_key]
    );
  }, []);
  return (
    <div className="p-10">
      <Helmet>
        <title>Contact!</title>
        <meta name="description" content="This is contact page" />
      </Helmet>
      This is about page
    </div>
  );
};

export default About;
