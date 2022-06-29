import react,{useState,useEffect} from 'react'
import axios from 'axios'
import {AiOutlineHeart,AiFillHeart} from'react-icons/ai'
import {MdChevronLeft,MdChevronRight} from'react-icons/md'

const Slider = ({title,url}) => {
  const [movie, setmovie] = useState([])
  const [like, setlike] = useState(false)
let link=url.popular
  useEffect(() => {
    // console.log(url)
    axios.get(url).then((res)=>
    setmovie(res.data.results)
    )
    
  }, [url]);
  // console.log(movie);
  const slideleft=()=>{
    var slider=document.getElementById("slider")
    slider.scrollLeft=slider.scrollLeft-500
  }
  const slideright=()=>{
    var slider=document.getElementById("slider")
    slider.scrollLeft=slider.scrollLeft+500
  }
  return (
    <div className=''>
    <h1 className='text-white my-6'>{title}</h1>
    <div className='relative flex items-center group'>
   <MdChevronLeft onClick={slideleft} className='bg-white rounded-xl opacity-50 hover:opacity-90 hidden group-hover:block absolute z-10 text-[30px]'/>
    <div id={'slider'} className='w-full h-full whitespace-nowrap  scrollbar-hide overflow-x-scroll scroll-smooth relative'>
      {
        movie.map((el,i)=>
     
      
      
  <div key={el.id} className='w-[160px] md:w-[240px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
          <img className='w-full  h-auto block' src={`https://image.tmdb.org/t/p/w500/${el?.backdrop_path}`} alt={el.original_title}></img>
<div className='top-0 absolute left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
<p key={el.id} onClick={(i)=>setlike(!like)} className=' flex justify-center items-center text-sm md:text-sm  my-4'>{like?<AiFillHeart />:<AiOutlineHeart/>}</p>
  <p className=' flex justify-center items-center text-sm md:text-sm text-center w-full h-full'>{el?.original_title}</p>
 
</div>
          </div>
        
        )

      }
     
      </div>
      <MdChevronRight onClick={slideright} className=' text-[30px]  bg-white rounded-xl opacity-50 hover:opacity-90 hidden group-hover:block'/>
    </div>
    </div>
  )
}

export default Slider