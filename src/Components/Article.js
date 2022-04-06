import React from "react";

const Article = ({title, author, date, content}) => {
    return (
    <div>
    <h1>{title}</h1>
    <h2>{date}</h2>
    <h3>{author}</h3>
    <p>{content}</p>
    </div>
    )
};

export default Article;