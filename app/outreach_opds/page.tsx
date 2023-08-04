import Banner from "@/components/Banner";
import React from "react";

import VerticalTimelineComponent from "@/components/VerticalTimeline";
import client from "@/lib/prismadb";

export const metadata = {
  title: "Outreach OPDs | IUKD",
};

const OutreachPage = async () => {
  const outreachOpds: any = await client.outreachopds.findMany({
    include: {
      opdLists: true,
      doctor: {
        include: {
          department: true,
        },
      },
    },
  });

  return (
    <div className="w-full h-auto">
      <Banner title="Outreach OPDs" sublink="Outreach OPDs" />

      <VerticalTimelineComponent data={outreachOpds} />
    </div>
  );
};

export default OutreachPage;
