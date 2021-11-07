import React from 'react';
import './home.css';

import { Component } from 'react';
import { Container, Row, Col, Image, Carousel} from 'react-bootstrap';

import GradPhoto from '../../assets/images/graduationPicture.jpg';
import YoungerPicture from '../../assets/images/youngerPicture.JPG';

import Facebook from '../../assets/images/facebook.png';
import Github from '../../assets/images/github.png';
import Linkedin from '../../assets/images/linkedin.png';
import Wordpress from '../../assets/images/wordpress.png';
import Youtube from '../../assets/images/youtube.png';
import DiscordApp from '../../assets/images/discordapp.png';

 
class Home extends Component {
    componentDidMount(){
        document.title = "MainWebsite - Home"
    } 
    render () {
    return (
        <React.Fragment>
            <div class="website-background">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100 carousel-item" src={GradPhoto}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 carousel-item" src={YoungerPicture}/>
                    </Carousel.Item>
                </Carousel>
                <h3 class="mission-quote">About Me</h3>
                <p class="mission-quote">A Computer Programming and Analysis graduate with a Computer Science background. A quick learner experienced in working with new people and new technologies. A contributor in the open-source community with a firm belief in the mission espoused by open-source technologies.</p>
                <p class="mission-quote">Currently Employed as a Full Stack Developer for <a href="Audiobooks.com">Audiobooks.com</a></p>
                <h4 class="social-media-text">Social Media Links</h4>
                <Container>
                    <Row>
                        <Col xs={2} class="social-media-logos"><a href="https://www.facebook.com/Dragomegak/"><Image src={Facebook} fluid ></Image></a></Col>
                        <Col xs={2} class="social-media-logos"><a href="https://www.github.com/Dragomegak/"><Image src={Github} fluid ></Image></a></Col>
                        <Col xs={2} class="social-media-logos"><a href="https://www.linkedin.com/in/dragomegak/"><Image src={Linkedin} fluid ></Image></a></Col>
                        <Col xs={2} class="social-media-logos"><a href="https://stevenleopensourceblog.wordpress.com/"><Image src={Wordpress} fluid ></Image></a></Col>
                        <Col xs={2} class="social-media-logos"><a href="https://www.youtube.com/channel/UCs2x5Od16mDHi2RdoCvGMjQ"><Image src={Youtube} fluid ></Image></a></Col>
                        <Col xs={2} class="social-media-logos"><a href="https://discordapp.com/channels/@me/112352049554817024/"><Image src={DiscordApp} fluid ></Image></a></Col>
                    </Row>
                    <Row>
                        <Col><p class="social-media-names">Facebook</p></Col>
                        <Col><p class="social-media-names">Github</p></Col>
                        <Col><p class="social-media-names">Linkedin</p></Col>
                        <Col><p class="social-media-names">Wordpress Blog</p></Col>
                        <Col><p class="social-media-names">Youtube</p></Col>
                        <Col><p class="social-media-names">DiscordApp</p></Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
        );
    }
}
 
export default Home;