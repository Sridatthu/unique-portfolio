import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <p className="font-mono text-[#909092]">
        Design & Developed by <span className="font-bold">Sri Datthu</span>
      </p>
      <p className="font-mono text-[#909092]">
        © {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
};
