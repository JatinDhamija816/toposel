# Backend API

This is a backend API built with **Node.js, Express, and MongoDB**. It provides user authentication, registration, and token-based authentication using JWT. The API is deployed on **Render** and can be tested using the provided **Postman collection**.

## Features

- User registration with validation
- User login with email/username & password
- JWT-based authentication
- Secure cookie storage for access & refresh tokens
- Mongoose-based MongoDB integration
- Error handling & structured API responses

## Folder Structure

```
backend/
│-- src/                  # Source code directory
│   │-- config/          # Environment constants
│   │-- controllers/     # Handles business logic (auth, users, etc.)
│   │-- db/             # MongoDB connection setup
│   │-- models/        # Mongoose schemas (User, etc.)
│   │-- routes/        # API route definitions
│   │-- utils/         # Utility functions (JWT, Error handling, etc.)
│   │-- app.js        # Express server configuration
│   │-- index.js      # Entry point for the server
│-- node_modules/       # Dependencies
│-- package.json       # Project dependencies & scripts
│-- package-lock.json  # Locked dependency versions
│-- README.md          # Project Documentation
```

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- MongoDB Atlas or Local MongoDB

### Setup Instructions

1. **Clone the repository**

   ```sh
   git clone https://github.com/JatinDhamija816/toposel
   cd toposel
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Setup environment variables**
   Create a `.env` file in the root and add:

   ```sh
   PORT=5000

   MONGO_URI=your_mongodb_uri
   NODE_ENV=devlopment

   JWT_ACCESS_SECRET=your_access_token_secret
   JWT_REFRESH_SECRET=your_refresh_token_secret

   ACCESS_TOKEN_EXPIRY=900000
   REFRESH_TOKEN_EXPIRY=2592000000

   ACCESS_TOKEN_EXPIRY_STR=15m
   REFRESH_TOKEN_EXPIRY_STR=30d
   ```

4. **Start the server**

   ```sh
   npm run start
   ```

5. **API Base URL**
   - Deployed URL: `https://toposel.onrender.com`

## API Endpoints

### User Authentication

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | `/api/v1/register` | Register new user |
| POST   | `/api/v1/login`    | Login user        |

## 📌 Postman Collection

- A Postman collection is provided for testing. Import the JSON file into Postman to test API endpoints.📥 Download Postman Collection [Postman](https://www.postman.com/hospital-food-management/workspace/toposel/request/33183162-3dea6ec1-c4d3-49b2-b4cc-189bad45a5fa?action=share&creator=33183162&ctx=documentation)

## Technologies Used

- **Node.js** & **Express.js** - Backend Framework
- **MongoDB** & **Mongoose** - Database & ODM
- **JWT** - Authentication
- **bcrypt.js** - Password Hashing
- **cookie-parser** - Secure Cookie Handling

## Deployment

The backend is deployed on **Render**. Update `.env` with the deployed URL.

---

### Feel free to contribute or suggest improvements! 🚀

<!--  -->

<!-- -->
