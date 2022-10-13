import axios from 'axios';
import React, {useState, useEffect} from 'react'

const AnimeList = () => {
    const [Search, setSearch] = useState()
    const [anime, setAnimeData] = useState([]);

    const getAnime = () => {
        fetch(`https://api.jikan.moe/v4/anime?q=${Search}$page=2`)
            .then(
                Response => Response.json()
            )
            .then(Response => {
                setAnimeData(Response.data)
            })

    }

    useEffect(() => {
        getAnime()
    }, [Search])

    const [msg, updatemsg] = useState("");
    const addtocart = (animeinfo) => {
        axios
            .post(" http://localhost:1234/cart", animeinfo)
            .then(Response => {
                alert("added to Watchlist succesfully")
            })
    }


   
    const addtocartinfo = (animeinfo) => {
        axios
            .post("   http://localhost:1234/cartinfo", animeinfo)
            .then(Response => {
                alert("You Can see the all information in Detail Page")
            })
    }


    return (
        <div>

            <div className="movie-page">
                <div className="container">
                    <div className="header">
                        <div className="flex">
                            <div className='mt-5'>
                                <h1>Anime List
                                </h1>
                                <h3>{msg}</h3>
                            </div>

                            <div className='mt-5'>
                                <input
                                    className='form-control'
                                    type={Search}
                                    name="search"
                                    placeholder="Search.."
                                    aria-label="Search"
                                    onChange={(e) => setSearch(e.target.value)}/>
                            </div>

                        </div>
                    </div>
                    {
                        anime.map((anime, index) => {
                            return (
                                <div class="card" key={index}>

                                    <img src={anime.images.jpg.large_image_url} alt=""/>

                                    <div class="overlay">
                                        <div class='text'>
                                            <h2>{anime.title_japanese}</h2>
                                            <p class="synopsis">
                                                {anime.synopsis}
                                            </p>

                                            <p class='b_p'>
                                                <button className='btn btn-primary m-2' onClick={addtocart.bind(this, anime)}>
                                                    <i class="fa fa-plus fa-1x " >  </i>       Add to Watchlist  
                                                   
                                                </button>

                                                <button className='btn btn-warning m-3' onClick={addtocartinfo.bind(this, anime)}><i class="fa fa-info"></i>See details</button>

                                            </p>

                                        </div>
                                    </div>
                                </div>

                          
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default AnimeList;
