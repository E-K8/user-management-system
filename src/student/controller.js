// business logic related to each route

import pool from "../../db.js";
import queries from "./queries.js";

const getStudents = (req, res) => {
  console.log("I'm on it, getting students");
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    // ^^^ we have our query, the id we want to pass into the query and the callback function
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  // check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists.");
    }
  });
};

export default {
  getStudents,
  getStudentById,
  addStudent,
};
