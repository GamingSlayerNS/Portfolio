import { Component } from "react"
import "../styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg|mp4)$/));

export default class header extends Component {
    render() {
        return (
            <div className="container">
                <div className="header__top-nav" id="header">
                    <button className="header__bars">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <div className="header__logo">
                        <a href="#top"><img src={images['SpeedyNAS Logo-05.png']} alt="hectorlsantiago logo white" /></a>
                    </div>
                    <menu>
                        <ul className="header__menu">
                            <li>
                                <a href="#projects"><button id="header__menu-links">Projects</button></a>
                            </li>
                            <li>
                                <a href="#myskills"><button id="header__menu-links">Skills</button></a>
                            </li>
                            <li>
                                <a href="#about"><button id="header__menu-links">About</button></a>
                            </li>
                            <li>
                                <a href="#footer"><button id="header__menu-links">Contact</button></a>
                            </li>
                        </ul>
                    </menu>
                    <ul className="header__socials">
                        <li>
                            <button>
                                <img src={images['icon-dark sun.png']} alt="toggle-theme"></img>
                            </button>
                        </li>
                        <li className="header__line"></li>
                        <li>
                            <a href="https://github.com/GamingSlayerNS" target="_blank" rel="noreferrer">
                                <div><img src={images['icon-dark github.png']} alt="Github" /></div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/naxelsantiago/" target="_blank" rel="noreferrer">
                                <img src={images['icon-dark linkedin.png']} alt="Linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}