import React from 'react';

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
            
        </React.Fragment>
    );
}
 
export default home;