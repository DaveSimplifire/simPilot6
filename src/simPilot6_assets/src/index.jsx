// import ReactDOM from 'react-dom';
import * as React from "react";
import { render } from "react-dom";
// import './index.css';
import { simPilot6 } from "../../declarations/simPilot6";
import DocumentPrompt from "./components/DocumentPrompt";
import Header from "./components/Header";


const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await simPilot6.greet(name);
    setMessage(greeting);
  }

  return (
    <div>
      <div>
        <div>
          <div style={ containerStyle }>
          <Header />
          <p>Greetings, from DFINITY!</p>
          <p>
            {" "}
            Enter document name, then click{" "}
          <b> Get Greeting</b> to display the result.
          </p>
          </div>
          <p align="center">
          <textarea id="myTextarea"></textarea>
        </p>
        </div>
      </div>
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
    </div>
  );
};

// CSS in JS
const containerStyle = {
  maxWidth: "500px",
  margin: "30px auto",
  minHeight: "300px",
  boxSizing: "border-box",
  padding: "30px",
  margin: "30px auto",
  border: "1px solid steelblue",
  borderRadius: "5px"
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
