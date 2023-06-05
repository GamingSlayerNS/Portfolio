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
                <div className="top-nav" id="header">
                    <div className="logo-picture">
                        <div className="logo">
                            <a href="#"><img src={images['SpeedyNAS Logo-05.png']} alt="hectorlsantiago logo white" /></a>
                        </div>
                    </div>
                    <menu className="main-menu">
                        <ul>
                            <a href="#myprojects"><button id="menu-links">Projects</button></a>
                        </ul>
                        <ul>
                            <a href="#myskills"><button id="menu-links">Skills</button></a>
                        </ul>
                        <ul>
                            <a href="#myprocess"><button id="menu-links">Process</button></a>
                        </ul>
                        <ul>
                            <a href="#about"><button id="menu-links">About</button></a>
                        </ul>
                        <ul>
                            <a href="#footer"><button id="menu-links">Contact</button></a>
                        </ul>
                    </menu>
                    <div className="social-links">
                        <div><img src={images['Mask Group.png']} alt="Behance" /></div>
                        <a href="https://github.com/GamingSlayerNS" target="_blank" rel="noreferrer">
                            <div><img src={images['Mask Group-1.png']} alt="Github" /></div>
                        </a>
                        <a href="https://www.linkedin.com/in/naxelsantiago/" target="_blank" rel="noreferrer">
                            <img src={images['Mask Group-2.png']} alt="Linkedin" />
                        </a>
                        <div><img src={images['Mask Group-3.png']} alt="Facebook" /></div>
                    </div>
                </div>
            </div>
        )
    }
}