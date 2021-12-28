const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
// $1 is our parameter, it's a variable name
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";

export default {
  getStudents,
  getStudentById,
  checkEmailExists,
};
