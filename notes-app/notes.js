import fs from 'fs'
import chalk from 'chalk'

export const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

export const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    console.log('first')
    // fs.writeFileSync('notes.json', dataJSON)
}
