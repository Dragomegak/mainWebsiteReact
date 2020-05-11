import React from 'react';
import './home.css';

import { Component, Fragment } from 'react';
import { Container, Row, Col, Image, fluid} from 'react-bootstrap';

import Facebook from '../assets/images/facebook.png';
import Github from '../assets/images/github.png';
import Linkedin from '../assets/images/linkedin.png';
import Wordpress from '../assets/images/wordpress.png';
import Youtube from '../assets/images/youtube.png';
import DiscordApp from '../assets/images/discordapp.png';
 
const home = () => {
    return (
        <React.Fragment>
            <div class="website-background">
                <h3 class="mission-quote">About Me</h3>
                <p class="mission-quote">A Computer Programming and Analysis graduate with a Computer Science background. A quick learner experienced in working with new people and new technologies. A contributor in the open-source community with a firm belief in the mission espoused by open-source technologies.</p>
                <h4 class="social-media-text">Social Media Links</h4>
                <Container>
                    <Row>
                        <Col xs={2} class="social-media-logos"><Image src={Facebook} fluid href="https://www.facebook.com/Dragomegak/"></Image></Col>
                        <Col xs={2} class="social-media-logos"><Image src={Github} fluid href="https://www.github.com/Dragomegak/"></Image></Col>
                        <Col xs={2} class="social-media-logos"><Image src={Linkedin} fluid href="https://www.linkedin.com/in/dragomegak/"></Image></Col>
                        <Col xs={2} class="social-media-logos"><Image src={Wordpress} fluid href="https://stevenleopensourceblog.wordpress.com/"></Image></Col>
                        <Col xs={2} class="social-media-logos"><Image src={Youtube} fluid href="https://www.youtube.com/channel/UCs2x5Od16mDHi2RdoCvGMjQ"></Image></Col>
                        <Col xs={2} class="social-media-logos"><Image src={DiscordApp} fluid href="https://discordapp.com/channels/@me/112352049554817024/"></Image></Col>
                    </Row>
                    <Row>
                        <Col><p class="social-media-names">Facebook</p></Col>
                        <Col><p class="social-media-names">Github</p></Col>
                        <Col><p class="social-media-names">Linkedin</p></Col>
                        <Col><p class="social-media-names">Wordpress</p></Col>
                        <Col><p class="social-media-names">Youtube</p></Col>
                        <Col><p class="social-media-names">DiscordApp</p></Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}
 
export default home;