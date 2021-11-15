const { findById } = require("../models/Notes")
const Notes = require("../models/Notes")

module.exports.fetchAllNotes = async (req, res) => {
    const { id } = req.user
    const notes = await Notes.find({ user: id })
    res.json(notes)
}

module.exports.addNote = async (req, res) => {
    const { id } = req.user
    const { title, description, tag } = req.body
    const notes = new Notes({
        title, description, tag, user: id
    })
    const resp = await notes.save()
    res.json(resp)
}

module.exports.updateNote = async (req, res) => {
    const { id } = req.params
    const  userId  = req.user.id
    const note = await Notes.findById(id)
    if (!note) {
        return res.status(404).json({ message: "Note not found !" })
    }
    if (note.user.toString() !== userId) {
        return res.status(401).json({ message: "Unauthorized access" })
    }
    const updatedNote = await Notes.findByIdAndUpdate(id, { ...req.body }, { new: true, runValidators: true })
    res.json(updatedNote)
}

module.exports.deleteNote = async (req, res) => {
    const { id } = req.params
    const  userId  = req.user.id
    const note = await Notes.findById(id)
    if (!note) {
        return res.status(404).json({ message: "Note not found !" })
    }
    if (note.user.toString() !== userId) {
        return res.status(401).json({ message: "Unauthorized access" })
    }
    const deletedNote = await Notes.findByIdAndDelete(id)
    res.json({message: `${deletedNote.title} deleted successfully`, note: deletedNote})
}