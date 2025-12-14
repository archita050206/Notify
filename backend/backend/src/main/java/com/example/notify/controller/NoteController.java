// Controller layer--> Rest API layer ( connects frontend with backend)
package com.example.notify.controller;

import java.util.List; // importing List to store and return multiple notes

import org.springframework.beans.factory.annotation.Autowired; // For dependency injection
import org.springframework.web.bind.annotation.*; // For REST API annotations

import com.example.notify.model.Note; // importing the Note model
import com.example.notify.repository.NoteRepository; // importing the repository

@RestController //--> automatically converts returned objects into JSON
@RequestMapping("/api/notes") //--> base url for all APIs in this controller (ex: get /api/notes)
@CrossOrigin(origins = "http://localhost:5173")//--> allows requests from forontend (react running on port 5173)

public class NoteController {
    @Autowired 
    private NoteRepository noteRepository;//--> injects noteRepository for us to use built in functions of mongo
    
      public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }
    
    /*
     * POST API
     * URL: /api/notes
     * Description: Create a new note
     * @RequestBody tells Spring to map JSON from the request into Note object
     * Example request body:
     * {
     *   "title": "My First Note",
     *   "content": "This is the note content"
     * }
     */

    @PostMapping    
    public Note createNote(@RequestBody Note note) {
        // Saves the note into MongoDB
        return noteRepository.save(note);
    }
    
    /*
     * GET API
     * URL: /api/notes
     * Description: Fetch all notes from MongoDB
     * Returns a list of Note objects as JSON
     * Example response:
     * [
     *   {
     *     "id": "6521f...",
     *     "title": "My First Note",
     *     "content": "This is the note content"
     *   }
     * ]
     */

    @GetMapping
    public List<Note> getAllNotes() {
        return noteRepository.findAll(); // Spring automatically fetches all notes
    }

     /*
     * DELETE API
     * URL: /api/notes/{id}
     * Description: Delete a note by its id
     * @PathVariable tells Spring to take the id from the URL
     * Example URL: /api/notes/6521f9abc123
     */ 

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable String id) {
        noteRepository.deleteById(id); // Deletes note from MongoDB
    }

}
