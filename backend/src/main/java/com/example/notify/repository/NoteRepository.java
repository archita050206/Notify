// Creating the repository (Database layer)
package com.example.notify.repository;

// importing this interface provided by spring data mongoDB which already has the built in method of mongo like findById()
import org.springframework.data.mongodb.repository.MongoRepository;
// importing the note model class
import com.example.notify.model.Note;

// interface so we donot implement anything, spring automatically creates the implementation at runtime
public interface NoteRepository extends MongoRepository<Note,String> {
    
}
