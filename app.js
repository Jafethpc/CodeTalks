var mysql = require("mysql"); // Importing the mysql module

var connection = mysql.createConnection({
  // Creates a connection with your mySQL database and your credentials
  // *NOTE*: The connection only lasts until you close it or connection closed by mySQL
  host: "localhost",
  user: "your username",
  password: "your password",
  database: "your database name",
});

connection.connect(function (error) {
  // We call the connection.connect to allows us to connect with our MySQL database server
  if (!!error) {
    // If you get an error then it will log the error to the console
    console.log(error);
  } else {
    // If you dont get an error, it will log to the console that its connected
    console.log("Connected!:)");
  }
});

module.exports = connection; // Here we are exporting connection as a module that will allow you to import it to other files
