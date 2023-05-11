import { Component } from 'react';
import './App.css';
import Header from './src-files/Header'
import Projects from './src-files/Projects'
import Process from './src-files/Process'
import Skills from './src-files/Skills'
import About from './src-files/About'
import Footer from './src-files/Footer'

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

    componentWillMount() {
        window.removeEventListener('resize', this.handleResize.bind(this))
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
            <><div id='Header'><Header /></div>
            <div id='My Projects'><Projects /></div>
            <div id='My Process'><Process /></div>
            <div id='My Skills'><Skills /></div>
            <div id='About Me'><About /></div>
            <div id='Footer'><Footer /></div></>
          );
    }
}
