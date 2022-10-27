import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <h2>Frequently Asked Questions: FAQ's</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. What is cors?</Accordion.Header>
                    <Accordion.Body>
                        <strong>Cross-Origin Resource Sharing (CORS)</strong> is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others. <br /> <br />

                        CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari. The standard has been accepted as a W3C Recommendation in January 2014. Based on that, we can assume that it is implemented in all currently available and other than listed web browsers.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too. <br /><br />

                        <strong>Top functionalities are:</strong> <br /><br />

                        Firebase Database: used to store users data like chat messages, users details and other metadata
                        Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc.
                        Firebase Cloud Messaging: used to send notification
                        Firebase Remote Config: used to perform A/B testing on the go. <br /><br />

                        <strong>The top Firebase products that I am addicted to are:</strong> <br /><br />

                        Firebase Remote Config: I love this product; it actually saved me sometimes from going broke. Here I’ve already written enough about it why I love it since it allows you to modify the appearance and behavior of your app without letting users download your app.
                        Firebase Database: The product I have been using from the very first day since it stores data as JSON and synchronized in realtime.
                        Firebase Authentication: it has saved countless hours of my life since it allows to authenticates your app with the users.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Node.js is a JavaScript runtime environment. Sounds great, but what does that mean?
                        <br /><br />
                        <strong>How does that work?</strong> <br /><br />
                        The Node.js run-time environment includes everything you need to execute a program written in JavaScript.
                        Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.

                        Now you can do much more with JavaScript than just making websites interactive.

                        JavaScript now has the capability to do things that other scripting languages like Python can do.

                        Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;