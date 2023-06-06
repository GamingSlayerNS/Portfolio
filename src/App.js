import { Component } from 'react';
import './styles/modern-normalize.css'
import './styles/index.css'
import './styles/style.css'
import './styles/style-components/header.css'
import './styles/style-components/menu.css'
import './styles/style-components/hero.css'
import './styles/style-components/projects.css'
import './styles/style-components/skills.css'
import './styles/style-components/about.css'
import './styles/style-components/footer.css'
import './styles/utils.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'

export default class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth
        }
        window.app = this
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this))
    }

    handleResize() {
        this.setState({width: window.innerWidth})
    }

    popupContent(close) {
        return <div className="modal">
            <div className="close" onClick={close}>&times;</div>
        </div>
    }

    render() {
        //const isSmallScreen = this.state.width <= 1024
        return (
            <><header><Header /></header>
            {/* <div className='Header'><Header /></div> */}
            <section class='Menu'><Menu /></section>
            <section class='Hero'><Hero /></section>
            <section class='My Projects'><Projects /></section>
            <section class='My Skills'><Skills /></section>
            <section class='About Me'><About /></section>
            <section class='Footer'><Footer /></section>
            </>
          );
    }
}
