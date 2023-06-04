import { Component } from "react"
import "../styles/style.css"

function importAllImages(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));

export default class process extends Component{
    render() {
        return (
            <section className="myprocess">
                <div className="container">
                    <div className="process-container">
                        <div className="L1">
                            <h2>Design Process</h2>
                            <img src={images['Rectangle 22.png']} alt="" />
                            <h4>Reach your business goals with excellent user experience. Let’s start working on your awesome
                                web or iOS app.</h4>
                        </div>
                        <div className="R1">
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
                    </div>
                </div>
            </section>
        );
    }
}