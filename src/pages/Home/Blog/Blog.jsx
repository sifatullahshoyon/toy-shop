import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="collapse collapse-arrow bg-transparent">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <div>
            <div>
              <p>
                Access token and refresh token are both used in authentication
                systems, particularly in OAuth 2.0, to authorize client
                applications to access protected resources on behalf of a user.
              </p>
              <h4>Access Token:</h4>
              <p>
                An access token is a credential that represents the
                authorization granted to the client by the resource owner
                (usually the user) and is used by the client to access protected
                resources. It is a string that typically has a limited lifespan
                and is issued by the authorization server after the user
                successfully authenticates and authorizes the client
                application. Access tokens are usually short-lived for security
                reasons and are used to authenticate the client when making
                requests to the resource server.
              </p>
              <h4>Refresh Token:</h4>
              <p>
                A refresh token is a credential used to obtain a new access
                token when the current access token becomes invalid or expires.
                Refresh tokens are long-lived compared to access tokens and are
                usually used to request new access tokens without needing the
                user to re-authenticate. They are issued along with the access
                token during the initial authentication process.
              </p>
            </div>
            <div></div>
            <h2>How they work:</h2>
            <p>
              When a user authenticates and authorizes a client application,
              both access token and refresh token are issued by the
              authorization server. The access token is used by the client to
              access protected resources, while the refresh token is stored
              securely and used to obtain new access tokens as needed, typically
              through a token refresh request to the authorization server.
            </p>
            <p>Where to store them on the client-side:</p>
            <p>Where to store them on the client-side:</p>
            <p>
              Access tokens should be stored securely on the client-side,
              typically in memory, local storage, or session storage. Refresh
              tokens, being more sensitive as they can be used to obtain new
              access tokens, should be stored securely and should never be
              accessible to client-side JavaScript code. They are usually stored
              in a secure HTTP-only cookie or in a secure storage mechanism
              provided by the operating system or browser, such as the Keychain
              on macOS or Credential Locker on Windows. Storing tokens securely
              helps mitigate risks such as cross-site scripting (XSS) attacks,
              where an attacker could potentially steal the tokens if they are
              not properly secured.
            </p>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-transparent">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <div>
            <p>
              SQL (Structured Query Language) and NoSQL (Not Only SQL) databases
              are two main categories of databases, each with its own set of
              characteristics, advantages, and use cases. Here's a comparison
              between the two:
            </p>
            <div>
              Data Model: SQL databases use a relational data model, where data
              is organized into tables with rows and columns. Tables can have
              predefined schemas, and relationships between tables are
              established using foreign keys. NoSQL databases employ various
              data models, including document-based (e.g., MongoDB), key-value
              (e.g., Redis), wide-column (e.g., Cassandra), and graph-based
              (e.g., Neo4j). These models are schema-less or have flexible
              schemas, allowing for more dynamic and diverse data structures.
              Scalability: SQL databases typically scale vertically, meaning
              they are scaled by adding more resources (CPU, RAM, etc.) to a
              single server. This approach has limitations in terms of
              scalability. NoSQL databases are designed to scale horizontally,
              allowing them to handle large volumes of data and high throughput
              by distributing data across multiple servers. This makes them
              well-suited for scaling out in distributed systems. Schema
              Flexibility: SQL databases have a rigid schema where the structure
              of the data must be defined upfront. Changes to the schema can be
              complex and may require downtime or data migration. NoSQL
              databases offer schema flexibility, allowing developers to store
              data without a predefined schema or to have varying structures
              within the same collection or database. This flexibility enables
              faster development and iteration, especially in agile
              environments. Query Language: SQL databases use SQL (Structured
              Query Language) for querying and manipulating data. SQL provides a
              standardized way to interact with relational databases and offers
              powerful querying capabilities, including joins and aggregations.
              NoSQL databases have their own query languages or APIs tailored to
              their specific data models. While some NoSQL databases support
              SQL-like query languages, others may use APIs like MongoDB's query
              language or Cassandra's CQL (Cassandra Query Language). ACID vs.
              BASE: SQL databases typically adhere to the ACID (Atomicity,
              Consistency, Isolation, Durability) properties, ensuring data
              integrity and transactional consistency. NoSQL databases often
              follow the BASE (Basically Available, Soft state, Eventually
              consistent) model, prioritizing availability and partition
              tolerance over strong consistency. This trade-off allows for
              greater scalability and fault tolerance but may result in eventual
              consistency. Use Cases: SQL databases are well-suited for
              applications with structured data, complex relationships, and
              transactions that require strong consistency guarantees, such as
              financial systems, ERP (Enterprise Resource Planning) systems, and
              traditional relational databases. NoSQL databases are commonly
              used in scenarios where flexibility, scalability, and high
              availability are critical, such as web applications, mobile apps,
              real-time analytics, IoT (Internet of Things) applications, and
              content management systems.
            </div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-transparent">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <div>
            <p>
              Express.js and NestJS are both frameworks for building web
              applications and APIs using JavaScript (or TypeScript) on the
              Node.js runtime. However, they have different approaches and
              philosophies.
            </p>
            <div>
              <h4>Express.js:</h4>
              <p>
                Express.js is a minimal and flexible Node.js web application
                framework that provides a robust set of features for building
                web and mobile applications. It is unopinionated, meaning it
                gives developers a lot of freedom and flexibility in structuring
                their applications. Express.js provides a simple and intuitive
                API for handling HTTP requests, routing, middleware, and serving
                static files. It is widely used and has a large ecosystem of
                middleware and plugins available, making it easy to extend and
                customize. Express.js is well-suited for building lightweight,
                fast, and scalable web applications and APIs.
              </p>
            </div>
            <div>
              <h4>NestJS:</h4>
              <p>
                NestJS is a progressive Node.js framework for building
                efficient, reliable, and scalable server-side applications. It
                is built with TypeScript and heavily inspired by Angular, which
                means it adopts many of Angular's concepts and features, such as
                dependency injection, decorators, and modules. NestJS provides a
                modular and structured approach to building applications,
                encouraging the use of design patterns like MVC
                (Model-View-Controller) and SOLID principles. It offers
                out-of-the-box support for features like routing, middleware,
                validation, dependency injection, and more. NestJS leverages the
                power of TypeScript to provide strong typing, dependency
                injection, and advanced features like decorators for defining
                metadata and configuration. It aims to improve developer
                productivity, maintainability, and scalability by enforcing code
                organization and providing built-in support for testing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-transparent">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <div>
            <p>
              MongoDB's aggregation framework is a powerful tool for performing
              data processing tasks within MongoDB. It allows you to perform
              complex data transformations, aggregations, and computations on
              collections of documents.
            </p>
            <p>Here's how the MongoDB aggregation framework works:</p>
            <h4>Pipeline:</h4>
            <p>
              Aggregation operations in MongoDB are performed using pipelines. A
              pipeline is an array of stages, where each stage represents a
              specific operation or transformation to be applied to the
              documents in the collection. Each stage takes input from the
              previous stage, processes it, and passes the result to the next
              stage in the pipeline.
            </p>
            <h4>Stages:</h4>
            <p>
              MongoDB provides various stages that can be used in the
              aggregation pipeline. Some common stages include: $match: Filters
              the documents to include only those that match the specified
              criteria. $project: Reshapes the documents, including, excluding,
              or renaming fields, or creating new computed fields. $group:
              Groups documents by a specified key and performs aggregation
              operations (e.g., sum, average, count) on the grouped data. $sort:
              Sorts the documents based on one or more fields. $limit: Limits
              the number of documents passed to the next stage. $skip: Skips a
              specified number of documents. $unwind: Deconstructs an array
              field into multiple documents, one for each element of the array.
            </p>
            <h4>Execution:</h4>
            <p>
              When an aggregation pipeline is executed, MongoDB processes the
              documents in the collection according to the stages defined in the
              pipeline. Each document passes through the stages sequentially,
              and at each stage, the specified operation or transformation is
              applied to the document. The final output of the aggregation
              pipeline is a result set that consists of the documents generated
              by the last stage in the pipeline.
            </p>
            <h4>Performance:</h4>
            <p>
              MongoDB's aggregation framework is designed to be efficient and
              performant, even on large datasets. It leverages indexes, memory,
              and other optimizations to execute aggregation queries as
              efficiently as possible. However, complex aggregations or
              aggregations on large datasets may still require careful
              consideration and optimization to ensure optimal performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
