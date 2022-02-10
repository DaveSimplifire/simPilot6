import React from 'react';
import Doc from './Doc';

const Docs = ({ docs, onDelete }) => {
  return (
    <>
        {docs.map((doc) => (
            <Doc key={doc.id} doc={doc} 
            onDelete={onDelete} />
        ))}
    </>
  )
}

export default Docs;


