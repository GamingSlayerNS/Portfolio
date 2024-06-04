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
                        <button className="project__btn" onClick={e => this.changeSelection(e.target)}>Mobile Apps</button>
                        <button className="project__btn" onClick={e => this.changeSelection(e.target)}>Documentation</button>
                        <button className="project__btn" onClick={e => this.changeSelection(e.target)}>Database Projects</button>
                    </div>

                    <div className="row">

                        <div className="column Websites">
                            <a href="https://master.d1l7suhxe5gzvq.amplifyapp.com/" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400" 
                                    data-src={images['Proj Uncover.png']} 
                                    alt="Mountains" />
                                    <h5>Uncover Search Engine</h5>
                                    <p>Uncover is a KWIC based Search Engine, that utilizes the Key Word In Context indexing system. 
                                        This school project was constructed for a Software Architecture class.
                                    </p>
                                    <em>React/tailwinds</em><br />
                                    <em>Aug 2023 - Dec 2023</em>
                                </div>
                            </a>
                        </div>

                        <div className="column Websites">
                            <a href="https://master.ds3owm5yrzbg6.amplifyapp.com" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400" 
                                    data-src={images['Proj ReactChats.png']} 
                                    alt="Mountains" />
                                    <h5>ReactChats!</h5>
                                    <p>Online Public messaging site. Send messages to fellow ReactChats users in a public 
                                        messaging application
                                    </p>
                                    <em>React & Firebase</em><br />
                                    <em>Sep 2023</em>
                                </div>
                            </a>
                        </div>

                        <div className="column Websites">
                            <a href="https://colab.research.google.com/drive/1hvMHJQes_xSFGEwDp3yK2P0-adTwTV0u?usp=sharing" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400" 
                                    data-src={images['Proj ReactChats.png']} 
                                    alt="Mountains" />
                                    <h5>AI Agent plays Breakout</h5>
                                    <p>Online Public messaging site. Send messages to fellow ReactChats users in a public 
                                        messaging application
                                    </p>
                                    <em>React & Firebase</em><br />
                                    <em>Sep 2023</em>
                                </div>
                            </a>
                        </div>

                        <div className="column College Projects">
                            <a href="https://proud-river-02230da10.3.azurestaticapps.net" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400" 
                                    data-src={images['Proj CIOBrain.JPG']} 
                                    alt="Mountains" />
                                    <h5>CIOBrain: Database Functionality</h5>
                                    <p>Capstone Project made for Fellow's Consulting Group. CIOBrain is a
                                        Graph database application that facilitates asset tracking for CIOs,
                                        built with React, Express, Node.js, and hosted on Azure.
                                    </p>
                                    <em>**Password: Temp**</em><br />
                                    <em>Jan 2023 - May 2023</em>
                                </div>
                            </a>
                        </div>

                        <div className="column Websites">
                            <a href="https://www.wisecursor.com/" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400" 
                                    data-src={images['Proj WiseCursor.png']} 
                                    alt="Mountains" />
                                    <h5>WiseCursor Webpage</h5>
                                    <p>Official webpage of Wisecursor. Constructed from scratch using React, working alongside 
                                        Project Management & UX Design teams following state of the art analysis & design methodologies.
                                    </p>
                                    <em>React</em><br />
                                    <em>April 2023 - In Progress</em>
                                </div>
                            </a>
                        </div>
                        
                        <div className="column Mobile Apps">
                            <a href="https://github.com/GamingSlayerNS/JobSearch" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400" 
                                    data-src={images['JobSearch Example.png']} 
                                    alt="Mountains" />
                                    <h5>JobSearch Mobile App</h5>
                                    <p>Developed a mobile app using React Native to facilitate job searches 
                                        through the integration of the Jsearch API. Designed a straightforward 
                                        platform for users to browse and apply for job opportunities seamlessly.
                                        Created utilizing proper UI/UX practices.
                                    </p>
                                    <em>React Native</em><br />
                                    <em>July 2023</em>
                                </div>
                            </a>
                        </div>

                        <div className="column Documentation">
                            <a href="https://1drv.ms/b/s!AiN98cq8jvcyuTYKKZPFRW6D9HSd?e=2MVI2W" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400"
                                    data-src={images['Proj documentation.jpeg']} 
                                    alt="Mountains" />
                                    <h5>Requirements Specification Documentation</h5>
                                    <p>93-page Requirements Analysis Document following the Volere process. 
                                        Includes Functional and Non-Functional Requirements, view table of contents for further guidance.
                                    </p>
                                    <em>Requirements Documentation</em><br />
                                    <em>Jan 2023 - Apr 2023</em>
                                </div>
                            </a>
                        </div>

                        <div className="column College Projects">
                            <a href="https://github.com/GamingSlayerNS/Theater-Simulation" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400"
                                    data-src={images['Proj Theater Simulation.jpg']} 
                                    alt="Mountains" />
                                    <h5>Theater Simulation</h5>
                                    <p>Mimics the operations and interactions within a film theater environment using semaphore synchronization mechanisms. 
                                        Semaphores are used to control access to shared resources and ensure proper coordination among different 
                                        components of the simulation.
                                    </p>
                                    <em>Java</em><br />
                                    <em>Jan 2022 - Apr 2022</em>
                                </div>
                            </a>
                        </div>

                        <div className="column College Projects">
                            <a href="https://github.com/GamingSlayerNS/OpenGL-Inverse-Kinematics" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400"
                                    data-src={images['Proj Forward & Inverse Kinematics.png']} 
                                    alt="Mountains" />
                                    <h5>OpenGL Inverse Kinematics</h5>
                                    <p>Constructed Forward Kinematics on a 9 DoF Bone in 3D. Inverse kinematics in OpenGL involves using solver 
                                        algorithms to calculate the joint angles needed to position an end-effector at a specified target while 
                                        respecting joint constraints and limitations.
                                    </p>
                                    <em>C++</em><br />
                                    <em>Aug 2022 - Dec 2022</em>
                                </div>
                            </a>
                        </div>

                        <div className="column College Projects">
                            <a href="https://github.com/GamingSlayerNS/OpenGL-ForwardKinematics" target="_blank" rel="noreferrer">
                                <div className="content">
                                    <img className="lazy loading" 
                                    style={{width: "100%", height: 150}} 
                                    src="https://fakeimg.pl/600x400"
                                    data-src={images['Proj Forward & Inverse Kinematics.png']} 
                                    alt="Mountains" />
                                    <h5>OpenGL Forward Kinematics</h5>
                                    <p>Constructed Forward Kinematics on a 9 DoF Bone in 3D. Forward kinematics in OpenGL involves calculating 
                                        transformations along a hierarchical structure to position and orient objects in a 3D scene. 
                                        This technique is fundamental for animating characters and objects in computer graphics applications.
                                    </p>
                                    <em>C++</em><br />
                                    <em>Aug 2022 - Dec 2022</em>
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

                        {/* <div className="column Websites">
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
                        </div> */}

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