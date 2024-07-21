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

#### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: This project requires Node.js to run. Download and install it from [https://nodejs.org/](https://nodejs.org/). This project has been tested with Node.js version 16.x.
- **npm**: npm is used to manage the dependencies of this project. It comes bundled with Node.js, so when you install Node.js, you automatically get npm installed on your system.

#### Installation
To set up this project locally, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/nathanaeltan/hotel-data-merge.git
```

2. Navigate into project directory and install dependencies
```sh
cd hotel-data-merge
npm install
```


#### Running the application
* Development mode

```sh
npm run dev
```

* To build and run
```sh
npm run build
npm run start
```
The applcation will be available on ```http://localhost:3000```

#### Testing
To run the full suite of tests, run
```sh
npm test
```

#### API Documentation
* After building and running, the API documentation will be available at:
```sh
http://localhost:3000/docs
```


## Approach

#### Design
There is only one API end point
    - POST /api/hotel: To accept either an array of hotel_ids or a destination ids that will fetch hotel data from the supplier APIs and return it as a unified endpoint.

* Request body params:
    1. hotel_ids: array of strings
    2. destination_id: number

hotel_ids are prioritized over destination_id, e.g destination_id is ignored if hotel_ids are present

#### Response body and merge strategy

**id**: string

**destination_id**: number

**name**: string

**location**: object

    * lat: number
    * lng: number
    * address: string
    * city: string
    * country: string

**description**: string

**amenities**: object

    * general: string[]
    * room: string[]

**images**: object

    * rooms: object[]
        * link: string
        * description: string
    * site: object[]
        * link: string
        * description: string
    * amenities: object[]
        * link: string
        * description: string

**booking_conditions**: string[]



| key | Merge strategy |
| ---- | ---- |
| id | None |
| destination_id | None |
| name | Longer name gets priority, trimmed whitespace |
| location | Priority for values that are truthy, countries are normalized to convert from country codes to country names capitalized. Addresses are upper-cased for consistency |
| description | Longer descriptions are prioritized, trimmed whitespace |
| amenities | Amenities are normalized by separating joined together words, and only capitalizing the first word e.g BusinessCenter is Business center |
| images | Descriptions are uppercased for consistency, duplicate links are filtered out |
| booking_conditions | Longer descriptions are prioritized |



