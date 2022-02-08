import React, { Component, useState } from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
        <h2>My Documents</h2>
        <button style={{
            marginLeft: "auto",
            background: "green",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer"
            }}>Add</button>
    </header>
  )
}

const headerStyle = {
    maxWidth: "500px",
    minHeight: "300px",
    display: "flex",
    justifContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
   }

// const btnStyle = {
//     display: "flex",
//     marginLeft: "auto",
//     background: "green",
//     color: "#fff",
//     border: "none",
//     padding: "10px 20px",
//     margin: "5px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     textDecoration: "none",
//     fontSize: "15px",
//     fontFamily: "inherit"
// }

export default Header;

