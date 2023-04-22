const express = require("express")
const router = express.Router()
const {
    todos,
    todo,
    addTodo,
    updateTodo,
    deleteTodo
} = require("../controller/todoController")


router.get("/",todos)

router.get("/:id", todo)

router.post("/", addTodo)

router.delete("/:id", deleteTodo)

router.patch("/:id", updateTodo)

module.exports = router