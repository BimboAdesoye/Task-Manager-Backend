const TASKS = require("../model/tasksModel");

const create_tasks = async (req, res) => {
  const Tasks = new TASKS({
    title: req.body.title,
    description: req.body.description,
    tag: req.body.tag,
    author: req.body.author,
  });
  try {
    const savedTasks = await Tasks.save();
    res.status(200).json(savedTasks);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const find_tasks = async (req, res) => {
  try {
    const allTasks = await TASKS.find();
    res.status(200).json(allTasks);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const delete_tasks = async (req, res) => {
  try {
    const deleteTask = await TASKS.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(deleteTask);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const specific_task = async (req, res) => {
  const id = req.params.id;
  try {
    const specificTask = await TASKS.findById(id);
    res.status(200).json(specificTask);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const update_task = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const updateTask = await TASKS.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json(updateTask);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = {
  create_tasks,
  find_tasks,
  delete_tasks,
  specific_task,
  update_task,
};
