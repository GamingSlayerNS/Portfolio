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
        if (theme) {
            this.setLight();
        }
    }

    themeToggle = () => {
        const themeToggleBtns = document.querySelectorAll('#theme-toggle');
        
    
        themeToggleBtns.forEach(btn => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode');
                this.setLight();
            } else {
                localStorage.removeItem('theme');
                document.body.removeAttribute('class');
                this.setDark();
            }
        })
    }

    setLight = () => {
        const themeToggleImg = document.querySelector('#theme-toggle-img');
        const themeLogo = document.querySelector('#theme-logo');
        const themeGithub = document.querySelector('#theme-github');
        const themeLinkedin = document.querySelector('#theme-linkedin');

        themeLogo.src = images['SpeedyNAS Logo Light.png'];
        themeToggleImg.src = images['icon-light moon.png'];
        themeGithub.src = images['icon-light github.png'];
        themeLinkedin.src = images['icon-light linkedin.png'];
    }

    setDark = () => {
        const themeToggleImg = document.querySelector('#theme-toggle-img');
        const themeLogo = document.querySelector('#theme-logo');
        const themeGithub = document.querySelector('#theme-github');
        const themeLinkedin = document.querySelector('#theme-linkedin');

        themeLogo.src = images['SpeedyNAS Logo Dark.png'];
        themeToggleImg.src = images['icon-dark sun.png'];
        themeGithub.src = images['icon-dark github.png'];
        themeLinkedin.src = images['icon-dark linkedin.png'];
    }

    header__handleMenuBurger = () => {
        if (document.getElementsByClassName('header__menu-burger')[0].classList.contains('open')) {
            this.props.handleMenuBurger();                      //Checks if menu-burger is open, then calls function
        }
    }

    render() {
        return (
            <div className="container">
                <div className="header__top-nav" id="header">
                    <div className="header__menu-burger" onClick={this.props.handleMenuBurger}>
                        <div className="header__bars"></div>
                    </div>
                    <div className="header__logo" onClick={this.header__handleMenuBurger}>
                        <a href="#top"><img id="theme-logo" src={images['SpeedyNAS Logo Dark.png']} alt="Speedy logo dark" /></a>
                    </div>
                    <div className="header__logo-dummy"></div>
                    <menu>
                        <ul className="header__menu">
                            <li>
                                <a href="#projects"><button id="header__menu-links">Projects</button></a>
                            </li>
                            <li>
                                <a href="#skills"><button id="header__menu-links">Skills</button></a>
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
                            <button id="theme-toggle" onClick={this.themeToggle}>
                                <img id="theme-toggle-img" className="header__theme-sun"
                                src={images['icon-dark sun.png']} alt="toggle-theme"></img>
                            </button>
                        </li>
                        <li className="header__line"></li>
                        <li>
                            <a href="https://github.com/GamingSlayerNS" target="_blank" rel="noreferrer">
                                <img id="theme-github" src={images['icon-dark github.png']} alt="Github" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/naxelsantiago/" target="_blank" rel="noreferrer">
                                <img id="theme-linkedin" src={images['icon-dark linkedin.png']} alt="Linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}