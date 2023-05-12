import { Component } from "react"
import "./style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg|JPEG)$/));

export default class about extends Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="container">
                    <div className="about-header">
                        <h6>Find out who I am.</h6>
                        <h2>Hi, I'm Hector L. Santiago</h2>
                        <img src={images['Rectangle 20.png']} alt=""  />
                    </div>
                    <div className="sub-about">
                        <div className="about-text">
                            <h4>And this is what I'm doing now</h4>
                            <p>My name is Hector L. Santiago. I work as a Senior UI/UX Designer for Appgate, remote from Frisco, Texas. I am designing the next generation of cyber security application for Appgate. I work directly with three of the company's best and most important teams.</p>
                            <p>Previously I worked as a user experience and user interface designer for Copart, Assistant Manager for Amazon, web consultant for Hostgator, and many years as a web designer and developer in San Juan, Puerto Rico.</p>
                            <p>I am a dedicated and passionate UI/UX designer from Frisco, Texas. Since starting my learning journey as a web designer and web developer in 2008, I have enjoyed how the designs I created turned into great websites or apps. It has always seemed interesting to me to create a design from a user-centric approach and then work with the different development and product teams to turn it into the design I had designed.</p>
                            <p>I have over 14 years of experience working with the Adobe Master Collection from versions 3, 4, and Adobe CC, along with programming languages like HTML, CSS, and JavaScript. The programs I use the most are Figma, Adobe XD, Teams, Outline, Asana, and Clickup.</p>
                            <p>I am a lifelong learner in this industry because technology never stops, and I also plan to continue growing until I become a Principal or Lead UX Designer.</p>
                        </div>
                        <div>
                            <div className="recomendations">
                                <button className="shane-btn">Shane Boyce - UI/UX Manager</button>
                                <button className="kyle-btn">Kyle Welch - Senior UX Designer</button>
                                <button className="kyle-btn">Kyle Welch - Senior UX Designer</button>
                            </div>
                            <div>
                                <img id="about-image" src={images['IMG_0211.JPEG']} alt="Hector thinking about details" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}