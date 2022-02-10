import React, { Component, useState } from "react"

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ 
        backgroundColor: color,
        marginLeft: "auto",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        cursor: "pointer"}} 
    >
      {text}
    </button>
  )
}

export default Button

{/* <button style={{
            marginLeft: "auto",
            background: "green",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer" */}