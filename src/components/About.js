import { Component } from "react"
import "../styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg|JPEG)$/));

export default class about extends Component {
    render() {
        return (
            <div className="about section" id="about">
                <div className="container">
                    <div className="about-header">
                        <h2>About</h2>
                        <div className="colors-barS1" />
                        {/* <div className="colors-barS2" /><div className="colors-barS3" /> */}
                    </div>
                    <div className="sub-about">
                        <div className="about-text">
                            <h4>🔮 This is what I like to do~</h4>
                            <p>My name is Naxel Santiago. I'm a <strong>Software Engineer </strong>
                                who spends all his energy on Computers</p>
                            <p>My morning routine involves grabbing a cup of hot chocolate and a bowl of breakfast oats. 
                                Then I open my computer and create a myriad of things for the internet.</p>
                            <p>People who don't know me say I'm reserved, that's fair. I like spending my time
                                pondering, and analyzing what comes next.</p>
                            <p>My interests include: An unhealthy obsession with Anime, desperately getting better at 
                                3D Animation, Gaming and a bit of Dungeons & Dragons.</p>
                            <p>I'm trilingual! English, Spanish and Japanese are my tools of choice.</p>
                        </div>
                        <div className="footer_img-content">
                            {/* <div className="recomendations">
                            </div> */}
                            <img className="lazy loading" id="about-image" 
                            src="https://fakeimg.pl/535x602" data-src={images['profile pic 2.jpg']} alt="Profile" />
                            <h3>Hi, I'm Speedy 👋</h3>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}