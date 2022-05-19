# RestAPI

This is my first Rest API made with [![Node.js](https://img.shields.io/badge/-Node.js-000?&logo=node.js)](https://www.nodejs.org), [![Express](https://img.shields.io/badge/-Express-000?&logo=Express)](https://expressjs.com) & [![MongoDB](https://img.shields.io/badge/-MongoDB-000?&logo=MongoDB)](https://www.mongodb.com). It's an API where you can interact with data, retrieve information, update information & etc. Going to be adding channels soon.

<img src="https://raw.githubusercontent.com/xShamir/RestAPI/master/RestAPI-Design.png"/>

Representational state transfer (REST) is a software architectural style that was created to guide the design and development of the architecture for the World Wide Web. REST defines a set of constraints for how the architecture of an Internet-scale distributed hypermedia system, such as the Web, should behave. The REST architectural style emphasises the scalability of interactions between components, uniform interfaces, independent deployment of components, and the creation of a layered architecture to facilitate caching components to reduce user-perceived latency, enforce security, and encapsulate legacy systems.

<img src="https://raw.githubusercontent.com/xShamir/RestAPI/master/RestAPI-Methods.png" width="1184px"/>

REST has been employed throughout the software industry and is a widely accepted set of guidelines for creating stateless, reliable web APIs. A web API that obeys the REST constraints is informally described as RESTful. RESTful web APIs are typically loosely based on HTTP methods to access resources via URL-encoded parameters and the use of JSON or XML to transmit data.

# How to use?

You need [![Node.js](https://img.shields.io/badge/-Node.js-000?&logo=node.js)](https://www.nodejs.org), [![Express](https://img.shields.io/badge/-Express-000?&logo=Express)](https://expressjs.com) & [![MongoDB](https://img.shields.io/badge/-MongoDB-000?&logo=MongoDB)](https://www.mongodb.com) to host this API. First of all, you install Node.JS and secondly run ```npm i express``` in your project folder's terminal and then make a Database & Collection with MongoDB by following this tutorial: https://www.mongodb.com/basics/create-database. You need to make a .env file in the project folder, following this format ```DB_URL={Your Database Connection URL}```. You can use this API with [Postman](https://www.postman.com/product/api-client/)