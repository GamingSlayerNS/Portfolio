import { Component } from "react"
import "../styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg|mp4)$/));

export default class sideMenu extends Component {
    render() {
        return (
            <div className="slideshow">
                <video className="field-vid" width="100%" autoPlay muted loop id="fieldVideo">
                    <source src={images['Field.mp4']} type="video/mp4"></source>
                    <source src="https://youtu.be/X6DuFads1Pw" type="video/mp4"></source>
                    <p> Your browser doesn't support this video format. </p>
                </video>
                <div className="container">
                    <div className="hero-text">
                        <h1>Software Engineer</h1>
                        <div className="colors-barS1" />
                        {/* <div className="colors-barS2" /><div className="colors-barS3" /> */}
                        <h3>Evolving with every project.</h3>
                        <h5 id="about-subtittle">Hello there! My name is Naxel Santiago, but I'm also known as Speedy. 
                        I'm a Full-stack Developer from the University of Texas at Dallas! My skills include but are not limited to 
                        Software Development/Architecture, Database Design, Object Oriented Programming and Requirements gathering.</h5>
                        <br></br>
                        <div className="hero__btns">
                            <a href="https://1drv.ms/b/s!AiN98cq8jvcyvRt86Eug60_mEa-8?e=L2RrOa" target="_blank" rel="noreferrer">
                                <button className="black-btn">Resume</button></a>
                            <a href="https://www.linkedin.com/in/naxelsantiago/" target="_blank" rel="noreferrer">
                                <button id="linkedIn Button" className="white-btn">Linkedin</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}