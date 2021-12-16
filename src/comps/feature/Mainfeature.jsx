import React from 'react'
import Feature from './Feature'

function Mainfeature() {
    const features = [
        {
            title: 'Lorem ipsum ',
            other: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi atque omnis sint odit nobis! Molestias erum!quo rerum impedit ut pariatur.'
        },
        {
            title: 'Lorem ipsum dolor ',
            other: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi atque omnis sint odit nobis! Molestias quo amet consectetur adipisicing'
        },
        {
            title: 'Lorem ipsum ',
            other: 'Lorem ipsum dolor sit   consectetur adipisicing elit. Nisi atque omnis sint odit nobis! Molestias quo rerum impedit ut pariatur.'
        }
    ]
    return (
        <div className='mainfeatuer__container section__padding' id='feature'>
            <div className="mainfeature__header">
                <h1 className='gradient__text'> Lorem ipsum dolor sit amet, adipisicing elit. Laudantium, tempore!</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='mainfeature__feature__wrapper'>
            {
                 features.map((data, i) => <Feature key={i} {...data}/>)
                
            }
        </div>
        </div>
    )
}

export default Mainfeature
