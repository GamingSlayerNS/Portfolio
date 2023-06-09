import { Component } from "react"
import "../styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));

export default class skills extends Component {
    render() {
        return (
            <div className="myskills section" id="skills">
                <div className="container">
                    <div>
                        <h2>My Skills</h2>
                        <img src={images['Group 195.png']} alt="my colors bar"  />
                        <h4>Reach your business goals with excellent user experience.</h4>
                    </div>
                </div>
            </div>
        )
    }
}