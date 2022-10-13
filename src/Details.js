import React, {useState, useEffect} from 'react'

const Details = () => {
    const [anime, setAnimeData] = useState([]);
    const getAnime = () => {
        fetch("  http://localhost:1234/cartinfo")
            .then(Response => Response.json())
            .then(animeArray => {
                setAnimeData(animeArray.reverse())
            })

    }

    useEffect(() => {
        getAnime()
    }, [true])

    return (
        <div>
            {
                anime.map((anime, index) => {
                    return (

                        <div class="flex">
                            <div class="img">
                                <img src={anime.images.jpg.large_image_url} alt=""/>
                            </div>
                            <div class="details">
                                <h3>
                                    <span>Title:-</span>{anime.title}</h3>
                                <h3>
                                    <span>Episodes:-</span>{anime.episodes}</h3>
                                <h3>
                                    <span>Duration:-</span>{anime.duration}</h3>
                                <h3>
                                    <span>Year:-</span>{anime.year}</h3>
                                <h3>
                                    <span>Rating:-</span>{anime.rating}</h3>
                                <h3>
                                    <span>Proadcast:-</span>{anime.broadcast.string}</h3>
                                <h3>
                                    <span>TimeZone:-</span>{anime.broadcast.timezone}</h3>

                          

                            <div class="synopsises">

                                <h3>
                                    <span>Synopsis</span>
                                </h3>
                                {anime.synopsis}

                            </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Details;