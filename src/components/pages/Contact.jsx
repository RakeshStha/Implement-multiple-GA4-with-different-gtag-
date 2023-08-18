import { useEffect } from "react";
// import { homeAnalytics } from "../../firebaseConfig";
import { Helmet } from "react-helmet-async";
import { logEvent } from "../../ga4Config";
import { Config } from "../../Config";

const Contact = () => {
  useEffect(() => {
    logEvent(
      "contact",
      {
        category: "user_interaction",
        label: "contact",
      },
      [Config.home_analytic_key]
    );
  }, []);

  return (
    <div className="p-10">
      <Helmet>
        <title>Contact!</title>
        <meta name="description" content="This is contact" />
      </Helmet>
      This is contact page
    </div>
  );
};

export default Contact;
