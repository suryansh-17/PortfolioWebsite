import React from "react";
import ThemeBtn from "./ThemeBtn";
import DateandTime from "./DateandTime";
function Header() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <DateandTime />
        </div>
        <div className="ml-auto">
          {" "}
          <ThemeBtn />
        </div>
      </div>
    </>
  );
}

export default Header;
