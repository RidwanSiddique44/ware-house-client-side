import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <h3 className="text-danger fs-1 fw-bolder mt-5">BLOGS</h3>
            <hr />
            <div className="blog-container p-5 m-5 shadow-lg">
                <h2 className="fw-bolder">What are the difference between javascript and nodejs?</h2>
                <p>JavaScript is a programming language. Javscript runs in web browsers. On the other hand Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries. JavaScript is basically one standard defining programming language. It can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM.On the other hand Node.js holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags. </p>
            </div>
            <div className="blog-container p-5 m-5 shadow-lg">
                <h2 className="fw-bolder">What are the differences between sql and nosql databases?</h2>
                <p>SQL are relational database management system.And NoSQL are non-relational or distributed database system.SQL databases have fixed or static or predefined schema, while NoSQL have dynamic schema.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.SQL databases are not suited for hierarchical data storage, in contrast NoSQl databases are best suited for hierarchical data storage. </p>
            </div>
            <div className="blog-container p-5 m-5 shadow-lg">
                <h2 className="fw-bolder"> What is the purpose of jwt and how does it work?</h2>
                <p>JWT or JSON Web Token, is a token-based stateless authentication mechanism.JWT authentication is an open standard used to share information between two parties securely, a client and a server. In most cases, it is an encoded JSON containing a set of claims and a signature. It is usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It is also a popular way to authenticate or authorize users in a microservice architecture.<p className='fw-bolder'>How JWT Works:</p> JWTs differ from other web tokens. They contain a set of claims. Claims are used to transmit information between two parties. A claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts separated by dots and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxx.yyyy.zzzz.<p> Once decoded, you will get two JSON strings: First one is the header and the payload and the second one is signature.The JSON Object Signing and Encryption header contains the type of token,JWT in this case ,and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory.The signature ensures that the token has not been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p> </p>
            </div>

        </div>
    );
};

export default Blogs;