import React from 'react';
import './home.css';

import { Component, Fragment } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import Facebook from '../assets/images/facebook.png';
import Github from '../assets/images/github.png';
import Linkedin from '../assets/images/linkedin.png';
import Wordpress from '../assets/images/wordpress.png';
import Youtube from '../assets/images/youtube.png';
import DiscordApp from '../assets/images/discordapp.png';
 
const home = () => {
    return (
        <React.Fragment>
            <h3 class="mission-quote">About Me</h3>
            <p class="mission-quote">A Computer Programming and Analysis graduate with a Computer Science background. A quick learner experienced in working with new people and new technologies. A contributor in the open-source community with a firm belief in the mission espoused by open-source technologies.</p>
            <h4 class="social-media-text">Social Media Links</h4>
            <Container>
                
                <Row>
                    <Col><p>Facebook</p></Col>
                    <Col><p>Github</p></Col>
                    <Col><p>Linkedin</p></Col>
                    <Col><p>Wordpress</p></Col>
                    <Col><p>Youtube</p></Col>
                    <Col><p>DiscordApp</p></Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
 
export default home;

/* 
<Row>
    {<Col md={2} class="social-media-logos"><img src={Facebook} href="https://www.facebook.com/Dragomegak/"></img></Col>
    <Col md={2} class="social-media-logos"><img src={Github} href="https://www.github.com/Dragomegak/"></img></Col>
    <Col md={2} class="social-media-logos"><img src={Linkedin} href="https://www.linkedin.com/in/dragomegak/"></img></Col>
    <Col md={2} class="social-media-logos"><img src={Wordpress} href="https://stevenleopensourceblog.wordpress.com/"></img></Col>
    <Col md={2} class="social-media-logos"><img src={Youtube} href="https://www.youtube.com/channel/UCs2x5Od16mDHi2RdoCvGMjQ"></img></Col>
    <Col md={2} class="social-media-logos"><img src={DiscordApp} href="https://discordapp.com/channels/@me/112352049554817024/"></img></Col>
</Row>
} */