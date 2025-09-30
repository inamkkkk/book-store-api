# Book Store API

A Node.js API to manage a collection of books with author and genre information.

## Features

*   Add a new book
*   Get all books
*   Get a specific book by ID
*   Update an existing book
*   Delete a book
*   Add a new author
*   Get all authors
*   Get a specific author by ID
*   Add a new genre
*   Get all genres
*   Authentication (login and register) using JWT

## Technologies

*   Node.js
*   Express.js
*   MongoDB with Mongoose
*   JSON Web Tokens (JWT)
*   bcrypt
*   dotenv

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Configure environment variables:

    Create a `.env` file in the root directory and add the following variables:

    
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/bookstore
    JWT_SECRET=your_secret_key
    

4.  Start the server:

    
    npm start
    

## API Endpoints

### Books

*   `GET /api/books`: Get all books
*   `GET /api/books/:id`: Get a specific book by ID
*   `POST /api/books`: Add a new book
*   `PUT /api/books/:id`: Update an existing book
*   `DELETE /api/books/:id`: Delete a book

### Authors

*   `GET /api/authors`: Get all authors
*   `GET /api/authors/:id`: Get a specific author by ID
*   `POST /api/authors`: Add a new author

### Genres

*   `GET /api/genres`: Get all genres
*   `POST /api/genres`: Add a new genre

### Authentication

*   `POST /api/auth/register`: Register a new user
*   `POST /api/auth/login`: Login

## Contributing

Feel free to contribute to the project by submitting pull requests.
