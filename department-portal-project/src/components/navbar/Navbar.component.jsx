import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.component.css'


const Menu = () =>(
    <> 
    
    <p><NavLink to='/' activeclassname='active'>Home</NavLink></p>
    <p><NavLink to='/user/about'>About</NavLink></p>
    <p><NavLink to='/user/people'>People</NavLink></p>
    <p><NavLink to='/user/news'>News/Updates</NavLink></p>
    <p><NavLink to='/user/announcement'>Announcement</NavLink></p>
    <p><NavLink to='/user/courses'>Courses</NavLink></p>
    <p><NavLink to='/user/faqs'>FAQs</NavLink></p>
    <p><NavLink to='/user/map'>Map</NavLink></p>
    <p><NavLink to='contact'>Resources</NavLink></p>



    </>
  )

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar-container'>
        <div className='navbar-links'>
            <div className='navbar-links__logo'>
                <p>University of Nigeria, Nsukka</p>
            </div>
            <div className='navbar-links__menu'>
                <Menu />
            </div>
        </div>
       
        <div className='navbar-resized-menu'>
            {toggleMenu
                ? <RiCloseLine color='#fff' size={27} onClick={() =>setToggleMenu(false) } />
                : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
            }
            {
                toggleMenu && (
                    <div className='navbar-resized-menu__container scale-up-center'>
                        <div className='navbar-resized-menu__container-links'>
                            <Menu />
                            

                        </div>
                    </div>
                )
            }
            
        </div>
      
    </div>
  )
}

export default Navbar
