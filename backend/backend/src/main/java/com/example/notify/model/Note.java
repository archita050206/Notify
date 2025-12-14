package com.example.notify.model;

// Creating Note Model (Data Layer)
// The note class represents a single note, a sincgle document on mongoDB

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "notes") //--> @Document tells the spring data mongo that this class represents a mongodb collection 
public class Note {
     @Id //--> @Id marks the primary key field in MongoDB
    private String id;
    private String title;
    private String content;

    // get the id
    public String getId() {
        return id;
    }
    // set/update the id
    public void setId(String id) {
        this.id = id;
    }
    //get the title
    public String getTitle() {
        return title;
    }
    // update/set the title
    public void setTitle(String title) {
        this.title = title;
    }
    //get the content
    public String getContent() {
        return content;
    }
    // set/update the title
    public void setContent(String content) {
        this.content = content;
    }
}
