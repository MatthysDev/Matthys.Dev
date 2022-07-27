import * as React from "react";
import { Calendly } from "../components/Calendly";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout pageTitle="Onboarding" withoutHeader>
      <Calendly
        minWidth="20%"
        height={900}
        url="https://calendly.com/matthysd/30min?hide_gdpr_banner=1"
      />
    </Layout>
  );
};

export default Contact;
