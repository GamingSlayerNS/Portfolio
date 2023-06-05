import { Component } from 'react';
import './styles/modern-normalize.css'
import './styles/style.css'
import './styles/style-components/header.css'
import './styles/style-components/menu.css'
import './styles/style-components/hero.css'
import './styles/style-components/projects.css'
import './styles/style-components/skills.css'
import './styles/style-components/process.css'
import './styles/style-components/about.css'
import './styles/style-components/footer.css'
import './styles/utils.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Process from './components/Process'
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
            <div class='Menu'><Menu /></div>
            <div class='Hero'><Hero /></div>
            <div class='My Projects'><Projects /></div>
            <div class='My Skills'><Skills /></div>
            <div class='My Process'><Process /></div>
            <div class='About Me'><About /></div>
            <div class='Footer'><Footer /></div>
            </>
          );
    }
}
