import { Component } from 'react';
import './styles/modern-normalize.css'
import './styles/index.css'
import './styles/style.css'
import './styles/style-components/header.css'
import './styles/style-components/mobile-nav.css'
import './styles/style-components/hero.css'
import './styles/style-components/projects.css'
import './styles/style-components/skills.css'
import './styles/style-components/about.css'
import './styles/style-components/footer.css'
import './styles/utils.css'
import Header from './components/Header'
import MobileNav from './components/Mobile-Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'

export default class App extends Component{
    constructor(props) {
        super();
        this.state = {
            width: window.innerWidth,
            mobileMenuOpen: false
        }
        window.app = this
        this.handleMenuBurger = this.handleMenuBurger.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        this.handleLazyLoading();
    }

    handleResize() {
        this.setState({width: window.innerWidth})
    }

    popupContent(close) {
        return <div className="modal">
            <div className="close" onClick={close}>&times;</div>
        </div>
    }

    handleMenuBurger = () => {
        const menuBtn = document.querySelector('.header__menu-burger');
        const mobileNav = document.querySelector('.mobile-nav');

        if (!this.state.mobileMenuOpen) {
            menuBtn.classList.add('open');
            this.setState({mobileMenuOpen: true});
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            menuBtn.classList.remove('open');
            this.setState({mobileMenuOpen: false});
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    }

    handleLazyLoading = () => {
        const lazyImgs = document.querySelectorAll('.lazy');
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImgs.forEach(img => {
            observer.observe(img);
        });
    }

    render() {
        //const isSmallScreen = this.state.width <= 1024
        // Test 1.3
        return (
            <>
            <header className='Header'><Header handleMenuBurger={this.handleMenuBurger} /></header>
            <section className='Mobile Nav'><MobileNav handleMenuBurger={this.handleMenuBurger} /></section>
            <section className='Hero'><Hero /></section>
            <section className='My Projects'><Projects /></section>
            <section className='My Skills'><Skills /></section>
            <section className='About Me'><About /></section>
            <footer className='Footer'><Footer /></footer>
            </>
          );
    }
}
