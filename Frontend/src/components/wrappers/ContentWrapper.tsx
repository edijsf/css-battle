import React from "react";

interface Props extends SFC {}

const ContentWrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col md:container md:mx-auto">{children}</div>
  );
};

export default ContentWrapper;
