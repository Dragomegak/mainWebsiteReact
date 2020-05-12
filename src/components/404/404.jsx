import React from 'react';
import './404.css'

import { Button } from 'react-bootstrap';
 
const Error = () => {
    return (
       <div class="website-background">
         <h1>404 Page Not Found</h1>
         <h3>The page you have requested has not been found, sorry about that.</h3>
         <h4>Possible reasons for this page to come up are:</h4>
         <ul>
            <li>The page you are looking for has been moved.</li>
            <li>The page you are looking for does not exist.</li>
            <li>You are searching for the 404 page itself, in which case, congrats!</li>
         </ul>
         <h4>Rerouting</h4>
         <p>Just in case you were looking for a way to get back home press on the button below!</p>
         <Button variant="secondary" size="md" block Link to="/home">Home</Button>
         <p>If you require assistance and want to contact me please press the button below me to reroute to the contact page</p>
         <Button variant="secondary" size="md" block Link to="/contact-info">Contact Info</Button>
       </div>
    );
}
 
export default Error;