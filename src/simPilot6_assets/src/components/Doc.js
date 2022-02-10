import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Doc = ({doc, onDelete }) => {
  return (
  <div style={docStyle}>
      <h3>
          {doc.docName} <FaTimes style={{ 
              color: 'red', 
              cursor: 'pointer',
              float: 'right'}} 
              onClick={() => onDelete(doc.id)} />
      </h3>
      <p>Created on: {doc.date_created}</p>

      <p> {doc.docText}</p>
  </div>
  )
};

const docStyle = {
    background: "#f4f4f4",
    margin: "5px",
    padding: "10px 20px",
    cursor: "pointer"
}

export default Doc;
