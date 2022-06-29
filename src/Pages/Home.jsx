import React from 'react'
import Banner from '../Components/Banner'
import Slider from '../Components/Slider'
import url from '../Components/Requests'
const Home = () => {
  return (<>  

  <Banner/>
   <Slider title="upcomming"  url={url.upcomming}/>
   <Slider title="Popular"  url={url.popular}/>
   <Slider title="Top Rated"  url={url.toprated}/>
   </>
 
  )
}

export default Home