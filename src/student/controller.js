// business logic related to each route

const getStudents = (req, res) => {
    console.log("getting students");
};

export function getStudents();
// FIXME ^^^ terminal doesn't like the ending semicolon

// tutorial says 
// module.exports = {
//     getStudents;
// };