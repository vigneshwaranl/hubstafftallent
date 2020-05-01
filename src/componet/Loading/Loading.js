import React from "react";
import "antd/dist/antd.css";
import { Skeleton } from "antd";

const Loading = (props) => {
  return (
    <>
      <Skeleton avatar paragraph={{ rows: 3 }} />
      <Skeleton avatar paragraph={{ rows: 3 }} />
      <Skeleton avatar paragraph={{ rows: 3 }} />
    </>
  );
};

export default Loading;
