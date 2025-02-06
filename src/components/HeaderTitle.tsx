import React from "react";

interface HeaderTitleProps {
  text: string;
  customStyle?: string;
}

const HeaderTitle = ({ text, customStyle }: HeaderTitleProps) => {
  return (
    <h2
      className={`${customStyle && customStyle} text-2xl md:text-4xl font-bold`}
    >
      {text}
    </h2>
  );
};

export default HeaderTitle;
