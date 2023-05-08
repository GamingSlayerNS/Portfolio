import { Component } from 'react';
import './App.css';
import Page from './src-files/page'

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
            <Page />
          );
    }
}
