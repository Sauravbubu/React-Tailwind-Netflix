import axios from 'axios';
import React,{useState,useEffect} from 'react'
import url from './Requests'
const Banner = () => {
const [movies, setMovies] = useState([]);
const random=movies[Math.floor(Math.random()*movies.length)]
    useEffect(() => {
        axios.get(url.toprated).then((res)=>
        setMovies(res.data.results)
        )
        
    }, []);
    // console.log(random)
  return (
    
    <div className='text-white w-full h-[550px]'>
    <div className='w-full h-5'>
    <div className='w-full absolute h-[550px] bg-gradient-to-r from-black' ></div>
        <img className='w-full h-[550px] object-cover'  src={`https://image.tmdb.org/t/p/original/${random?.backdrop_path}`} alt={random?.title}></img>
    
    
    <div className='absolute w-full top-[20%] p-4 md:p-8'>
    <h1 className='tex-3xl md:text-5xl'> {random?.title}</h1>
    <div  >

    <button className='bg-white text-black border mx-2 my-3 px-3 py-2  '>Play now</button>
    <button className='text-white border px-3 py-2 '>Play now</button>
    </div>
    <h3 className='text-gray-400 text-sm'>Release Date: {random?.release_date}</h3>
    <p className='w-full md:max-w-[70%] lg:max-w[50%] xl:max-w-[35%] text-gray-400 ' >{random?.overview}</p>
    </div>
    </div>
    </div>

  )
}

export default Banner