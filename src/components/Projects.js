import { Component } from "react"
import "../styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));

export default class projects extends Component {  
    constructor(props) {
        super(props);
        this.changeSelection = this.changeSelection.bind(this);
    }

    componentDidMount() {
        // Label all the project entries as " show", so they become visible
        this.filterSelection("Show all");
    }
    
    changeSelection = (btn) => {
        var current = document.getElementsByClassName("btn active");
        
        if (current[0] != null) {
            // console.log(current[0].className)
            console.log(btn.textContent);
            current[0].className = current[0].className.replace(" active", "");
            btn.className += " active";

            this.filterSelection(btn.textContent);
        }
    }

    filterSelection(selection) {
        var entries, i;
        entries = document.getElementsByClassName("column");
        if (selection === "Show all")
            selection = "";

        // console.log(entries);
        // console.log(entries[0].className);
        for (i = 0; i < entries.length; i++) {
            this.hideSelection(entries[i], "show");
            if (entries[i].className.indexOf(selection) > -1)
                this.showSelection(entries[i], "show");
        }
    }

    hideSelection(element, name) {
        var i;
        var arr1 = element.className.split(" ");
        var arr2 = name.split(" ");

        // console.log(arr1 + "  " + arr2);
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) > -1)
                arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
        element.className = arr1.join(" ");
    }

    showSelection(element, name) {
        var i;
        var arr1 = element.className.split(" ");
        var arr2 = name.split(" ");

        // console.log(arr1 + "  " + arr2)
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) === -1)
                element.className += " " + arr2[i];
        }
    }
    
    render() {
        return (
            <main className="myproject section" id="projects">
                <div className="container">
                    <div id="top-home">
                        <h2>My Projects</h2>
                        <img src={images['Rectangle 21.png']} alt="" />
                        <h4>Reach your business goals with excellent user experience.</h4>
                    </div>
                    <div id="myBtnContainer">
                        <button className="project__btn active" onClick={e => this.changeSelection(e.target)}>Show all</button>
                        <button className="project__btn" onClick={e => this.changeSelection(e.target)}>College Projects</button>
                        <button className="project__btn" onClick={e => this.changeSelection(e.target)}>Websites</button>
                        <button className="project__btn" onClick={e => this.changeSelection(e.target)}>Database Projects</button>
                    </div>

                    <div className="row">
                        <div className="column College Projects">
                            <a href="https://proud-river-02230da10.3.azurestaticapps.net" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b925747aaa04087bb958_iMac_2.jpg']} alt="Mountains" />
                                    <h5>CIOBrain: Database Functionality</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/17/2023</em>
                                </div>
                            </a>
                        </div>
                        <div className="column College Projects">
                            <div className="content">
                                <img style={{width: "100%", height: 150}} src={images['5c02b925747aaa04087bb958_iMac_2.jpg']} alt="Lights" />
                                <h5>Beltone</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <em>Desktop and Mobile</em><br />
                                <em>01/01/2021</em>
                            </div>
                        </div>
                        <div className="column College Projects">
                            <div className="content">
                                <img style={{width: "100%", height: 150}} src={images['5c02b925747aaa04087bb958_iMac_2.jpg']} alt="Nature" />
                                <h5>Hostgator</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <em>Desktop and Mobile</em><br />
                                <em>01/01/2021</em>
                            </div>
                        </div>
                        <div className="column College Projects">
                            <div className="content">
                                <img style={{width: "100%", height: 150}} src={images['5c02b925747aaa04087bb958_iMac_2.jpg']} alt="Nature" />
                                <h5>AutoSmart</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <em>Desktop and Mobile</em><br />
                                <em>01/01/2021</em>
                            </div>
                        </div>
                        <div className="column College Projects">
                            <div className="content">
                                <img style={{width: "100%", height: 150}} src={images['5c02b925747aaa04087bb958_iMac_2.jpg']} alt="Nature" />
                                <h5>CrashedToys</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <em>Desktop and Mobile</em><br />
                                <em>01/01/2021</em>
                            </div>
                        </div>

                        <div className="column Websites">
                            <a href="https://hectorlsantiago.site" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b92c747aaac1587bb959_iMac.jpg']} alt="Car" />
                                    <h5>Hector's Portfolio</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>05/01/2023</em>
                                </div>
                            </a>
                        </div>
                        <div className="column Websites">
                            <div className="content">
                                <img style={{width: "100%", height: 150}} src={images['5c02b931747aaa1fb07bb95a_iPad.jpg']} alt="Car" />
                                <h5>Auto Spa</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <em>Desktop and Mobile</em><br />
                                <em>01/01/2021</em>
                            </div>
                        </div>
                        <div className="column Websites">
                            <div className="content">
                                <img style={{width: "100%", height: 150}} src={images['5c02b938747aaa5c9c7bb95b_iPhone_1.jpg']} alt="Car" />
                                <h5>Floral PR</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <em>Desktop and Mobile</em><br />
                                <em>01/01/2021</em>
                            </div>
                        </div>

                        <div className="column Websites">
                            <div className="content">
                                <img style={{width: "100%", height: 150}} src={images['5c02b93e770c2e396d3be540_iPhone_3.jpg']} alt="Car" />
                                <h5>Michis Cakes</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <em>Desktop and Mobile</em><br />
                                <em>01/01/2021</em>
                            </div>
                        </div>

                        <div className="column Database Projects">
                            <div className="content">
                                <img style={{width: "100%", height: 150}} src={images['5c02b947770c2e26b43be541_Macbook.jpg']} alt="People" />
                                <h5>Florimania</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <em>Desktop and Mobile</em><br />
                                <em>01/01/2021</em>
                            </div>
                        </div>
                        <div className="column Database Projects">
                            <div className="content">
                                <img style={{width: "100%", height: 150}} src={images['5c02b94b7d96506a602b6e75_Watch.jpg']} alt="People" />
                                <h5>AFYSE</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <em>Desktop and Mobile</em><br />
                                <em>01/01/2021</em>
                            </div>
                        </div>
                        <div className="column Database Projects">
                            <div className="content">
                                <img style={{width: "100%", height: 150}} src={images['5c02b94b7d96506a602b6e75_Watch.jpg']} alt="People" />
                                <h5>Chorbie</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <em>Desktop and Mobile</em><br />
                                <em>01/01/2021</em>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        )
    }
}