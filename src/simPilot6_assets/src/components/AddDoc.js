import React from 'react';
import { useState } from 'react'

const AddDoc = ({ onAdd }) => {
  const [docName, setDocName] = useState('')
  const [docText, setDocText] = useState('')
  const [date_created, setDateCreated] = useState('')

const onSubmit = (e) => {
    e.preventDefault()
    if(!docName) {
        alert('Please add a Document Name')
        return
    }
    onAdd({ docName, docText, date_created })
    setDocName('')
    setDocText('')
    setDateCreated('')
}

  return (
      <form style={formStyle} onSubmit={onSubmit}>
          <div style={inputStyle}>
              <label>Document:&nbsp;{' '}</label>
              <input 
                type='text' 
                placeholder='Add Document Name'
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
              />
          </div>
          <div style={inputStyle}>
              <label>Date Created:&nbsp;</label>
              <input 
                type='text' 
                placeholder='Add Date Created'
                value={date_created}
                onChange={(e) => setDateCreated(e.target.value)}              
                   />
          </div>
          <div style={inputStyle}>
              <label>Document Text:&nbsp;</label>
              <input 
                type='text' 
                placeholder='Add Document Text'
                value={docText}
                onChange={(e) => setDocText(e.target.value)}              
                   />
          </div>

          <input type='submit' value='Save Document' style={btnStyle} />

      </form>
  )
}

const formStyle = {
  marginBottom: "40px"
}

const inputStyle = {
    width: "100%",
    height: "20px",
    // margin: "20px 0",
    // padding: "3px 7px",
    fontSize: "15px"
 }

 const btnStyle = {
    width: "100%",
    background: "#000",
    color: "#fff",
    padding: "10px 20px",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer"
 }

export default AddDoc;