import { Component } from "react"
import "./style.css"

// function importAllImages(r) {
//     let images = {};
//     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images
// }
// const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default class sideMenu extends Component {
    render() {
        return (
            <><button class='testButton'>Menu</button>
            <h1 style={{display: "flow"}} class='animate slideInLeft animate--fast'>Menu</h1>
            <button style={{display: "flex"}} class='animate animate--slow slideInRight testButton'>Menu</button>
            <h1 style={{display: "inline-grid"}} class='animate rotate animate--infinite'>Menu</h1></>
        )
    }
}