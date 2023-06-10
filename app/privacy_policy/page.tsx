import Banner from "@/components/Banner";
import React from "react";
import { getTermsConditions } from "../actions/getTermsConditiond";
import MyEditor from "@/components/Editor";
import { getPrivacyPolicies } from "../actions/getPrivacyPolicies";

const TermsConditions = async () => {
  const terms = await getPrivacyPolicies();

  return (
    <div className="w-full h-auto">
      <Banner title="Privacy Policy" sublink="Privacy Policy" />
      <div className="w-full px-4 py-10 mx-auto max-w-7xl lg:px-0 lg:py-20">
        <MyEditor content={terms[0]?.content} />
      </div>
    </div>
  );
};

export default TermsConditions;

export const revalidate = 0;
