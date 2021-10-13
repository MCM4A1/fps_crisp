import React, { Component } from 'react'
import './navigation.css'
import searchIcon from '../../icons/glass-64.png'
import bagIcon from '../../icons/bag-64.png'
import heartIcon from '../../icons/heart-96.png'
import menuIcon from '../../icons/menu.png'

export class navigation extends Component {
    constructor(props){
        super(props)
        this.state ={
            page: "home",
            cartValue: 0.00,
            showMobileNavigation: false,
        }
    }

    toggleNavigation = () =>{
        this.setState({
            showMobileNavigation: this.state.showMobileNavigation ? false : true,
        })
    }

    render() {
        const menuItems = [
            {text: "home", value:"home"},
            {text: "shop", value:"shop"},
            {text: "blog", value:"blog"},
            {text: "sale", value:"sale"},
            {text: "contact us", value:"contact"},]

        return (
            <header className="navigation-wrap">
                <div className="crisp-logo-wrapper mobile-none">
                    <div className="crisp-logo">
                        CRISP
                    </div>
                </div>
                <div className="navigation-menu-wrap">
                    <ul>
                        {menuItems.map((item) =>{
                            return <li className={this.state.page===item.value ? "navigation-menu-item navigation-menu-selected" : "navigation-menu-item"}>{item.text}</li>
                        })}
                        <li className=" navigation-search-wrap"><img className="nav-img" src={searchIcon} alt="search" /> search</li>
                    </ul>
                </div>
                <div className="navigation-actions">
                    <ul>
                        <li className="navigation-menu-item">Sign In</li>
                        <li className="navigation-menu-item">Create an account</li>
                        <img className="nav-img" src={heartIcon} alt="heart" />
                        <img className="nav-img" src={bagIcon} alt="shopping cart" />
                        <div className="navigation-flex-column">
                            Shopping Cart <br/> {this.state.cartValue} EUR
                        </div>
                    </ul>
                </div>
                <div className="mobile-only-navigation">
                    <div className="mobile-nav-toggler">
                        <img src={menuIcon} onClick={this.toggleNavigation} alt="toggle menu" />
                    </div>
                    <div className="crisp-logo-wrap">
                        <div className="crisp-logo">
                            CRISP
                        </div>
                    </div>
                    <div className="mobile-nav-actions">
                        <img className="nav-img" src={searchIcon} alt="search" />
                        <img className="nav-img" src={bagIcon} alt="shopping cart" />
                    </div>
                </div>
                <div className={this.state.showMobileNavigation ? "mobile-nav-slide mobile-nav-slide-opened" : "mobile-nav-slide" } >
                    <li onClick={this.toggleNavigation} className={"navigation-menu-item"}>close</li>
                    {menuItems.map((item) =>{
                        return <li className={this.state.page===item.value ? "navigation-menu-item navigation-menu-selected" : "navigation-menu-item"}>{item.text}</li>
                    })}
                </div>
            </header>
        )
    }
}

export default navigation
