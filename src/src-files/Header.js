import { Component } from "react"
import "../Styles/style.css"
import "./images/Field.mp4"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg|mp4)$/));

export default class header extends Component {
    
    
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="top-nav">
                            <div className="logo-picture">
                                <div className="logo">
                                    <img src={images['SpeedyNAS Logo-05.png']} alt="hectorlsantiago logo white" />
                                </div>
                            </div>
                            <menu className="main-menu">
                                <ul>
                                    <a href="#My Projects"><button id="menu-links">Projects</button></a>
                                </ul>
                                <ul>
                                    <a href="#My Process"><button id="menu-links">Process</button></a>
                                </ul>
                                <ul>
                                    <a href="#My Skills"><button id="menu-links">Skills</button></a>
                                </ul>
                                <ul>
                                    <a href="#About Me"><button id="menu-links">About</button></a>
                                </ul>
                                <ul>
                                    <a href="#Contact"><button id="menu-links">Contact</button></a>
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
                    {/* <div className="hero-image"> */}
                        <video width="100%" autoPlay muted loop id="fieldVideo">
                            <source src="Field.mp4"></source>
                            {/* <source src={images['Field.mp4']} type="video/mp4"></source>
                            <source src="https://youtu.be/X6DuFads1Pw" type="video/mp4"></source> */}
                            <p> Your browser doesn't support this video format. </p>
                        </video>
                        <div className="hero-text">
                            <h1>Software Engineer</h1>
                            {/* <img className="colors-bar" src={images['Group 195.png']} alt="my colors bar" /> */}
                            <div className="colors-bar2" /><div className="colors-bar3" /><div className="colors-bar4" />
                            <h3>With 4+ years of college experience as a software developer.</h3>
                            <h5 id="about-subtittle">Hello, everyone. My name is Naxel Santiago, but I'm also known as Speedy. 
                            I'm an aspiring Database Designer from the University of Texas at Dallas with a Bachelors of Science 
                            in Software Engineering! My skills include Database Design, Software Architecture and Requirements gathering.</h5>
                            <br></br>
                            <button className="black-btn">Resume</button>
                            <button id="linkedIn Button" className="white-btn">Linkedin</button>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}