const Todo = require("../models/todoModel")

async function todos(req, res) {
    try {
        const todos = await Todo.find({})
        if (!todos) {
            res.status(404).json({ msg: "No todos exists" })
        }
        res.status(200).json(todos)
    }
    catch (error) {
        res.status(404).json({ msg: error })
    }
}

async function todo(req, res) {
    const id = req.params.id
    try {
        const todo = await Todo.findById(id)
        if (!todo) {
            res.status(404).json({ msg: "No todo exists" })
        }
        res.status(200).json(todo)
    }
    catch (error) {
        res.status(404).json({ msg: error })
    }

}

async function addTodo(req, res) {
    try {
        const newTodo = await Todo.create({ ...req.body })
        if (!newTodo) {
            res.status(404).json({ msg: "Could not add todo item" })
        }
        res.status(200).json(newTodo)
    }
    catch (error) {
        res.status(404).json({ msg: error })
    }
}

async function deleteTodo(req, res) {
    const id = req.params.id
    try {
        const deleteTodo = await Todo.findByIdAndDelete({ _id: id })
        if (!deleteTodo) {
            res.status(404).json({ msg: "No todo item deleted" })
        }
        res.status(200).json(deleteTodo)
    }
    catch (error) {
        res.status(404).json({ msg: error })
    }
}

async function updateTodo (req, res) {
    const id = req.params.id
    try {
        const updateTodo = await Todo.findByIdAndUpdate(id, { ...req.body }, {new:true})
        if (!updateTodo) {
            res.status(404).json({ msg: "No todo item updated" })
        }
        // console.log(updateTodo)
        res.status(200).json(updateTodo)
    }
    catch (error) {
        res.status(404).json({ msg: error })
    }
}

module.exports = {
    todos,
    todo,
    addTodo,
    updateTodo,
    deleteTodo
}