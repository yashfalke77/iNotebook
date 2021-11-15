const express = require("express");
const {fetchAllNotes, addNote, updateNote, deleteNote} = require("../controllers/notes")
const {fetchUser, validateNewNote} = require("../middlewares")
const catchAsync = require("../utils/catchAsync")

const router = express.Router()

// Get all the notes using : GET /api/notes/
router.get('/', fetchUser, catchAsync(fetchAllNotes))

// Get all the notes using : POST /api/notes/
router.post('/', fetchUser, validateNewNote, catchAsync(addNote))

// Update the notes using: PUT /api/notes
router.put('/:id', fetchUser, validateNewNote, catchAsync(updateNote))

// Delete the notes using: PUT /api/notes
router.delete('/:id', fetchUser, catchAsync(deleteNote))

module.exports = router