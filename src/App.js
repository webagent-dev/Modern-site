import React from 'react'
import './app.css'
import './index.css'
import Blog from './comps/container/blog/Blog'
import Header from './comps/container/header/Header'
import Navbar from './comps/navbar/Navbar'
import Brand from './comps/brand/Brand'
import Gpt from './comps/container/gpt/Gpt'
import MainFeature from './comps/feature/Mainfeature'
import Cta from './comps/cta/Cta'
import Footer from './comps/container/footer/Footer'
import Possibility from './comps/container/possibility/Possibility'
function App() {
    return (
        <div className='app__container'>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Gpt />
            <MainFeature />
            <Possibility />
            <Cta />
            <Blog />
            <Footer /> 
        </div>
    )
}

export default App
