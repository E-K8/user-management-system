const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
// $1 is our parameter, it's a variable name, can be whatever
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
// using an alias s here
const addStudent =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";
// we are updating the students table where we are setting the name to the first variable we pass in where the id is the second variable that we pass in

export default {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  removeStudent,
  updateStudent,
};
