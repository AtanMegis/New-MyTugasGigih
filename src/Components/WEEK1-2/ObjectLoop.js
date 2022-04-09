import React from "react";
import Article from "./Article";


const ObjectLoop = () => {
    const articles = [
    {
        id:1,
        title: "Article 1",
        author: "John Doe",
        date: "2017-09-08",
        content: "This is Article ",
    },
    
    {
        id:2,
        title: "Article 2",
        author: "John Wick",
        date: "2017-09-07",
        content: "This is Article 2 ",
    },

    ];

   return (
       
       articles.map(e => (
         
        <Article 
           key={e.id}
           title={e.title}
           author={e.author}
           date={e.date}
           content={e.content}
            />
           ))
   
   );
};

export default ObjectLoop;