import React, { useEffect } from "react";

export const Calendly = ({ minWidth, url, height }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget -mt-8"
      data-url={url}
      style={{ minWidth, height }}
    />
  );
};
