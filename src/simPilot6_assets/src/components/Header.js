import React, { Component, useState } from "react";
import Button from './Button';

const Header = ({ onAdd, showAdd }) => {
  return (
    <header style={headerStyle}>
        <h2>My Documents</h2>
        <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'}
            onClick={onAdd} 
        />
    </header>
  )
}

const headerStyle = {
        maxWidth: "500px",
        display: "flex",
        justifContent: "space-between",
        alignItems: "center"
        }

export default Header;

