import React from "react";

function Heading({ children, textsize = "text-l", ...props }) {
  return (
    <div
      className={`inline-flex rounded-2xl bg-neutral-800  p-2 font-mono font-bold text-white dark:text-black dark:bg-white ${textsize}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Heading;
