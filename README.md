CS 465 Module Eight Journal

Travlr Getaways – Full Stack Web Application

Architecture

Frontend Development

Throughout this course, I developed the Travlr Getaways application using different frontend technologies, including Express HTML, JavaScript, and Angular. The Express application used server-side rendering to generate customer-facing pages, while JavaScript provided dynamic functionality and interaction. The Angular single-page application (SPA) provided a separate administrative interface using reusable components.

One significant difference between these approaches is how content is rendered. Express generates HTML on the server, while Angular dynamically updates the interface within the browser. The SPA approach reduces unnecessary page reloads and creates a more responsive user experience. However, it also introduces additional complexity involving routing, application state, and API communication.

Database Architecture

MongoDB was selected because its NoSQL document structure works well with the JSON-based data used throughout the application. Unlike traditional relational databases, MongoDB stores information in flexible documents rather than requiring predefined tables and relationships. This approach simplified the management of travel package information and allowed the application to accommodate changes in data structure.

Using MongoDB alongside Express, Angular, and Node.js also created a consistent JavaScript-based development environment.

Functionality

JSON and JavaScript

JSON and JavaScript serve different purposes within the application. JavaScript is a programming language used to implement application logic, while JSON is a lightweight format used to represent and exchange structured data.

In Travlr Getaways, JSON connects the frontend and backend by providing a standardized format for transferring trip information through RESTful API endpoints. The backend retrieves data from MongoDB and returns JSON responses that the Angular application can process and display.

Code Refactoring and Reusable Components

Throughout development, I improved the application’s organization by separating functionality into controllers, routes, models, and reusable components. One example involved moving trip information from static data files into MongoDB and retrieving it through API endpoints.

Another improvement involved developing Angular components to manage the administrative interface. Rather than duplicating HTML and application logic, reusable components provide a consistent structure that can be maintained and expanded.

These improvements reduce code duplication, simplify debugging, improve maintainability, and make future development more efficient.

Testing

API Testing and Security

Testing a full-stack application requires verifying that the frontend, backend, and database communicate correctly. RESTful API endpoints provide specific locations where clients can request or modify application data.

For example, GET requests retrieve trip information, while PUT requests update existing records. Testing these endpoints involves confirming that requests return appropriate HTTP status codes, expected JSON responses, and accurate database changes.

Security introduces additional testing requirements because certain operations must be restricted to authenticated users. Administrative functionality should require valid authentication credentials before allowing changes to application data.

Testing must therefore include both successful and unsuccessful authentication scenarios. This includes verifying that authorized requests work correctly while unauthorized requests are rejected.

I also learned the importance of checking error handling, database connectivity, and communication between application components. These testing practices help identify problems before an application is deployed.

Reflection

Completing CS 465 helped me better understand how individual software development technologies work together to create a complete application. Before this course, much of my development experience involved smaller programming assignments and individual application components. Building Travlr Getaways allowed me to connect frontend development, backend services, database management, and authentication into a larger software system.

One of the most valuable skills I developed was understanding how RESTful APIs connect different parts of an application. I also gained practical experience working with Express, Node.js, MongoDB, Angular, and GitHub.

The course strengthened my ability to troubleshoot problems, organize application architecture, and work with unfamiliar frameworks. These skills are particularly valuable as I pursue a career in software engineering and eventually expand into artificial intelligence and machine learning development.

Having a completed full-stack application in my GitHub portfolio provides an opportunity to demonstrate practical development experience to potential employers. More importantly, this project has given me greater confidence in my ability to approach complex software development problems and build solutions using multiple technologies.
