import React from "react";


const SearchingBar = ({ onSubmit, handleInput }) => {
    return (
        <form className="formSearch" onSubmit={onSubmit}>
        <div className="form-group">
        <input type="text" name="query" placeholder="Search gif..." required onChange={handleInput}/>
        <button type='submit' id='btn'> Search</button>
        </div>
    </form>
);
};

export default SearchingBar;
// const searchingBar = (props) => {
//     const [text, handleInput, handleSubmit] = props;
//     return (
//         <form onSubmit={handleSubmit}>
//         <label htmlFor="search">Search</label>
//         <input
//         onChange={handleInput}
//         type={text}
//         value={text.search}
//         placeholder="Enter"
//         required
//         />
//         </form>
//     )

// }

// export default searchingBar;