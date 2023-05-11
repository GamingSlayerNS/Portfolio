import { Component } from "react"
import "./style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default class skills extends Component {
    render() {
        return (
            <div className="myskills" id="myskills">
                <div className="container">
                    <div>
                        <h2>My Skills</h2>
                        <img src={images['Group 195.png']} alt="my colors bar"  />
                        <h4>Reach your business goals with excellent user experience.</h4>
                    </div>
                    <div className="skill-images">
                        <div id="code-image">
                            <img className="bottom" id="code-image" src={images['Group 215 (1).png']}
                                alt="coding skills and software" />
                            <img className="top" id="code-image" src={images['coding.png']} alt="coding skills and software" />
                        </div>
                        <div id="uiux-image">
                            <img className="bottom" id="uiux-image" src={images['Group 214.png']} alt="uiux skills and software" />
                            <img className="top" id="uiux-image" src={images['uiux.png']} alt="uiux skills and software" />
                        </div>
                        <div id="management-image">
                            <img className="bottom" id="management-image" src={images['Group 216.png']}
                                alt="management skills and software" />
                            <img className="top" id="management-image" src={images['management.png']}
                                alt="management skills and software" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}