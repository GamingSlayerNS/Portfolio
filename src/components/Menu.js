import { Component } from "react"
import "../styles/style.css"

// function importAllImages(r) {
//     let images = {};
//     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images
// }
// const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default class sideMenu extends Component {
    render() {
        return (
            <><button className='sideMenu'>Menu</button></>
        )
    }
}