import { useState } from "react";
import App from "../App";

export default function StuffForm({handleAddStuff}) {
  const [name,setName] = useState("")
  const [price,setPrice] = useState(0)

  //name input
  function handleNameInput(e){
    setName(e.target.value);
    console.log(name);
  }

  //price input
  function handlePrice(e){
    setPrice(e.target.value);
    console.log(price);
  }
  //hadleform
  function setStuff(e){
    e.preventDefault();
    //INITIAL_STUFFS.push(React.stuffs);

    handleAddStuff(name,price);
    
  }
  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={handleNameInput}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={handlePrice}/>

      <button onClick={setStuff}>Add Stuff</button>
    </form>
  );
}
