import React from 'react'
    import './possibility.css'
    import posImage from '../../../assets/possibility.png'
function Possibility() {
    return (
        <div className='possibility__container section__padding' id='possibily'>
           <div className="possibility__image__wrapper">
               <img src={posImage} alt="possImage" />
           </div>
           <div className="possibility__text__container">
               <h4>Lorem ipsum dolor sit amet.</h4>
               <h1 className="gradient__text">Lorem ipsum, dolor sit amet consectetur adipisaccusamus.</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate culpa explicabo ducimus doloribus blanditiis sed quod consectetur dolorem nam.ibus blanditiis sed quod consectetur dolorem namibus blanditiis sed quod consectetur dolorem nam</p>
               <h4>Lorem ipsum dolor sit.</h4>
           </div>
        </div>
    )
}

export default Possibility
