# bc34-3_ExpressReservationAppExercise

- [Overview](#overview)
  - [Features](#features)
  - [Future Improvements](#future-improvements)
  - [Filestructure](#file-structure)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Setup Instructions](#setup-instructions)
- [Routes](#routes)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [License](#license)

---
## Overview
This is a simple Express.js application that allows users to make and view reservations. It includes routes for viewing the home page, making reservations, and viewing existing reservations.

### Features
- **Home Page**: Displays a welcome message and a link to make a reservation.
- **Make a Reservation**: Allows users to submit their name and email to make a reservation.
- **View Reservations**: Displays a list of all reservations made by users. 

### Future Improvements
- Implement Getters and Setters for better data encapsulation.
- Add login functionality to restrict access to certain routes.
- Implement a new field for middle name in the reservation form.
- Add a feature to update and delete reservations.
- Use the Moment.js library to display the current date and time in a user-friendly format.
- Write unit tests using supertest for the application to ensure reliability and correctness.
- Add a full name search feature to allow users to search for reservations by their full name.

### File Structure
```
├── server.js                   # Main server file
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Dependency lock file
├── data.sql                    # SQL script to set up the database
├── templates/                  # Directory for HTML templates
│   ├── base.html               # Base HTML template
│   ├── customer_list.html      # List of Customers template
│   ├── customer_edit_form.html # Customer form template
│   ├── customer_new_form.html  # New Customer form template 
│   |── customer_detail.html    # Customer detail template
│   └── error.html              # Display Error template
├── models/                     # Directory for data models
│   ├── customer.js             # Customer model
│   └── reservation.js          # Reservation model
├── routes.js                   # Main routing file
├── db.js                      # Database connection file
├── app.js                     # Application setup file
└── README.md                  # Project documentation
```

## Built With
- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [PostgreSQL](https://www.postgresql.org/) - Relational database management system
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Templating engine for rendering HTML
- [Moment.js](https://momentjs.com/) - Library for parsing, validating, manipulating

## Getting Started
To get a local copy up and running follow these simple steps.

### Setup Instructions
1. Clone the repository:
2. Install the required dependencies:
   ```bash
   npm install
    ```
3. Set up the PostgreSQL database:
   - Create a database named `lunchly_db` by running 
    '''
    psql < data.sql
    ```
4. Start the server:
    ```bash
    node --watch server.js
    ```
5. Open your web browser and navigate to `http://localhost:3000` to view the application.


## Routes
- See the routes.js file for the complete list of routes and their functionalities.

---

## Author
- Github - [TechEdDan2](https://github.com/TechEdDan2)
- Frontend Mentor - [@TechEdDan2](https://www.frontendmentor.io/profile/TechEdDan2)

## Acknowledgments
The YouTubers and other educational resources I have been learning from include: Coder Coder (Jessica Chan), BringYourOwnLaptop (Daniel Walter Scott), Kevin Powell, vairous Udemy courses, Geeks for Geeks, and Stony Brook University's Software Engineering Bootcamp (Colt Steele) 

## License
This project is licensed under the ISC license