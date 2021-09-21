import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/main.scss'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            <div className="content">{ children }</div>
            <Footer/>
        </div>
    )
}
