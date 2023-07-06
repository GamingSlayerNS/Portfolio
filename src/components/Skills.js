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
                    <h2>My Skills</h2>
                    <div className="colors-barS1" />
                    {/* <div className="colors-barS2" /><div className="colors-barS3" /> */}

                </div>
            </div>
        )
    }
}