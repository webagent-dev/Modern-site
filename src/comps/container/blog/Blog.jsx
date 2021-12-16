import React from 'react'
import './blog.css'
import Article from '../../article/Article'

import blog1 from '../../../assets/blog01.png'
import blog2 from '../../../assets/blog02.png'
import blog3 from '../../../assets/blog03.png'
import blog4 from '../../../assets/blog04.png'
import blog5 from '../../../assets/blog05.png'
function Blog() {
    return (
        <div className='blog__container section__padding' id='blog'> 
            <div className="blog__header">
                <h1 className="gradient__text">Lorem,  consectetur adipisicing elit.</h1>
                </div>
                <div className="blog__content__wrapper">
                    <div className="blog__content__one">
                        <Article date='01-01-2022' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil!' image={blog1}/>
                    </div>
                    <div className="blog__content__two">
                        <Article date='01-01-2022' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil!' image={blog2}/>
                        <Article date='01-01-2022' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil!' image={blog3}/>
                        <Article date='01-01-2022' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil!' image={blog4}/>
                        <Article date='01-01-2022' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil!' image={blog5}/>
                    </div>
                </div>
                
        </div>
    )
}

export default Blog
