import React, { useState } from "react";
import Display from "./display";
const Card = (props) => {
    const  lists = props.items
    const head={
        border:'solid gray',
        width:'500px',
        Display:'flex'
    }
const [items, setItem]=useState([...lists]);
const update =()=>{
    console.log('item is added')
    setItem(items)
}

    return ( 
        <>
{
    items.map((item)=>(
        <div key={item.id}className="card" style={head}>
            <input type="radio"></input>
<h2>{item.name}</h2>
<p>{item.school}</p>
<button onClick={update}>add</button>
      </div>
  ))  
}
        </>
     );
}
 
export default Card;