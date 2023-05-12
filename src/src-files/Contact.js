import { Component } from "react"
import "../Styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default class footer extends Component {
    render() {
        return (
            <footer>
                <div className="container" id="contact">
                    <div className="main-footer">
                        <h6><em>Get in touch</em></h6>
                        <h1 className="footer-h1">Let’s work together</h1>
                        <p>If you have a website or mobile app idea in mind or you need some advice about product design, feel
                            free to contact me. Currently my time books quickly, so the sooner you write, the better it is for
                            both of us.</p>
                        <div className="footer-buttons">
                            <button className="footerblack-btn" href="https://www.linkedin.com/in/hlsp029/">Hire me</button>
                            <button className="footerwhite-btn" href="https://www.linkedin.com/in/hlsp029/">Linkedin</button>
                        </div>
                        <div className="footer-links">
                            <div><img src={images['Mask Group.png']} href="https://www.behance.net/hectorlsantiago"
                                    alt="Behance" /></div>
                            <div><img src={images['Mask Group-1.png']} href="https://www.github.com/santi029/" alt="Github" />
                            </div>
                            <div><img src={images['Mask Group-2.png']} href="https://www.linkedin.com/in/hlsp029/"
                                    alt="Linkedin" /></div>
                            <div><img src={images['Mask Group-3.png']} href="https://www.facebook.com/hlsp029/" alt="Facebook" />
                            </div>
                        </div>
                        <div>
                            <h6>All rights reserved to Hector L. Santiago.</h6>
                            <div className="sub-footer">
                                <p><em>Power by <strong>Alpha Studio Code</strong>.</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}