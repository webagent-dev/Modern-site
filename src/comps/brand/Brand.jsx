import React from 'react'
import './brand.css'
import { google, slack, atllasin,dropbox,shopify} from './images'

function Brand() {
    return (
        <div className='brand__container section__padding'>
            <div>
                <img src={google} alt="google__img" />
            </div>
            <div>
                <img src={slack} alt="slack__img" />
            </div>
            <div>
                <img src={atllasin} alt="atllasin__img" />
            </div>
            <div>
                <img src={dropbox} alt="dropbox__img" />
            </div>
            <div>
                <img src={shopify} alt="shopify__img" />
            </div>
        </div>
    )
}

export default Brand
