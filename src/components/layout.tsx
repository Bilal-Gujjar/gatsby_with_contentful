import React from 'react'
import Navbar from './nav'
import Footer from './footer'
export default function layout({children}) {
    return (
        <div>
            <Navbar/>
           
            {children}
            <Footer/>
        </div>
    )
}
