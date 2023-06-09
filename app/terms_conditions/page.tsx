import Banner from "@/components/Banner";
import React from "react";
import { getTermsConditions } from "../actions/getTermsConditiond";
import MyEditor from "@/components/Editor";

const TermsConditions = async () => {
  const terms = await getTermsConditions();
  console.log(terms);

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto">
        <Banner title="Privacy Policy" sublink="Privacy Policy" />
      </div>
    </div>
  );
};

export default TermsConditions;

export const revalidate = 0;
