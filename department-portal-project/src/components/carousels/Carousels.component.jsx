import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import './carousel.styles.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import IMAGE1 from '../../assets/CSboys.PNG'
import IMAGE2 from '../../assets/csgirls.JPG'
import IMAGE3 from '../../assets/HOD.jpg'
import IMAGE4 from '../../assets/HOD2.jpg'
import IMAGE5 from '../../assets/app.jpg'

import { Link } from 'react-router-dom';


const Carousels = () => {
    
    return (
        <div className='CarouselContainer'>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={9000} stopOnHover={false} className='carousel'>
                <div className='slide' id='img1'>
                    <img src={IMAGE4} alt="Image 1" />
                    <div className='news-header'>
                        <div><h2>Department of Computer Science Announces new Head of department</h2></div>
                        <div><Link>Read More</Link></div>
                    </div>
                    
                </div>
                <div className='slide'>
                    <img src={IMAGE2} alt="Image 2" />
                    <div className='news-header'>
                        <div><h2>2021/2022 Finalists, Sign out in style, as they write their final exams</h2></div>
                        <div><Link>Read More</Link></div>
                    </div>
                </div>
                <div className='slide'>
                    <img src={IMAGE5} alt="Image 3" />
                    <div className='news-header'>
                        <div><h2>Two Computer science students create a website called "Gwali" where they share lecture notes</h2></div>
                        <div><Link>Read More</Link></div>
                    </div>
                </div>
                <div className='slide'>
                    <img src={IMAGE1} alt="Image 4" />
                    <div className='news-header'>
                        <div><h2>Computer Science Researchers design 'CLArify' framework to improve robotics</h2></div>
                        <div><Link>Read More</Link></div>
                    </div>
                </div>
                <div className='slide'>
                    <img src={IMAGE3} alt="Image 4" />
                    <div className='news-header'>
                        <div><h2>NCS: International Conference October 2023<br></br>Theme: Communications and E-Systems fro Economic stability</h2></div>
                        <div><Link>Read More</Link></div>
                    </div>
                </div>
          
            </Carousel>
        </div>
        
      );
}

export default Carousels
