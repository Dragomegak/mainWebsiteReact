import React, { Component } from 'react';
import './contactInfo.css';

import { Container, Row, Col } from 'react-bootstrap';

class ContactInfo extends Component {
    componentDidMount(){
        document.title = "MainWebsite - Contact-Info"
    }  
    render () {
    return(
        <div class="website-background">
            <Container>
                <Row md={12}>
                    <Col><iframe class="iframe-container embed-responsive" src="https://maps.google.com/maps?q=hook%20avenue&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe></Col>
                </Row>
                <Row md={2} />
                <Row md={8}>
                    <Col>
                        <div class="information-section">
                            <h4 class="information-text">Steven Le</h4>
                            <p class="information-text">Phone number: (647)-986-6569</p>
                            <p class="information-text">Email: <a href="mailto:stevenle6569@gmail.com?Subject=Business%Inquiry">stevenle6569@gmail.com</a></p>
                            <p class="information-text">Avaliability: </p>
                            <p class="information-text">Monday - Friday:  12PM - 1 PM & 7 PM - 10 PM</p>
                            <p class="information-text">Weekends: 1PM - 6PM</p>
                            <p class="information-text subject-to-change">Avaliability subject to change</p>
                        </div>
                    </Col>
                </Row>
                <Row md={2} />
            </Container>
            
        </div>
        );
    }
}
export default ContactInfo;