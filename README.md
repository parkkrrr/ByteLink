# ByteLink - URL Shortener

ByteLink is a simple and efficient URL shortener application built with Node.js, Express.js, MongoDB, EJS, and Bootstrap. It allows users to shorten long URLs, track clicks on the shortened links, and manage URL redirection.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Shorten long URLs into concise, easy-to-share links.
- Track the number of clicks for each shortened URL.
- User-friendly interface with Bootstrap styling.
- Simple and clean codebase for easy customization.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/parkkrrr/ByteLink.git
   cd ByteLink
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up MongoDB:**

   Ensure you have MongoDB installed and running. You can use a local MongoDB instance or connect to a cloud database.

4. **Run the application:**

   ```bash
   npm start
   ```

   The application will start on `http://localhost:3000`.

## Usage

1. Visit `http://localhost:3000` in your web browser.
2. Enter the URL you want to shorten.
3. Click the "Shrink" button to generate the short link.
4. The homepage will display a table with the original URL, the shortened link, and the number of clicks.
5. Click on the shortened link to be redirected to the original URL and increase the click count.

## Technologies Used

- **Node.js**: Backend server and application logic.
- **Express.js**: Web framework for Node.js, used for routing and middleware.
- **MongoDB**: NoSQL database for storing URLs and click counts.
- **Mongoose**: ODM for MongoDB, used for data modeling.
- **EJS**: Templating engine for rendering dynamic HTML pages.
- **Bootstrap**: CSS framework for responsive and mobile-first web design.


---

Feel free to modify this template to fit the specifics of your project!
