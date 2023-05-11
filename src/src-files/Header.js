import { Component } from "react"
import "./style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default class header extends Component {
    
    
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="top-nav">
                            <div className="logo-picture">
                                <div className="logo">
                                    <img src={images['Speedy Logo.png']} alt="hectorlsantiago logo white" />
                                </div>
                            </div>
                            <menu className="main-menu">
                                <ul>
                                    <a href="#myprojects"><button id="menu-links">Projects</button></a>
                                </ul>
                                <ul>
                                    <a href="#myprocess"><button id="menu-links">Process</button></a>
                                </ul>
                                <ul>
                                    <a href="#myskills"><button id="menu-links">Skills</button></a>
                                </ul>
                                <ul>
                                    <a href="#about"><button id="menu-links">About</button></a>
                                </ul>
                                <ul>
                                    <a href="#contact"><button id="menu-links">Contact</button></a>
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
                </header>

                <div className="slideshow">
                    <div className="hero-image">
                        <div className="hero-text">
                            <h1>UI/UX Designer</h1>
                            <img className="colors-bar" src={images['Group 195.png']} alt="my colors bar" />
                            <h3>With 6+ years of experience as a web designer and developer.</h3>
                            <h5 id="about-subtittle">Hello! I'm Hector, a UI/UX Designer. I create great interaction and support with others with my
                                UI/UX, management and coding skills. <br />I help businesses big and small to turn their ideas into
                                great products their customers love.</h5>
                            <button className="black-btn">Resume</button>
                            <button id="linkedIn Button" className="white-btn">Linkedin</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}