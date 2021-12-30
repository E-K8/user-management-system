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
  // using destructuring ^^^
  // when we send our request, we send json along the way (and we get json back)
  // check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists.");
    }
    // if new email, add student to the database ↓
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("Student created successfully✅");
        console.log("student created");
      }
    );
  });
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    // if no results found^^^
    if (noStudentFound) {
      res.send("Can't delete, no records found for this student.");
    }

    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student removed successfully.");
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  // we are sending json with just a name↓↓↓
  const { name } = req.body;

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Can't update, no records found for this student.");
    }

    pool.query(queries.updateStudent, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student updated successfully");
    });
  });
};

export default {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};
