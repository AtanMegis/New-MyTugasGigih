import React from "react";
import "./index.css"

const ImgGif = ({ title, url, rating }) => {

    return (
        <div className="img-song">
            <img alt="gif" src={url} className="gif-spotify" />
            <p className="title">{title}</p>
            <p className="rating">{rating}</p>
        </div>
    )
}

export default ImgGif;