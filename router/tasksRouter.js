const express = require("express");
const router = express.Router();
const {
  create_tasks,
  find_tasks,
  delete_tasks,
  specific_task,
  update_task,
} = require("../controller/tasksController");

router.post("/create", create_tasks);

router.get("/allTasks", find_tasks);

router.delete("/delete/:id", delete_tasks);

router.get("/specific/:id", specific_task);

router.patch("/update/:id", update_task);

module.exports = router;
