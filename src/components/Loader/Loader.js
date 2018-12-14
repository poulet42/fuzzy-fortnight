import React from "react";
import "./styles.scss";

const Loader = ({ className }) => (
  <div className="Loader">
    <svg width="1em" height="1em" viewBox="0 0 64 64">
      <g
        strokeWidth="2"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
      >
        <circle cx="32" cy="32" r="30" strokeLinecap="square" opacity="0.4" />
        <path
          d="M32,2A30,30,0,0,1,62,32"
          data-cap="butt"
          data-color="color-2"
        />
      </g>
    </svg>
  </div>
);

export default Loader;
