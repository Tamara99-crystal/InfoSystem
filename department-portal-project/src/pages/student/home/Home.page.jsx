import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '../../../components'
import './home.page.css'
import IMAGE1 from '../../../assets/CSboys.PNG'
import IMAGE2 from '../../../assets/csgirls.JPG'
import IMAGE3 from '../../../assets/HOD.jpg'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-carousels'>
        <Carousel />

      </div>
      <div className='home-statement'>

      </div>
      <div className='home-link-buttons'>
        <h2>Future Students</h2>
        <div>UNDERGRADUATE PROGRAMS</div>
      </div>
      <div className='latest-news'>
        <h1>Latest News</h1>
        <div className='image-news-display'>
          <div className='images-container'>
            <img src={IMAGE1} alt='researchers'/>
            <p>Computer Science Researchers design 'CLArify' framework to improve robotics</p>
            <p>2oth may, 2016</p>
          </div>
        
          <div className='images-container'>
            <img src={IMAGE2} alt='final-year'/>
            <p>2021/2022 Finalists, Sign out in style, as they write their final exams</p>
            <p>20th May, 2016</p>
          </div>
          
          <div className='images-container'>
            <img src={IMAGE3} alt='hod'/>
            <p>Department of Computer Science Announces new Head of department</p>
            <p>20th may, 2016</p>
          </div>
        </div>
        
        

      </div>
      <div className='more-link'>
          <Link>More News..</Link>
      </div>
      <div className='upcoming-events'>
        <h1>Upcoming Events</h1>
        <p><Link>More Events..</Link></p>
      </div>
    </div>
  )
}

export default Home
