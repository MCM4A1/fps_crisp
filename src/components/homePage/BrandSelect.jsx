import React, { Component } from 'react'
import chanelImg from '../../images/promo/brands/chanel.png'
import burberryImg from '../../images/promo/brands/burberry.png'
import diorImg from '../../images/promo/brands/dior.png'
import fendiImg from '../../images/promo/brands/fendi.png'
import versaceImg from '../../images/promo/brands/versace.png'
import gucciImg from '../../images/promo/brands/gucci.png'
import armaniImg from '../../images/promo/brands/armani.png'
import './homePage.css'


export class BrandSelect extends Component {
    render() {
        const brandImageArray = [
            chanelImg, 
            burberryImg, 
            diorImg, 
            fendiImg, 
            versaceImg, 
            gucciImg, 
            armaniImg
        ]
        return (
            <section className="brand-select-wrap">
                <div className="brand-list">
                    {brandImageArray.map((brand,index) =>{
                        return <img src={brand} alt="brand" key={index} />
                    })}
                </div>
            </section>
        )
    }
}

export default BrandSelect
