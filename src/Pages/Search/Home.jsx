import Gif from '../../Components/ImageGif';
import React, { useEffect, useState } from "react";
import SearchingBar from './SearchingBar';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../../reducer/querySlice';


// export default class Home extends Component {
const Home = () => {
    const [gifs, setGifs] = useState([]);
    const text = useSelector((state) => state.query.value);
    const dispatch = useDispatch();
    // const [text, setText] = useState({
    //     search: ""
    // });
    


    const handleInput = (e) => {
        dispatch(setQuery(e.target.value));
        // const [name, value] = e.target
        // setText({ ...text, [name]: value });
    };
    
    const onSubmit = async (e) => {
        e.preventDefault();

        const gifs = await fetch(
            `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
        ).then((response) => response.json());
       
        setGifs(gifs.data)
    };

    // useEffect( () => {
    //     getGif()
    // }, []);


    // const getGifs = async (e) => {
    //     e.preventDefault();

    //     const gifs = await fetch(
    //         `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
    //     ).then((response) => response.json());
       
    //     setGifs(gifs.data)
    // }

    return (
        <div>
            <SearchingBar onSubmit = {onSubmit} handleInput={handleInput}/>


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