# AlmaBetter FullStack Project

## Walmart WebApp

The Walmart WebApp is a web application inspired by the popular e-commerce platform Walmart. It provides users with a familiar shopping experience, offering a wide range of products across different categories. The project leverages modern web technologies to create a seamless shopping experience, including React.js for the frontend, Tailwind CSS for styling, Redux for state management, React Router DOM for navigation, MongoDB for database storage, Express.js and Node.js for the backend, and Vercel for deployment.

## Key Features

**User Authentication**: Users can sign up, log in, and log out securely using Firebase authentication.\
**Browsing Products**: Users can browse through a diverse selection of products, filtered by category, price range, and other attributes.\
**Product Details**: Detailed information about each product is displayed, including name, description, price, and images.\
**Adding to Cart**: Authenticated users can add products to their shopping cart with a single click. The cart is managed using Redux.\
**Checkout Process**: Users can proceed to the checkout page to review their cart contents, enter shipping information, and complete their purchase.\
**Responsive Design**: The website is fully responsive and optimized for various screen sizes.

## Technologies Used:

**Frontend**: React.js, Tailwind CSS, React Router DOM\
**State Management**: Redux\
**Backend**: Node.js, Express.js\
**Database**: MongoDB, Mongoose\
**Deployment**: Vercel

## Screenshots

# Home Page

![Homepage](https://github.com/hari-mdu/walmart-webapp/assets/124577922/8cbe5aff-5cf4-49db-8ee6-8a5d8136bf76)

# Product Categories Page

![Categories](https://github.com/hari-mdu/walmart-webapp/assets/124577922/350d14ea-3486-422a-8896-84cdb1a849ae)

# Sign In Page

![SiginPage](https://github.com/hari-mdu/walmart-webapp/assets/124577922/b035ff94-428c-4bc0-8a1d-7aee30caf5ff)

# Register Page

![RegisterPage](https://github.com/hari-mdu/walmart-webapp/assets/124577922/ce40a69d-64df-46aa-8931-8e4720081839)

# Cart Page

![cart](https://github.com/hari-mdu/walmart-webapp/assets/124577922/2936a2bf-9353-4be0-95bc-ba40d7d50846)

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB database setup.

### Folder Structure

- frontend = Contains the React frontend.
- backend = Contains the Express backend.

### Dependencies

This project uses the following major libraries and frameworks:

- ReactJS (frontend)
- NodeJS & ExpressJS (backend)
- MongoDB (database)
- TailwindCSS (styling)

For a full list of dependencies, please check the package.json files in both the client and server directories.

### Installation

Clone the repository

```
git clone https://github.com/hari-mdu/Walmart-fullstack.git
```

open this project on you local IDE and in the terminal enter these commands

- For Frotend

```
cd frontend

npm install

npm start
```

- For backend

```
cd backend

npm install

npm start
```

This will start you frontend part in http://localhost:5173 and backend part running in http://localhost:8080

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Note : your mongodb cluster connect key

MONGODBLIVE : mongodb+srv://user_name:<password>@cluster0.adfedxd.mongodb.net/<database_name>?retryWrites=true&w=majority

## API Endpoints

### User Endpoints

| Endpoint           | Method | Description         | Authentication | Request Body                                                              |
| ------------------ | ------ | ------------------- | -------------- | ------------------------------------------------------------------------- |
| /api/user/register | POST   | Register a new user | No             | `json { "username": "string", "email": "string", "password": "string" } ` |
| /api/user/login    | POST   | Login a user        | Yes          | `json { "email": "string", "password": "string" } `                       |
| /api/user/logout   | POST   | Logout a user       | Yes            | None                                                                      |
| /api/user/:id      | DELETE | Delete a user       | Yes            | None                                                                      |

### Product Endpoints

| Endpoint             | Method | Description            | Authentication | Request Body                                                                                                                                                        |
| -------------------- | ------ | ---------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /api/product/details | GET    | Get all products       | No             | None                                                                                                                                                                |
| /api/product/:id     | GET    | Get a specific product | No             | None                                                                                                                                                                |
| /api/product/create  | POST   | Create a new product   | Yes            | `json { "title": "string", "productDescription": "string", "price": "number", "image": "string", "category": "string", "quantity": "number", "rating": "number" } ` |
| /api/product/:id     | PATCH  | Update a product       | Yes            | `json { "title": "string", "productDescription": "string", "price": "number" } `                                                                                    |
| /api/product/:id     | DELETE | Delete a product       | Yes            | None                                                                                                                                                                |

### Category Endpoints

| Endpoint              | Method | Description             | Authentication | Request Body                                                              |
| --------------------- | ------ | ----------------------- | -------------- | ------------------------------------------------------------------------- |
| /api/category/details | GET    | Get all categories      | No             | None                                                                      |
| /api/category/:id     | GET    | Get a specific category | No             | None                                                                      |
| /api/category/create  | POST   | Create a new category   | No             | `json { "name": "string", "type": "string", "categoryImage": "string" } ` |
| /api/category/:id     | PATCH  | Update a category       | No             | `json { "name": "string", "type": "string" } `                            |
| /api/category/:id     | DELETE | Delete a category       | No             | None                                                                      |

## Authentication

For endpoints requiring authentication, include the `Authorization` header with a valid token:

```http
Authorization: Bearer <your-token-here>

```



### Deployment Links

click on the link to view the project website

Frontend on netlify.com

 - https://walmart-fullstack.vercel.app/

Backend on render.com

 - https://walmart-fullstack.onrender.com/api/
```
