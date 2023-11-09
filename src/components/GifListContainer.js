import React, {useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
   const [gif, setGif] = useState([])

   function handleSubmitAndFetch(item){
     fetch(`https://api.giphy.com/v1/gifs/search?q=${item}&api_key=V0YqPJJqnS5yCkrS5iTFThNjfTqhYOGZ`)
     .then(res => res.json())
     .then(image => setGif(image.data.slice(0,3)))
   }

   return(
    <div>
     <GifSearch onHandler={handleSubmitAndFetch} />
     <GifList gifs={gif} />
    </div>
   )
}

export default GifListContainer