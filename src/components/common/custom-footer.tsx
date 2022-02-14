import React from "react";

type FooterProps = {
  label: string;
};

const CustomFooter = ({ label }: FooterProps) => {
  return (
    <footer>
      <p>{label}</p>
    </footer>
  );
};

export default CustomFooter;
