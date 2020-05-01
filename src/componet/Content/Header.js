import React from "react";

export const Header = ({ children }) => (
  <span
    style={{
      fontWeight: "bold",
      fontSize: "1em",
      color: "#555",
      margin: 0,
      marginRight: 40,
    }}
  >
    {children}
  </span>
);