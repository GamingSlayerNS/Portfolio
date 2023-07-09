import { Component } from "react"
import "../styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));

export default class sideMenu extends Component {
    // handleLink = () => {
    //     const mobileNav = document.querySelector('.mobile-nav');

    //     menuOpen = false;
    //     mobileNav.style.display = 'none';
    //     document.body.style.overflowY = 'auto';
    // }

    render() {
        return (
            <div className="mobile-nav">
                <nav>
                    <ul className="mobile-nav__menu">
                        <li>
                            <a className="mobile-nav__link" onClick={this.props.handleMenuBurger} href="#projects">Projects</a>
                        </li>
                        <li>
                            <a className="mobile-nav__link" onClick={this.props.handleMenuBurger} href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className="mobile-nav__link" onClick={this.props.handleMenuBurger} href="#about">About</a>
                        </li>
                        <li>
                            <a className="mobile-nav__link" onClick={this.props.handleMenuBurger} href="#footer">Contact</a>
                        </li>
                        <li className="mobile-nav__link-line"></li>
                        <li>
                            <button id="theme-toggle2">
                                <img id="theme-toggle-img" className="mobile-nav__theme-sun"
                                src={images['icon-dark sun.png']} alt="toggle-theme button"></img>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}