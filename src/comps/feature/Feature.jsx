import React from 'react'
import './feature.css'

function Feature({text, title, other}) {
    return (
        <div className='feature__container'>
              <div className='line'/>
              <div className="feature__wrapper__text">
            <div className="feature__title">
                <h1>{title && title}</h1>
            </div>
            <div className="feature__text">
               <p>{text && text}</p>
            </div>
            </div>
            <div className='feature__other'>{other && other}</div>
        </div>
    )
}

export default Feature
