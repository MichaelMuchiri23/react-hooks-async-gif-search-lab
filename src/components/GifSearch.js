import React, {useState} from "react";

function GifSearch({onHandler}){
    const [item, setItem] = useState("") 

   function handleSubmit(e){
    e.preventDefault()
    onHandler(item)
   } 

   return(
    <form onSubmit={handleSubmit}>
        <label>Enter a Search Term</label>
        <input value={item} onChange={(e) =>setItem(e.target.value)} />
        <button>Find Buttons</button>
    </form>
   )
}

export default GifSearch