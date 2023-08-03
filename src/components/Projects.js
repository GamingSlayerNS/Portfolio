import { Component } from "react"
import "../styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|JPG|svg)$/));

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
        var current = document.getElementsByClassName("project__btn active");
        
        if (current[0] != null) {
            // console.log(current[0].className)
            // console.log(btn.textContent);
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
                        <div className="colors-barS1" />
                        {/* <div className="colors-barS2" /><div className="colors-barS3" /> */}
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
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400" 
                                    data-src={images['CIOBrain.JPG']} 
                                    alt="Mountains" />
                                    <h5>CIOBrain: Database Functionality</h5>
                                    <p>Capstone Project made for Fellow's Consulting Group. CIOBrain is a
                                        Graph database application that facilitates asset tracking for CIOs,
                                        build with React, Node.js, an API and hosted on Azure.
                                    </p>
                                    <em>Password: Temp</em><br />
                                    <em>Jan 2023 - May 2023</em>
                                </div>
                            </a>
                        </div>

                        <div className="column College Projects">
                            <a href="https://1drv.ms/b/s!AiN98cq8jvcyuTYKKZPFRW6D9HSd?e=2MVI2W" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400"
                                    data-src={images['documentation.jpeg']} 
                                    alt="Mountains" />
                                    <h5>Requirements Specification Documentation</h5>
                                    <p>93-page Requirements Analysis Document following the Volere process. 
                                        Includes Functional and Non-Functional Requirements, view table of contents for further guidance.
                                    </p>
                                    <em>Document</em><br />
                                    <em>Jan 2023 - Apr 2023</em>
                                </div>
                            </a>
                        </div>
                        
                        {/* <div className="column College Projects">
                            <a href="http://ec2-34-219-116-15.us-west-2.compute.amazonaws.com:4352/todoWebApp/" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400"
                                    data-src={images['aws.png']} 
                                    alt="Mountains" />
                                    <h5>Todo List AWS RDS Connection</h5>
                                    <p>AWS project connecting AWS RDS with EC2 instance.</p>
                                    <em>Desktop</em><br />
                                    <em>Nov 2022</em>
                                </div>
                            </a>
                        </div> */}

                        <div className="column Websites">
                            <a href="https://hectorlsantiago.site" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400"
                                    data-src={images['Hector.JPG']} 
                                    alt="Car" />
                                    <h5>Hector's Portfolio</h5>
                                    <p>Hector's Portfolio website made with ViteJS</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>June 2023</em>
                                </div>
                            </a>
                        </div>

                        <div className="column Database Projects">
                            <a href="https://github.com/GamingSlayerNS/UberEats-Shema" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400"
                                    data-src={images['Uber-Eats.png']} 
                                    alt="Car" />
                                    <h5>UberEats Schema</h5>
                                    <p>Created an UberEats database with MySQL Workbench & Server, includes tables, views, procedures, 
                                        and triggers.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>Jan 2023 - May 2023</em>
                                </div>
                            </a>
                        </div>
                    </div>



                </div>
            </main>
        )
    }
}