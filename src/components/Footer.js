import { Component } from "react"
import "../styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));

export default class footer extends Component {
    render() {
        return (
            <div className="footer section">
                <div className="container" id="footer">
                    <h6><em>Get in touch</em></h6>
                    <h1 className="footer-h1">Contact Me!</h1>
                    <p>If you have a website or mobile app idea in mind or you need some advice about design, feel
                        free to contact me.</p>
                    <div className="footer-buttons">
                        <a href="https://1drv.ms/b/s!AiN98cq8jvcyvRt86Eug60_mEa-8?e=L2RrOa" target="_blank" rel="noreferrer">
                            <button style={{position: "relative"}} className="black-btn">Resume</button></a>
                        <a href="https://www.linkedin.com/in/naxelsantiago/" target="_blank" rel="noreferrer">
                            <button style={{position: "relative"}} className="white-btn">Linkedin</button></a>
                    </div>
                    <div className="footer-links">
                        <a href="https://github.com/GamingSlayerNS" target="_blank" rel="noreferrer">
                            <img src={images['icon-dark github.png']} alt="Github" /></a>
                        <a href="https://www.linkedin.com/in/naxelsantiago/" target="_blank" rel="noreferrer">
                            <img src={images['icon-dark linkedin.png']} alt="Linkedin" /></a>
                    </div>
                    <div>
                        <h6>All rights reserved to Naxel Santiago.</h6>
                        <div className="sub-footer">
                            <p><em>Power by <strong>Speedy</strong>.</em></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}