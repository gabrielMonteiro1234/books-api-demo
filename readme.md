# Books API Tutorial (Express & Restify)

This project is a RESTful book management API built with TypeScript. It demonstrates how to implement the same business logic (CRUD operations) using two of the most popular web frameworks for Node.js: **Express** and **Restify**.

## Project Structure

Based on the `src/` directory structure:

* `models/`: Contains the book interfaces and types (`Book`, `NewBook`).
* `repo/`: Contains the in-memory repository handling CRUD operations (`BookRepo`).
* `routes/`: Defines the API endpoints, separated into Express and Restify implementations.
* `server-express.ts`: The entry point for the Express server.
* `server-restify.ts`: The entry point for the Restify server.

## 🛠️ Prerequisites

* [Node.js](https://nodejs.org/) (version 14 or higher)
* `npm` or `yarn`

## 📦 Installation

1. Clone the repository and navigate to the project folder.
2. Install the dependencies by running:
   ```bash
   npm install
   ```


## 🚀 How to Run

### Run the Express Server

The Express server will start and listen on port **3000**.

```bash
npm run dev:express
```

*You should see the message: `Express server running on port 3000`*

### Run the Restify Server

The Restify server will start and listen on port **8080**.

```bash
npm run dev:restify
```

*You should see the message: `Restify server running on port 8080`*

## 📚 API Endpoints Documentation

Both servers provide the exact same endpoints based on the `/api/books` route. You can test them using tools like [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), or simply `curl`.

Replace `BASE_URL` with:
* `http://localhost:3000` (if using Express)
* `http://localhost:8080` (if using Restify)

### 1. List all books
* **Method:** `GET`
* **URL:** `BASE_URL/api/books`
* **Success Response:** `200 OK`

### 2. Get a book by ID
* **Method:** `GET`
* **URL:** `BASE_URL/api/books/:id`
* **Success Response:** `200 OK`
* **Error Response (Not Found):** `404 Not Found`

### 3. Create a new book
* **Method:** `POST`
* **URL:** `BASE_URL/api/books`
* **Body (JSON):**
  ```json
  {
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "isbn": "1234567890"
  }
  ```
* **Success Response:** `201 Created`

### 4. Replace an existing book
* **Method:** `PUT`
* **URL:** `BASE_URL/api/books/:id`
* **Body (JSON):** *(Must contain all required fields)*
  ```json
  {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien"
  }
  ```
* **Success Response:** `200 OK`
* **Error Response:** `404 Not Found`

### 5. Partially update a book
* **Method:** `PATCH`
* **URL:** `BASE_URL/api/books/:id`
* **Body (JSON):** *(Only send the fields you want to change)*
  ```json
  {
      "title": "New Updated Title"
  }
  ```
* **Success Response:** `200 OK`
* **Error Response:** `404 Not Found`

### 6. Delete a book
* **Method:** `DELETE`
* **URL:** `BASE_URL/api/books/:id`
* **Success Response:** `204 No Content`
* **Error Response:** `404 Not Found`