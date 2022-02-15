// import ReactDOM from 'react-dom';
import * as React from "react";
import { useState } from 'react';
import { render } from "react-dom";
// import './index.css';
import { simPilot6 as canister } from "../../declarations/simPilot6";
// import DocumentPrompt from "./components/DocumentPrompt";
import Header from "./components/Header";
import Docs from "./components/Docs";
import AddDoc from "./components/AddDoc";

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await canister.greet(name);
    setMessage(greeting);
  }

  async function doDocs() {
    const docStored = await canister.docs(docs[0].docName);
    setMessage(docStored);
  }

  const [showAddDoc, setShowAddDoc] = useState(false)

  const [docs, setDocs] = useState([
    {
        id: 1,
        docName: "Employment Contract",
        docText: "This employment agreement is made and effective as of 25th January 2020 by and between Employer and Employee",
        date_created: "2022/01/03"        
    },
    {
        id: 2,
        docName: "Non Disclosure Agreement",
        docText: "Text",
        date_created: "2022/01/08" 
    },
    {
        id: 3,
        docName: "Purchase Order",
        docText: "Text",
        date_created: "2022/01/12" 
    },
  ])

// Add Document
const addDoc = (doc) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newDoc = { id, ...doc }
  console.log(newDoc)
  setDocs([...docs, newDoc])
}

// Delete Doc
const deleteDoc = (id) => {
  setDocs(docs.filter((doc) => doc.id !== id ))
}

  return (
    <div>
      <div>
        <div>
          <div style={ containerStyle }>
          <Header onAdd={() => setShowAddDoc(!showAddDoc)} showAdd={showAddDoc} />
          {showAddDoc && <AddDoc onAdd={addDoc} />}
          {docs.length > 0 ? (
            <Docs docs={docs} onDelete={deleteDoc} />
          ) : (
            'No documents to show')}
          </div>  
      </div>

      <div style={{ margin: "30px" }}>
        <button 
          onClick={doDocs}>Save document to Internet Computer
        </button>
      </div>
      <div>
        <span style={{ margin: "30px", color: "blue" }}>{message}</span>
      </div>
      <span></span>

      <div>
        </div><p align="center">
          <textarea id="myTextarea"></textarea>
        </p>
      </div>

    </div>
  );
};

// CSS in JS
const containerStyle = {
  maxWidth: "500px",
  margin: "30px auto",
  minHeight: "200px",
  boxSizing: "border-box",
  padding: "30px",
  margin: "30px auto",
  border: "1px solid steelblue",
  borderRadius: "10px",
  fontSize: "15px"
 }

//ReactDOM.render(<App />, document.getElementById('root'));
render(<MyHello />, document.getElementById("app"));

// document.getElementById("clickMeBtn").addEventListener("click", async () => {
//   const name = document.getElementById("name").value.toString();
//   // Interact with simPilot6 actor, calling the greet method
//   const greeting = await simPilot6.greet(name);

//   document.getElementById("greeting").innerText = greeting;
// });


// import { simPilot6 } from "../../declarations/simPilot6";

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await simPilot6.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });

{/* 
  <div style={{ margin: "30px" }}>
<input
  id="name"
  value={name}
  onChange={(ev) => setName(ev.target.value)}
></input>
<button onClick={doGreet}>Get Greeting!</button>
</div>

<div>
Greeting is: "
<span style={{ color: "blue" }}>{message}</span>"
</div> 
*/}
