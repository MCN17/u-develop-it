const express = require("express");
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);









// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });









// Used this GET route to test the connection to the express.js. Removed it after that was connection was confirmed
// app.get("/", (req, res) => {
//     res.json({
//         message: "Hello World"
//     });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});




// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});