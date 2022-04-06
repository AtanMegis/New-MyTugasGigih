const searchingBar = (props) => {
    const [text, handleInput, handleSubmit] = props;
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input 
        onChange={handleInput}
        type={text}
        value={text.search}
        placeholder="Enter"
        required
        />
        </form>
    )

}

export default searchingBar;