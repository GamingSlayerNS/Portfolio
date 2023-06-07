import { Component } from "react"
import "../styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg|mp4)$/));

export default class header extends Component {
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

    handleMenu = () => {
        const menuBtn = document.querySelector('.header__menu-burger');
        let menuOpen = false;
        if (menuBtn.classList.contains('open')) {
            menuOpen = true;
        }

        console.log(menuBtn);
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    }

    render() {
        return (
            <div className="container">
                <div className="header__top-nav" id="header">
                    <div className="header__menu-burger" onClick={this.handleMenu}>
                        <div className="header__bars"></div>
                    </div>
                    <div className="header__logo">
                        <a href="#top"><img src={images['SpeedyNAS Logo-06.png']} alt="hectorlsantiago logo white" /></a>
                    </div>
                    <menu>
                        <ul className="header__menu">
                            <li>
                                <a href="#projects"><button id="header__menu-links">Projects</button></a>
                            </li>
                            <li>
                                <a href="#myskills"><button id="header__menu-links">Skills</button></a>
                            </li>
                            <li>
                                <a href="#about"><button id="header__menu-links">About</button></a>
                            </li>
                            <li>
                                <a href="#footer"><button id="header__menu-links">Contact</button></a>
                            </li>
                        </ul>
                    </menu>
                    <ul className="header__socials">
                        <li>
                            {/* <button id="theme-toggle" onClick={this.darkMode}>
                                <img className="header__theme-sun" src={images['icon-dark sun.png']} alt="toggle-theme"></img>
                            </button> */}
                            <button id="theme-toggle" onClick={this.darkMode}>
                                <img className="header__theme-moon" src={images['icon-light moon.png']} alt="toggle-theme"></img>
                            </button>
                        </li>
                        <li className="header__line"></li>
                        <li>
                            <a href="https://github.com/GamingSlayerNS" target="_blank" rel="noreferrer">
                                <img src={images['icon-dark github.png']} alt="Github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/naxelsantiago/" target="_blank" rel="noreferrer">
                                <img src={images['icon-dark linkedin.png']} alt="Linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}