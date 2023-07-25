import React from "react";

const Button = (props) => {
  const { customStyle, handler } = props;
  return (
    <button
      onClick={() => handler()}
      className={`px-4 py-2 rounded text-lg font-semibold mr-0 ${customStyle}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
