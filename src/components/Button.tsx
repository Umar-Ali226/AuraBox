import React from "react";

interface ButtonProps {
  text: string;
  paddingY: string;
  paddingL: string;
  paddingR: string;
  rounded: string;
  backgroundColor?: string; 
  textColor?: string;
  borderColor?: string;
  outline?: boolean; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  paddingY,
  paddingL,
  paddingR,
  rounded,
  backgroundColor = "bg-primaryColor",
  textColor = "text-white", 
  borderColor = "border-primaryColor", 
  outline = false, 
}) => {
  return (
    <div>
      <button
        className={`${textColor} font-semibold text-sm ${rounded} ${backgroundColor} ${borderColor} ${
          outline ? "border-[0.1rem]" : "border"
        }`}
        style={{
          paddingTop: paddingY,
          paddingBottom: paddingY,
          paddingLeft: paddingL,
          paddingRight: paddingR,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;