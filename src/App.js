import { React, useState, useEffect } from "react";
import Data from "./Data";
import Boxes from "./components/Boxes";
// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.
function App() {

  const [selected, setSelected] = useState([]);
  const [data, setData] = useState(Data);
  //get name function
  const getName = (name) => {
    if (selected.includes(name) === false) {
      setSelected((current) => [...current, name]);
    } else if (selected.includes(name)) {
      setSelected((existingName) => {
        return existingName.filter((item) => item !== name);
      });
    }
  };
  //boxes
  const boxes = data.map((item) => (
    <Boxes handleEvent={getName} props={item} key={item.id}></Boxes>
  ));

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Close coding challenge</h1>
      {selected[0] && selected.map((item) => <span key={item}>{item}</span>)}
      <div className="container">{boxes}</div>
      <div
        style={{
          backgroundColor: "grey",
          marginTop: "30px",
          borderRadius: "10px",
          padding: "20px",
          fontSize: "22px",
        }}
      >
        Hello Close Team, <br />
        <br />
        I was having a hard time working on the code challenge in the dafault
        IDE , I am not familiar with that IDE so I decided to recreate the code
        challenge from scratch locally and then I delployed it on Netlify for
        you to review. I hope that is not an issue, I have completed the task
        to the best of my understanding.
        <br />
         I focused only on the logic, so it's ugly but it works! :)
         <br />
        <br />
        You can also check the code here :{" "}
        <a href="https://github.com/Niko-Ibakoo/close-code-interview.git">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
