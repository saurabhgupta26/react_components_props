import React from "react";

const Button = (props) => {
  return (
    <button className={props.text + " " + props.size + " " + props.type}>
      {props.icon && (
        <svg
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )}
      {props.text}
    </button>
  );
};

export default Button;
