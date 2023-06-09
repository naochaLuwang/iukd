"use client";
import React from "react";
import FacebookPagePlugin from "../FacebookPagePlugin";
import YouTube, { YouTubeProps } from "react-youtube";

const EmbedPage = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "480",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const opts2: YouTubeProps["opts"] = {
    height: "240",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="flex flex-col w-full h-auto py-5 mx-auto lg:py-20 lg:max-w-7xl">
      <h1 className="mb-5 text-xl font-medium text-center lg:text-3xl lg:text-start lg:mb-10 text-neutral-900">
        Connect With Us
      </h1>
      <div className="flex flex-col items-center justify-between w-full h-auto lg:flex-row">
        <FacebookPagePlugin />
        <div className="w-[854px] h-[480px] hidden lg:block">
          <YouTube videoId="PwcM9HusAIY" opts={opts} onReady={onPlayerReady} />
        </div>
        <div className="w-[426px] h-fit lg:hidden block px-4 py-2">
          <YouTube videoId="PwcM9HusAIY" opts={opts2} onReady={onPlayerReady} />
        </div>
      </div>
      <div className="w-full h-auto mx-auto lg:mt-10 sm:mt-0 lg:max-w-7xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.341765729731!2d91.91748857428674!3d26.12039737712834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375af38847b783f3%3A0xdf00d7ca7e88c4cd!2sInstitute%20of%20Urology%20and%20Kidney%20Diseases%20(IUKD)!5e0!3m2!1sen!2sin!4v1684237935141!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: "0px solid #07344e" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default EmbedPage;
