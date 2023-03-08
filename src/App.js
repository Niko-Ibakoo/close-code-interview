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
  const getName = (name)=>{
    setSelected(current=>[...current, name])
  }
  //boxes 
  const boxes = data.map(item=>(
    <Boxes handleEvent={getName} props={item} key ={item.id}></Boxes>
  ))

  return (
    <div className="App">
    <h1>Close coding challenge</h1>
    {selected[0]&& selected.map(item=>(
      <span key={item}>{item}</span>
    ))}
      <div className="container">
      {boxes}
      </div>
      <div>
        Hello Close Team, <br /><br />
        I was having a hard time working on the code challange in that IDE , I am not familiar with that IDE so I decided to recreate the code challange from scratch locally and then I delployed it on Netlify for you to review.
        <br />
        You can check the code here : 
      </div>
    </div>
  );
}

export default App;
