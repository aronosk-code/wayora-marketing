import React from "react";
import ArrivalsScene from "./ArrivalsScene";
import StoryPhone from "./StoryPhone";

export default function StoryStage({ beat }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/70 via-card to-secondary/40 p-4 sm:p-10">
      <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-[1.3fr_auto]">
        <ArrivalsScene beat={beat} />
        <div className="flex h-[322px] justify-center overflow-hidden sm:h-auto sm:overflow-visible">
          <StoryPhone beat={beat} />
        </div>
      </div>
    </div>
  );
}