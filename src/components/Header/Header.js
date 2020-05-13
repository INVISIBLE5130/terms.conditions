import React, {Component} from "react"
import './Header.css'

class Header extends Component{
    render() {
        return (
            <div className="header">
                <img
                    src={require("../../img/logo.svg")}
                    alt="Logo"
                    className="header__logo"/>
                <img
                    src={require("../../img/lamb.webp")}
                    alt="Lamborghini"
                    className="header__car"/>
            </div>
        )
    }
}

export default Header