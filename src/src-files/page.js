import { Component } from "react"
import "./style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default class test extends Component{
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="top-nav">
                            <div className="logo-picture">
                                <div className="profile-picture">
                                    <img src={images['hlsp circle profile picture.png']} alt="hlsp circle profile" />
                                </div>
                                <div className="logo">
                                    <img src={images['hlsp2021logo-white.png']} alt="hectorlsantiago logo white" />
                                </div>
                            </div>
                            <menu className="main-menu">
                                <ul>
                                    <a href="#myprocess"><button className="active" id="menu-links">Process</button></a>
                                </ul>
                                <ul>
                                    <a href="#myprojects"><button id="menu-links">Projects</button></a>
                                </ul>
                                <ul>
                                    <a href="#myskills"><button id="menu-links">Skills</button></a>
                                </ul>
                                <ul>
                                    <a href="#about"><button id="menu-links">About</button></a>
                                </ul>
                                <ul>
                                    <a href="#contact"><button id="menu-links">Contact</button></a>
                                </ul>
                            </menu>
                            <div className="social-links">
                                <div><img src="./images/Mask Group.png" alt="Behance" /></div>
                                <div><img src="./images/Mask Group-1.png" alt="Github" /></div>
                                <div><img src="./images/Mask Group-2.png" alt="Linkedin" /></div>
                                <div><img src="./images/Mask Group-3.png" alt="Facebook" /></div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="slideshow">
                    <div className="hero-image">
                        <div className="hero-text">
                            <h1>UI/UX Designer</h1>
                            <img className="colors-bar" src="./images/Group 195.png" alt="my colors bar" />
                            <h3>With 6+ years of experience as a web designer and developer.</h3>
                            <h5 id="about-subtittle">Hello! I'm Hector, a UI/UX Designer. I create great interaction and support with others with my
                                UI/UX, management and coding skills. <br />I help businesses big and small to turn their ideas into
                                great products their customers love.</h5>
                            <button className="black-btn">Resume</button>
                            <button id="myprocess" className="white-btn">Linkedin</button>
                        </div>
                    </div>
                </div>
                <section className="myprocess">
                    <div className="container">
                        <div className="process-container">
                            <div className="L1">
                                <h6><em>Understand my</em></h6>
                                <h2>Design Process</h2>
                                <img src="./images/Rectangle 22.png" alt="" />
                                <h4>Reach your business goals with excellent user experience. Let’s start working on your awesome
                                    web or iOS app.</h4>
                            </div>
                            <div className="R1">
                                <div className="process-image">
                                    <img src="./images/Frame 52 (1).png" alt="Websitemap" />
                                </div>
                            </div>
                            <div className="L2">
                                <div className="ideate, process-steps">
                                    <h3>Empathise</h3>
                                    <h5>Feel and Understand the end-user pain.</h5>
                                    <p>Understand the real problem or problems the project that you are working.</p>
                                </div>
                            </div>
                            <div className="R2">
                                <div className="ideate, process-steps">
                                    <h3>Ideate</h3>
                                    <h5>Analize carefully the problems of your project and create an spectrum of solutions.</h5>
                                    <p>Problem solving. At the end of this phase you’ll have a pixel perfect design for your app or
                                        website. During the transition from wireframes into the final design I create prototypes
                                        simulating
                                        final end results before development.</p>
                                </div>
                            </div>
                            <div className="L3">
                                <div className="wireframe, process-steps">
                                    <h3>Wireframe and Prototyping</h3>
                                    <h5>Identify the best top solutions and test ideas to resolve the end-user pain points.</h5>
                                    <p>Bringing designs to life. Since I’m a designer who can code too, I can easily work in close
                                        collaboration with developers up until the finish line and beyond. In case of web projects I
                                        also do front-end development.</p>
                                </div>
                            </div>
                            <div className="R3">
                                <div className="test, process-steps">
                                    <h3>Test and Re-test</h3>
                                    <h5>Analize carefully the problems of your project and create an spectrum of solutions.</h5>
                                    <p>Transparent process. Complete overview of my design process through regular
                                        meetings. After the initial design versions I’m happy to do user testing with your customers
                                        to ensure the best possible solutions for their needs.</p>
                                </div>
                            </div>
                            <div className="L4">
                                <div className="development, process-steps">
                                    <h3>Development</h3>
                                    <h5>Analize carefully the problems of your project and create an spectrum of solutions.</h5>
                                    <p>After having gone through all the processes of research, analysis, ideation, wireframe,
                                        prototyping and everything is approved, the next step is the development process. At this
                                        point it is very important to have already incorporated the development team in all the
                                        meetings to make it part of the process. For them this is very important because they would
                                        be clear about how this application or solution is suppose to be built.</p>
                                </div>
                            </div>
                            <div className="R4">
                                <div className="abtesting, process-steps">
                                    <h3>A/B Testing</h3>
                                    <h5>Analize carefully the problems of your project and create an spectrum of solutions.</h5>
                                    <p>In my experience A / B testing means that during the UI / UX process you will find or
                                        confront two or more solutions for the same component or segment and both could be really
                                        enjoyable for clients, co-workers, managers or stakeholders. If we have this situation and
                                        those two options survive the whole process, maybe, if the company has the time and
                                        resources to try all the different solutions, it will be great to present those options to
                                        the customer and they can decide the best option for them.</p>
                                </div>
                            </div>
                            <div className="R5"><button className="process-button">Learn More</button></div>
                        </div>
    
                    </div>
                </section>
    
                <main className="myproject" id="myprojects">
                    <div className="container">
                        <div id="top-home">
                            <h6><em>Check all</em></h6>
                            <h2>My Projects</h2>
                            <img src="./images/Rectangle 21.png" alt="" />
                            <h4>Reach your business goals with excellent user experience.</h4>
                        </div>
                        <div id="myBtnContainer">
                            <button className="btn active"> Show all</button>
                            <button className="btn"> UI/UX Design</button>
                            <button className="btn"> Web Design</button>
                            <button className="btn"> Graphic Design</button>
                        </div>
    
                        <div className="row">
                            <div className="column ui/ux design">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b925747aaa04087bb958_iMac_2.jpg" alt="Mountains" />
                                    <h5>Copart</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
    
                                </div>
                            </div>
                            <div className="column ui/ux design">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b925747aaa04087bb958_iMac_2.jpg" alt="Lights" />
                                    <h5>Beltone</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                            <div className="column ui/ux design">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b925747aaa04087bb958_iMac_2.jpg" alt="Nature" />
                                    <h5>Hostgator</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
    
                            <div className="column ui/ux design">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b925747aaa04087bb958_iMac_2.jpg" alt="Nature" />
                                    <h5>AutoSmart</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
    
                            <div className="column ui/ux design">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b925747aaa04087bb958_iMac_2.jpg" alt="Nature" />
                                    <h5>CrashedToys</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
    
                            <div className="column webdesign">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b92c747aaac1587bb959_iMac.jpg" alt="Car" />
                                    <h5>Pet Shelter</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                            <div className="column webdesign">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b931747aaa1fb07bb95a_iPad.jpg" alt="Car" />
                                    <h5>Auto Spa</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                            <div className="column webdesign">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b938747aaa5c9c7bb95b_iPhone_1.jpg" alt="Car" />
                                    <h5>Floral PR</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
    
                            <div className="column webdesign">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b93e770c2e396d3be540_iPhone_3.jpg" alt="Car" />
                                    <h5>Michis Cakes</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
    
                            <div className="column graphicdesign">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b947770c2e26b43be541_Macbook.jpg" alt="People" />
                                    <h5>Florimania</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                            <div className="column graphicdesign">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b94b7d96506a602b6e75_Watch.jpg" alt="People" />
                                    <h5>AFYSE</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                            <div className="column graphicdesign">
                                <div className="content">
                                    <img src="./images/gallery images/5c02b94b7d96506a602b6e75_Watch.jpg" alt="People" />
                                    <h5>Chorbie</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </main>
    
                <div className="myskills" id="myskills">
                    <div className="container">
                        <div>
                            <h6>Check my</h6>
                            <h2>My Skills</h2>
                            <img src="./images/Group 195.png" alt="my colors bar"  />
                            <h4>Reach your business goals with excellent user experience.</h4>
                        </div>
                        <div className="skill-images">
                            <div id="code-image">
                                <img className="bottom" id="code-image" src="./images/Group 215 (1).png"
                                    alt="coding skills and software" />
                                <img className="top" id="code-image" src="./images/coding.png" alt="coding skills and software" />
                            </div>
                            <div id="uiux-image">
                                <img className="bottom" id="uiux-image" src="./images/Group 214.png" alt="uiux skills and software" />
                                <img className="top" id="uiux-image" src="./images/uiux.png" alt="uiux skills and software" />
                            </div>
                            <div id="management-image">
                                <img className="bottom" id="management-image" src="./images/Group 216.png"
                                    alt="management skills and software" />
                                <img className="top" id="management-image" src="./images/management.png"
                                    alt="management skills and software" />
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="about" id="about">
                    <div className="container">
                        <div className="about-header">
                            <h6>Find out who I am.</h6>
                            <h2>Hi, I'm Hector L. Santiago</h2>
                            <img src="./images/Rectangle 20.png" alt=""  />
                        </div>
                        <div className="sub-about">
                            <div className="about-text">
                                <h4>And this is what I'm doing now</h4>
                                <p>My name is Hector L. Santiago. I work as a Senior UI/UX Designer for Appgate, remote from Frisco, Texas. I am designing the next generation of cyber security application for Appgate. I work directly with three of the company's best and most important teams.</p>
                                <p>Previously I worked as a user experience and user interface designer for Copart, Assistant Manager for Amazon, web consultant for Hostgator, and many years as a web designer and developer in San Juan, Puerto Rico.</p>
                                <p>I am a dedicated and passionate UI/UX designer from Frisco, Texas. Since starting my learning journey as a web designer and web developer in 2008, I have enjoyed how the designs I created turned into great websites or apps. It has always seemed interesting to me to create a design from a user-centric approach and then work with the different development and product teams to turn it into the design I had designed.</p>
                                <p>I have over 14 years of experience working with the Adobe Master Collection from versions 3, 4, and Adobe CC, along with programming languages like HTML, CSS, and JavaScript. The programs I use the most are Figma, Adobe XD, Teams, Outline, Asana, and Clickup.</p>
                                <p>I am a lifelong learner in this industry because technology never stops, and I also plan to continue growing until I become a Principal or Lead UX Designer.</p>
                            </div>
                            <div>
                                <div className="recomendations">
                                    <button className="shane-btn">Shane Boyce - UI/UX Manager</button>
                                    <button className="kyle-btn">Kyle Welch - Senior UX Designer</button>
                                    <button className="kyle-btn">Kyle Welch - Senior UX Designer</button>
                                </div>
                                <div>
                                    <img id="about-image" src="./images/IMG_0211.JPEG" alt="Hector thinking about details" />
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
    
                <footer>
                    <div className="container" id="contact">
                        <div className="main-footer">
                            <h6><em>Get in touch</em></h6>
                            <h1 className="footer-h1">Let’s work together</h1>
                            <p>If you have a website or mobile app idea in mind or you need some advice about product design, feel
                                free to contact me. Currently my time books quickly, so the sooner you write, the better it is for
                                both of us.</p>
                            <div className="footer-buttons">
                                <button className="footerblack-btn" href="https://www.linkedin.com/in/hlsp029/">Hire me</button>
                                <button className="footerwhite-btn" href="https://www.linkedin.com/in/hlsp029/">Linkedin</button>
                            </div>
                            <div className="footer-links">
                                <div><img src="./images/Mask Group.png" href="https://www.behance.net/hectorlsantiago"
                                        alt="Behance" /></div>
                                <div><img src="./images/Mask Group-1.png" href="https://www.github.com/santi029/" alt="Github" />
                                </div>
                                <div><img src="./images/Mask Group-2.png" href="https://www.linkedin.com/in/hlsp029/"
                                        alt="Linkedin" /></div>
                                <div><img src="./images/Mask Group-3.png" href="https://www.facebook.com/hlsp029/" alt="Facebook" />
                                </div>
                            </div>
                            <div>
                                <h6>All rights reserved to Hector L. Santiago.</h6>
                                <div className="sub-footer">
                                    <p><em>Power by <strong>Alpha Studio Code</strong>.</em></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}