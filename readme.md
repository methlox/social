# Frontend

![alt text](image.png)
![preview](https://i.imgur.com/DQlHtCB.png)


## Installation

Before you try to run this project locally, you must have both the React & NestJS project, as well as a SQL database. I use MySQL, but you can switch to another database like PostgreSQL very easily.

1. Clone this repository and install all dependencies.
2. cd app
3. Run the project using the `start:dev` script using either `npm`, `yarn`, or whatever package manager you use.
4. There is no landing page, the main routes are:
   - `/register` route to create an account
   - `/login` to login to the app
   - `/conversations` is where all the magic happens

# Backend

## Installation & Setup

### Pre-requisites

- Node.js v16
- MySQL Server (or any SQL database that is supported by TypeORM).

### Setting up the Backend

1. Clone the repository.
2. cd packages
3. Run `yarn install` to install dependencies.
4. Create a `.env.development` file in the root directory and paste the following:

   ```
   PORT=
   MYSQL_DB_HOST=
   MYSQL_DB_USERNAME=
   MYSQL_DB_PASSWORD=
   MYSQL_DB_PORT=
   MYSQL_DB_NAME=
   COOKIE_SECRET=
   ```

   - **`PORT`** The port your server will run on
   - **`MYSQL_DB_HOST`** The hostname for your MySQL database server
   - **`MYSQL_DB_USERNAME`** The username for your MySQL database
   - **`MYSQL_DB_PASSWORD`** The password for your MySQL user account
   - **`MYSQL_DB_PORT`** The port your MySQL server is running on (default 3306)
   - **`MYSQL_DB_NAME`** The name of your database (be sure to create it first otherwise an error will be thrown).
   - **`COOKIE_SECRET`** Can be any string that can be used to encrypt & decrypt your cookie.

4. Run `yarn start:dev` or `npm run start:dev` depending on which package manager you use to start the project in development mode.