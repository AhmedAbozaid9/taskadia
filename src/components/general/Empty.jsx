import { Sparkle } from "lucide-react";
import React from "react";

const Empty = () => {
  return (
    <div className="relative flex flex-col items-center justify-center border border-2 border-main-dark-bg mainShadow rounded-lg px-4 py-16 ">
      <Sparkle className="absolute top-10 left-10" />
      <Sparkle className="absolute top-30 right-10" />
      <Sparkle className="absolute bottom-2 right-30" />
      <p>This looks empty</p>
    </div>
  );
};

export default Empty;
