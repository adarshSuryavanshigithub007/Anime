import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Watchlist = () => {
    const [anime, setAnimeData] = useState([]);
    const getAnime = () => {
        fetch("http://localhost:1234/cart")
            .then(Response => Response.json())
            .then(animeArray => {
                setAnimeData(animeArray.reverse())
            })

    }

    useEffect(() => {
        getAnime()
    }, [true])

    const Deleteanime = (animeid)=>{
        
       axios.delete("http://localhost:1234/cart/"+animeid)
    .then(Response=>{
     alert("delete Watchlist Succesfully")
        getAnime();
    })
     }

   
    return (
        <div>
            {
                anime.map((anime, index) => {
                    return (
                        <div class="card" key={index}>

                        <img src={anime.images.jpg.large_image_url} alt=""/>

                        <div class="img-over">
                        <h2>{anime.title}</h2>
                        <div className="butn">
                        <button className='btn btn-danger'  onClick={Deleteanime.bind(this,anime.id)}><i class="fa fa-remove"></i></button>
                        </div>
                        </div>
                        
             
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Watchlist