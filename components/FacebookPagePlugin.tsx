"use client";
import { FacebookProvider, Page } from "react-facebook";

const FacebookPagePlugin = () => {
  return (
    <FacebookProvider appId="1418410625626719">
      <Page
        href="https://www.facebook.com/AUKDASSAM/"
        tabs="timeline"
        width={400}
        height={480}
        smallHeader={false}
        adaptContainerWidth={true}
        hideCover={false}
        showFacepile={true}
      />
    </FacebookProvider>
  );
};

export default FacebookPagePlugin;
