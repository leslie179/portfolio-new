import React from "react";
import "./One.css";

const One = ({ leftContent, rightContent }) => {
  return (
    <div className="left-right-container">
      <div className="left-content">leftContent</div>
      <div className="right-content">{rightContent}</div>
    </div>
  );
};

export default One;