import Gif from '../../Components/ImageGif';
import React, { useEffect, useState } from "react";
import SearchingBar from './SearchingBar';


// export default class Home extends Component {
const Home = () => {
    const [gifs, setGifs] = useState([]);

    const [text, setText] = useState({
        search: ""
    });

    const handleInput = (e) => {
        const [name, value] = e.target
        setText({ ...text, [name]: value });
    };

    // useEffect( () => {
    //     getGif()
    // }, []);


    // const getGifs = (e) => {
    //     e.preventDefault()
    //     // console.log(process.env)
    //     // getGif()
    // };



    const getGifs = async (e) => {
        e.preventDefault();
        console.log(process.env)

        const gifs = await fetch(
            `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
        ).then((response) => response.json());
        // console.log(gifs)
        setGifs(gifs.data);
        console.log(gifs.data)

        //// this.setState({ gifs: gifs.data });
    }
    // state = {
    //     gifs: [],
    //     text: '',
    // };
    // handleInput = (e) => {
    //     this.setState({ text: e.target.value });
    // };

    // const getGifs = async (e) => {
    //     e.preventDefault()


    // getGifs = async (e) => {
    //     e.preventDefault();



    // console.log(process.env)
    // const gifs = await fetch(
    //     `https://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
    // ).then((response) => response.json());
    // console.log(gifs)
    // this.setState({ gifs: gifs.data });

    // const { text: query } = this.state;
    // const LIMIT = 12;
    // const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

    // const gifs = await fetch(
    //     `${config.GIPHY_BASE_URL}/gifs/search?q=${query}&api_key=${GIPHY_KEY}&limit=${LIMIT}`
    // ).then((response) => response.json());

    // this.setState({ gifs: gifs.data });


    // render() {
    return (
        <div>
            <SearchingBar text={text} handleInput={handleInput} handleSubmit={getGifs} />


            <div className="gifs">
                {gifs.map((gif) => (
                    gif.rating === 'g' && (
                        <Gif
                            key={gif.id}
                            url={gif.images.original.url}
                            title={gif.title} />
                    )
                ))}
            </div>
        </div>
    );
}
// }

export default Home;