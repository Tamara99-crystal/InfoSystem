import React, { useState } from 'react'
import './people.page.css'
import IMAGE1 from '../../../assets/INDIA.jpg'
import IMAGE2 from '../../../assets/memo.jpg'


const data = [
  {
    name: "Professor F.S Bakpo ",
    email: "Prof@cs.unn.edu.ng",
    position: "HOD"
  },
  {
    name: "Kamsi Okoye",
    email: "Kamsiokoye@unn.edu.n",
    position: "Secretary"
  },
  {
    name: "Blessing Ugwu",
    email: "BlessingUgwu@unn.ed",
    position: "Lab attendant"
  },
  {
    name: "Goodness Nwachukwu",
    email: "Goodnessnwachukwu@unn.edu.ng",
    position: "Lab attendant"
  },
  {
    name: "Mathew Okoli",
    email: "Mathewokoli@unn.edu",
    position: "Lecturer"
  },
  {
    name: "Chidera Okonkwo",
    email: "Chideraokonkwo@unn.edu.ng",
    position: "Lecturer"
  },
]

const People = () => {
  const [showChair, setShowChair] = useState(false);
  const [showMemo, setShowMemo] = useState(false);

  const show = () =>{
    setShowChair(prev => !prev)
  }
  const showMemorial = () =>{
    setShowMemo(prev => !prev)
  }

  return (
    <div className='people-container'>
      <h1 onClick={show}>∆ ---&gt;Chair's Office</h1>
      { showChair && 
      <div className='dept-chair'>
        
        { data.map((datum, key) =>{
          return (
            <div className='people-info'>
              <div>
                <h3>{datum.name}</h3>
                <h3>{datum.position}</h3>
              </div>
              <h3>{datum.email}</h3>
              
            </div>
            
          )
        })}
      </div>}
      <div className='memo'>
      <h1 onClick={showMemorial}>∆ ---&gt;Memoriam</h1>
        
        {showMemo &&
        <div className='memo-container'>
        <p>It is with great sadness that we reflect on the passing of our colleagues. They had profound
          impacts on the Department of Computer Science, and on our lives.
        </p>
        
        <h2>Professor Ifeanyi Obi</h2>
        <p className='date'>May 2020</p>
        <div className='memo-notes'>
          <div className='memo-img'>
            <img src={IMAGE1}/>
          </div>
          
          <div className='texts'>
            <p>In Loving Memory of Professor Ifeanyi Obi</p>
            <p>With heavy hearts, we gather to honor the remarkable life and profound contributions of
              Professor Ifeanyi Obi, a brilliant mind and trailblazer in the world of computer science. His
              untimely departure leaves a void that can never be filled, but his enduring legacy will
              continue to inspire generations to come.
              Professor Obi's pioneering work in computer science has left an indelible mark on the field.
              His groundbreaking research pushed the boundaries of artificial intelligence, algorithms, and 
              data structures, reshaping the way we understand and interact with technology. His passion
              for innovation and his dedication to knowledge have paved the way for countless
              advancements that have shaped the digital landscape.
            </p>
          </div>
        </div>

        <h2>Mr.Francis Okoye</h2>
        <p>May 2020</p>
        <div className='memo-notes'>
          <div className='memo-img'>
            <img src={IMAGE2}/>
          </div>
          
          <div className='texts'>
            <p>In Loving Memory of Lecturer Francis Okoye</p>
            <p>Today, we gather to celebrate the life and honor the legacy of Lecturer Francis Okoye, a
              dedicated educator and esteemed member of the academic community. Though he may have
              left us physically, his profound impact on the realm of knowledge and his unwavering
              commitment to his students will forever remain etched in our hearts.
              Lecturer Okoye's passion for teaching ignited a spark of curiosity in his students that will
              continue to burn brightly for generations. His insightful lectures, engaging discussions, and
              tireless dedication inspired a love for learning that extended far beyond the classroom. He
              possessed a unique ability to transform complex concepts into relatable lessons, making the
              world of academia accessible to all who had the privilege of learning from him.
              As we bid farewell to Lecturer Francis Okoye, let us carry forward his legacy of intellectual
              curiosity, dedication, and empathy. May his memory serve as a beacon of inspiration, guiding
              us to continue pursuing knowledge with the same passion and enthusiasm that he so
              generously shared with us. Though he may no longer be with us, his spirit will forever live on
              in the hearts and minds of those he touched.
            </p>
          </div>
        </div>
        </div>}
        

        
      </div>
      
    </div>
  )
}

export default People
