function print(value) {
    console.log(value)
    return value
}

function q(selector) {
    return document.querySelector(selector)

    function getAllDnotes() {
        return document.querySelector('form')
    }

    function getAllDnotes() {
        return fetch('http://localhost:3000/dnotes'), {
                method: 'GET'
            }
            .then(response => response.json())
    }

    function createDnotesHTML(dnotes) {
        let dnotesStr = '<ul id="dnotes-list">'
        for (const dnote of dnotes) {
            dnotesStr += createDnotesHTML(dnote)
        }
        dnotesStr += '</ul>'
        return dnotesStr
    }

    function createDnoteHTML(dnote) {
        return `<li data-dnote-id="${dnote.id}">${dnote.dnote} <button class="delete">Delete</button></li>`
    }

    function postNewDnote(dnoteText) {
        return fetch('http://localhost:3000/todos/'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dnote: dnoteText,
                    done: false,
                    created: moment().format()
                })
            }
            .then(response => response.json())
    }

    function renderDnotesList(dnotes) {
        const dnotesHTML = createDnotesHTML(dnotes)
        const dnotesSection = documnet.querySelector('dnotes')
        dnotesSection.innerHTML = dnotesHTML
    }

    function renderNewDnote(dnote) {
        const dnoteHTML = createDnoteHTML(dnote)
        const dnoteList = document.querySelector('#dnote-list')
        dnoteList.insertAdjacentHTML('beforeend', todoHTML)
    }

    getAllDnotes().then(renderDnotesList)

    q('#new-dnote-form').addEventListener('submit', event => {
        event.preventDefault()
        const dnoteTextField = q('#dnote-text')
        const dnoteText = todoTextField.value
        dnoteTextField.value = ''
        postNewDnote(dnoteText).then(renderNewDnote)
    })

    q('#dnotes').addEventListener('click', event => {
        if (event.target.matches('delete')) {
            print('delete ' + event.target.parentElement.dataset.dnoteId)
        }
    })







    //Help from Brandon. Started assignment again above after catchup session with Amy. 

    // let editTextBox = q("#note-text")
    // let editInput = q("edit-text")
    // var newInput = document.createElement("input")
    // var newForm = document.createElement("form")

    // function q(selector) {
    //     return document.querySelector(selector)
    // }

    // function getAllNotes() {
    //     return fetch("http://localhost:3000/notes"), {
    //             method: "GET"
    //         }
    //         .then(response => response.json())
    // }

    // function createNotesHTML(notes) {
    //     let notesStr = '<ul id="notes-list">'
    //     for (const note of notes) {
    //         notesStr += createNotesHTML(note)
    //     }
    //     notesStr += '<ul>'
    //     return notesStr
    // }

    // function editNoteHTML(note) {
    //     let notesStr = '<ul id="notes-list">'
    //     notesStr += editNoteHTML(note)
    //     notesStr += '</ul>'
    //     return notesStr
    // }

    // function createNoteHTML(note) {
    //     return `<li class="title" data-node-id="${note.id}">${note.title}</li>   
    //     <li data-note-id="${note.id}">${note.note} <button class="edit">Edit</button><button class="delete">Delete</button></li>`
    // }

    // function editNoteHTML(note) {
    //     return `<li data-note-id="${note.id}">${note.note}</li>`
    // }

    // function renderNotesList(notes) {
    //     const notesHTML = createNotesHTML(notes)
    //     const notesSection = q('#notes')
    //     notesSection.innerHTML = notesHTML
    // }

    // function renderEditNote(note) {
    //     const noteHTML = editNoteHTML(note)
    //     const notesSection = q(event.target.parentElement)
    //     notesSection.innerHTML = noteHTML
    // }

    // q("#new-note-form").addEventListener('submit', event => {
    //     event.preventDefault();
    //     const titleTextField = q('#note-title').vlaue
    //     const noteTextField = q('#note-text').value
    //     fetch("http://localhost:3000/notes/"), {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             note: noteTextField,
    //             title: titleTextField,
    //             done: false,
    //             create: moment().format()
    //         })
    //     }

    //     function postNewNote(titleText, noteText) {
    //         return fetch('http://localhost:3000/notes/', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content_Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     note: noteText,
    //                     title: titleText,
    //                     note: noteText,
    //                     done: false,
    //                     created: moment().format()
    //                 })
    //             })
    //             .then(response => response.json())
    //     }

    //     function deleteThisNote(noteId) {
    //         return fetch('http://localhost:3000/notes/' = noteId, {
    //                 method: 'DELETE',
    //                 header: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     note: noteId,
    //                     done: false,
    //                     created: moment().format()
    //                 })
    //             })
    //             .then(response => response.json())
    //     }

    //     function deleteNote() {
    //         q('#notes').addEventListener('click', event => {
    //             if (event.target.matches('.delete')) {
    //                 event.target.parentElement.classList.add("noteToDelete")
    //                 let noteId = (event.target.parentElement.dataset.noteId)
    //                 deleteThisNote(noteId)
    //             }
    //         })
    //     }

    //     function editThisNote(noteId, editednote) {
    //         return fetch('http://localhost:3000/notes/' + noteId, {
    //                 method: 'PATCH',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify9 {
    //                     note: editNote.value,
    //                     done: false,
    //                     edited: moment().format()
    //                 })
    //         })
    //     .then(response => response.json())
    // }

    // getAllNotes().then(createNotesHTML) getAllNotes().then(renderNotesList) deleteNote() editNote()

    // console.log("Everything is functional")

    //})