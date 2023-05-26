import { Component } from "react"
import "../Styles/style.css"

// function importAllImages(r) {
//     let images = {};
//     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images
// }
// const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default class sideMenu extends Component {
    componentDidMount() {
        // State var
        const theme = localStorage.getItem('theme');
        theme && document.body.classList.add(theme);
    }

    darkMode = () => {
        const themeToggleBtns = document.querySelectorAll('#theme-toggle');
    
        themeToggleBtns.forEach(btn => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode');
            } else {
                localStorage.removeItem('theme');
                document.body.removeAttribute('class')
            }
        })
    }

    render() {
        return (
            <><button id="theme-toggle" className='sideMenu' onClick={this.darkMode}>Menu</button></>
        )
    }
}