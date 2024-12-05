import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Legal from "../components/Features/Legal";
import FeatureStore from "../Store/FeatureStore";

const About = () => {
  const { LegalDetailsRequest } = FeatureStore();
  useEffect(() => {
    (async () => {
      await LegalDetailsRequest("about");
    })();
  }, []);
  return (
    <>
      <Layout>
        <Legal />
      </Layout>
    </>
  );
};

export default About;
