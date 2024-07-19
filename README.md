# Hotel Data Merge

Server side application to merge hotel data from different sources and return normalized data.

#### Features
* Queries different hotel data from suppliers
* Normalize/Sanitize data and merges by hotel ID
* Caching to optimize performance for queries by hotel id or destination id
* Return data in a single API endpoint

#### Technologies used
- **[Express.js](https://expressjs.com/)**: Web framework for Node.js.
- **[TypeScript](https://www.typescriptlang.org/)**
- **[axios](https://github.com/axios/axios)**: For fetching supplier data
- **[node-cache](https://www.npmjs.com/package/node-cache)**: A simple caching module for Node.js with TTL.
- **[Jest](https://jestjs.io/)**: JavaScript Testing Framework with a focus on simplicity.
- **[Swagger](https://swagger.io/)**: For API documentation

#### Installation
