
<html>
<head>
	<meta charset="UTF-8">
	<h1>readme MEAN STACK</h1>
</head>
<body>
<div class="TOC">
<ul>
<li><a href="#architecture">Architecture</a></li>
<li><a href="#functionality">Functionality</a></li>
<li><a href="#testing">Testing</a></li>
<li><a href="#reflection">Reflection</a></li>
</ul>
</div>

<h1 id="architecture">Architecture</h1>

<p>In a Static HTML webpage, the site retrieves the HTML and CSS file and renders it to the user’s browser. Static because it doesn't change with the User's actions. It's less secure when sending data. Forms should never be sent using this. The HTML is read from the top down with the CSS functions provide the style. </p>

<p>A single page web application interacts with the user by using the server’s new data for the user to see. The page is created on the server then renders the HTML JavaScript and CSS to the user. The webpage can change based on the users’ actions. This DOM tree is modified according to the users’ actions. The AngularJS used the express endpoints, Components injected into HTML and browser memory storage to store the user’s authentication credentials to verify the right User was using the administrator front end. The problem with AngularJS is inability for Web Crawlers to render the JavaScript. </p>

<p>This was a thin server architecture where CRUD methods were used in a REST API to use data from the server. That server stored the data in MongoDB. MongoDB is fast compared to loading files one at a time in the browser. Mongo is easy to update that dynamically and with Seed-goose it is possible to use with a local JSON data file instead of pushing through angular.Modifying the source code of the HTML file could be tedious. </p>

<p>NodeJS was used for the backend, it's a framework and builds back and services like APIs in web apps.</p>

<p>Express was used in the backend for templating, serving, setting up the REST API and made the .env file for security.</p>

<p>Mongo DB is a non-relational database. It doesn't use it table like relational databases. It was used to store and retrieve data. Its stores data in BSON JSON format modern applications are becoming more interactive and Store more data. This means it needs more speed. For this reason, mongo DB is more scalable to a larger data set. I can use index scene to speed things up. It automatically provides an ID. Adding a new field is easy with Mongo.</p>

<h1 id="functionality">Functionality</h1>

<p>When using handlebars which is an express templating library. You can see where the benefits would save the developer a lot of time. It is more work to set up but once it's set up you can reuse a header or footer by calling the template file. This worked well for quick changes like during the holidays when there's a sale on a certain number of items. This would take a long time to hardcode each item, with handlebars it would be fast. Another instance of refactoring code to make improvements on functionality and efficiency, is with the use of nested components in angular. For instance, I could add functionality by making a list view or card view that would pull the travel list component into it.</p>

<p>JSON stands for JavaScript object notation. It’s used for storing a transporting data. It's easy for programs to read and understand it, because it is in text form an organized. JavaScript is a programming language unlike JSON where it is derived from JavaScript notation. JavaScript ties in the front end and back end by using parse() it reads the data. This wayJavaScript objects can be stored as text. HTML has the ability receive this JSON data and render it. </p>

<h1 id="testing">Testing</h1>

<p>This application was a REST API, (Application program interface, representational state transfer) that means the REST API was used to create a stateless interface to the database. This consists of a collection of structured URLs that return specific data one called. Express application, which is used to build the API, the endpoints communicate with the API and in turn that communicates with the database, the code needed to be re-factored to use angular single page application. The endpoints had to be secured so that and authenticated User could use them. The rest API uses get post put and delete. It takes the HTTP request and sends a HTTP response back. There is a set or URLs attached to each collection.</p>

<p>The main method for testing is done with “inspect “ on a FireFox or chrome Web browser. Postman was another resource that I used for testing the API. Postman is a great way to testAPI`s that are communicating with the back end mongoDB before you have the front and in place. You can utilize all crud methods this way. It made it more difficult when Security was in place because you must store the token and the user login. This means you would have to generate a token and send it with your request. This took a lot of thought and research. I prefer the web browser testing because it has everything that you need you can get responses rate in the web browser, modify the code like CSS and HTML, you can see the exact line that's being executed even in a node module. There's full console and Network tab to show you what happened and when.</p>

<h1 id="reflection">Reflection</h1>

<p>I have learned a lot from this course, the main thing I learned was how to break down the project into separate components, so it is built incrementally. This allowed me to decompose the structure of the site to see how it was rendering.</p>

<p>The model view controller set up for the User front end is nothing new to me, it's a great way to keep things organized for each page that's being rendered. The angular project was new to me because it does not use a MVC instead it uses components that inject data into the HTML. I think I'm going to use angular in the future for its simplicity and speed.</p>

<p>Another thing I liked was seed goose. I will use this again. This express library can be used with a YAML file. There's a lot of business owners with critical information that needs to be readily by someone that does not have a computer science degree.</p>
</body>
</html>

