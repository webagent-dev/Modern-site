import React from 'react'
import './article.css'
function Article({image, date, title}) {
    return (
        <div className='article__container'>
           <div className="article__image__wrapper">
               <img src={image} alt="lot__change__img" />
           </div>
           <div className="article__other">
               <div>
                   <p>{date}</p>
                   <h3 className='title'>{title}</h3>
               </div>
           </div>
           <p>read full article</p>
        </div>
    )
}

export default Article
