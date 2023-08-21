import React from 'react'
import {Footer, Navbar} from './index'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
