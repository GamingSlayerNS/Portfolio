import { Component } from "react"
import "./style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default class projects extends Component {
    render() {
        return (
            <div>
                <main className="myproject" id="myprojects">
                    <div className="container">
                        <div id="top-home">
                            <h2>My Projects</h2>
                            <img src={images['Rectangle 21.png']} alt="" />
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
                                    <img style={{width: "100%", height: 150}} src={images['5c02b925747aaa04087bb958_iMac_2.jpg']} alt="Mountains" />
                                    <h5>Copart</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
    
                                </div>
                            </div>
                            <div className="column ui/ux design">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b925747aaa04087bb958_iMac_2.jpg']} alt="Lights" />
                                    <h5>Beltone</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                            <div className="column ui/ux design">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b925747aaa04087bb958_iMac_2.jpg']} alt="Nature" />
                                    <h5>Hostgator</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
    
                            <div className="column ui/ux design">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b925747aaa04087bb958_iMac_2.jpg']} alt="Nature" />
                                    <h5>AutoSmart</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
    
                            <div className="column ui/ux design">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b925747aaa04087bb958_iMac_2.jpg']} alt="Nature" />
                                    <h5>CrashedToys</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
    
                            <div className="column webdesign">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b92c747aaac1587bb959_iMac.jpg']} alt="Car" />
                                    <h5>Pet Shelter</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                            <div className="column webdesign">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b931747aaa1fb07bb95a_iPad.jpg']} alt="Car" />
                                    <h5>Auto Spa</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                            <div className="column webdesign">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b938747aaa5c9c7bb95b_iPhone_1.jpg']} alt="Car" />
                                    <h5>Floral PR</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
    
                            <div className="column webdesign">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b93e770c2e396d3be540_iPhone_3.jpg']} alt="Car" />
                                    <h5>Michis Cakes</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
    
                            <div className="column graphicdesign">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b947770c2e26b43be541_Macbook.jpg']} alt="People" />
                                    <h5>Florimania</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                            <div className="column graphicdesign">
                                <div className="content">
                                    <img style={{width: "100%", height: 150}} src={images['5c02b94b7d96506a602b6e75_Watch.jpg']} alt="People" />
                                    <h5>AFYSE</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                    <em>Desktop and Mobile</em><br />
                                    <em>01/01/2021</em>
                                </div>
                            </div>
                            <div className="column graphicdesign">
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
            </div>
        )
    }
}