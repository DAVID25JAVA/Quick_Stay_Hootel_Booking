import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div>
          <Navbar />
          <main>{children}</main>
          <Footer/>
    </div>
  )
}

export default Layout