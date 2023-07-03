import Banner from "@/components/Banner";
import React from "react";

import { getAllOutreachOpds } from "../actions/getAllOutreachOpds";
import VerticalTimelineComponent from "@/components/VerticalTimeline";

export const metadata = {
  title: "Outreach OPDs | IUKD",
};

const OutreachPage = async () => {
  const outreachOpds = await getAllOutreachOpds();

  return (
    <div className="w-full h-auto">
      <Banner title="Outreach OPDs" sublink="Outreach OPDs" />

      <VerticalTimelineComponent data={outreachOpds} />
    </div>
  );
};

export default OutreachPage;

export const revalidate = 0;
