import express from "express";
import controller from "./controller.js";
const router = express.Router();

// router.get("/", (req,res) => {
// res.send("using api route");
// });

// instead of callback function above ^^^ we will use getStudents function ↓ (alt 25 for the down arrow btw)
router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentById);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.removeStudent);

export default router;
