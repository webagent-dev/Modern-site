import React from 'react'
import Feature from '../../feature/Feature'
import './gpt.css'

function Gpt() {
    return (
        <div className='gpt__container section__margin' id='gpt'>
          <div className="gpt__wrapper">
            <Feature title='sit amet consectetur' />
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</h2>
          </div>
          <div className="gpt__heading">
              <h1 className="gradient__text">
                  The possibilities are beyond  your imagination 
              </h1>
              <p>Explore the library</p>
          </div>
          <div className="gpt__feature__wrapper">
          <Feature 
          title='ChatBot' 
          text='voluptatem quisquam beatae libero laboriosam sint consequuntur fuga soluta deleniti!'
          />
          <Feature 
            title='Knowledgebase'
            text=' beatae libero laboriosam sint consequuntur fuga soluta deleniti!'
            />
          <Feature 
                  title='Education'
                  text='  quisquam beatae libero laboriosam sint consequuntur fuga soluta deleniti!'  
          />
          </div>
        </div>
    )
}

export default Gpt
