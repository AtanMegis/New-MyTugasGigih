import React, { useState } from "react";
import ExploreBar from "../../Components/ExploreBar";
import Gif from "../../Components/ImageGif";

export default function Homey() {
    const [gifs, setGifs] = useState([]);

    const handleSuccessSearch = (searchGifts) => {
        setGifs(searchGifts);
    }


    return (
        <div className="container">
        <ExploreBar onSuccess={handleSuccessSearch} />
  
        <div className="gifs">
          {gifs.map((gif) => (
            gif.rating === 'g' && (
              <Gif
                key={gif.id}
                url={gif.images.original.url}
                title={gif.title}
              />
            )
          ))}
        </div>
      </div>
    )
  }