import React, { Component } from 'react'
//import promoBackground from '../../images/promo/promo-background.png'
import promoGirlBlackDress from '../../images/promo/promo-girl-bigger.png'
import promoGirlWhiteDress from '../../images/promo/promo-girl-smaller.png'
import rectangleArrow from '../../images/sliders/slider-button-arrow.png'
import './homePage.css'


export class HomePageSlider extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedIndex: 1,
            swipeStart: "",
        }
    }

    shopNow = () =>{
        console.log("Shop now")
    }
    changeSliderImage = () =>{
        this.setState({
            selectedIndex: this.state.selectedIndex===1 ? 2 : 1,
        })
    }

    //Function currently does not check the direction of the swipe
    //just the swipe event itself
    
    swipeStartHandler = (e)=>{
        console.log("Swipe start: ",e.touches[0].clientX)
        this.setState({
            swipeStart: e.touches[0].clientX
        })
    }

    swipeEndHandler = (e)=>{
        if(e.changedTouches[0].clientX != this.state.swipeStart)
            this.changeSliderImage()
    }



    render() {
        return (
            <section onTouchStart={this.swipeStartHandler} onTouchEnd={this.swipeEndHandler} className="slider-wrap">
                <div className={this.state.selectedIndex === 1 ? "slider-moving-wrap" : "slider-moving-wrap slider-moving-wrap-toggle"}>
                    <div className="slider-content-wrap">
                        <div className="slider-text-wrap">
                            <div className="slider-text">
                                SUMMER SALE GET <span className="inverted-text">30% OFF </span>ON ALL DRESS.
                            </div>
                            <div className="shop-button-wrapper">
                                <div id="shop-now-button" className="promo-button" onClick={this.shopNow}>SHOP NOW</div>
                            </div>
                        </div>
                        <div className="slider-images">
                            <img  className="promo-img-small" src={promoGirlWhiteDress} alt="girl in dress" />
                            <img  className="promo-img-large" src={promoGirlBlackDress} alt="girl in dress" />
                        </div>
                    </div>

                    <div className="slider-content-wrap">
                        <div className="slider-text-wrap">
                            <div className="slider-text">
                                SUMMER SALE GET <span className="inverted-text">30% OFF </span>ON ALL CLOTHING.
                            </div>
                            <div className="shop-button-wrapper">
                                <div id="shop-now-button" className="promo-button" onClick={this.shopNow}>SHOP NOW</div>
                            </div>
                        </div>
                        <div className="slider-images">
                            <img  className="promo-img-small" src={promoGirlBlackDress} alt="girl in dress" />
                            <img  className="promo-img-large" src={promoGirlWhiteDress} alt="girl in dress" />
                        </div>
                    </div>
                </div>
                    
                <div className="slider-action-buttons mobile-none">
                    <div className="slider-select-buttons">
                        <div onClick={this.changeSliderImage} className={this.state.selectedIndex === 1 ? "slider-rectangle-filled slider-rectangle" : "slider-rectangle"}></div>
                        <div onClick={this.changeSliderImage} className={this.state.selectedIndex === 2 ? "slider-rectangle-filled slider-rectangle" : "slider-rectangle"}></div>
                    </div>
                    <div className="slider-arrow-wrap">
                        <div onClick={this.changeSliderImage} className="slider-arrow-left">
                            <img src={rectangleArrow} alt="previous" />
                        </div>
                        <div onClick={this.changeSliderImage} className="slider-arrow-right">
                            <img  src={rectangleArrow} alt="next" />
                        </div>
                    </div>
                </div>

                <div className="slider-action-buttons-mobile">
                    <div onClick={this.changeSliderImage} className="slider-arrow-left">
                        <img src={rectangleArrow} alt="previous" />
                    </div>
                    <div className="slider-select-buttons">
                        <div  onClick={this.changeSliderImage} className={this.state.selectedIndex === 1 ? "slider-rectangle-filled slider-rectangle" : "slider-rectangle"}></div>
                        <div  onClick={this.changeSliderImage} className={this.state.selectedIndex === 2 ? "slider-rectangle-filled slider-rectangle" : "slider-rectangle"}></div>
                    </div>
                    <div onClick={this.changeSliderImage} className="slider-arrow-right">
                        <img  src={rectangleArrow} alt="next" />
                    </div>
                </div>

            </section>
        )
    }
}

export default HomePageSlider
