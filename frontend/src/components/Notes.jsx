import { useEffect, useState } from "react";
import { getNotes, addNote } from "../api/api";

/*
  Notes Component
  ----------------
  This component handles:
  1. Fetching notes from backend
  2. Displaying notes
  3. Adding new notes
*/

function Notes() {

  // State to store all notes coming from backend
  const [notes, setNotes] = useState([]);

  // State to store input values for a new note
  const [note, setNote] = useState({
    title: "",
    content: "",
  });


  useEffect(() => {
    fetchNotes();
  }, []);

  // Function to fetch notes from backend
  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data); // store notes in state
  };

  /*
    Called when user clicks "Add Note"
    1. Sends note to backend
    2. Fetches updated list
    3. Clears input fields
  */
  const handleAddNote = async () => {
    if (!note.title || !note.content) return;

    await addNote(note);
    await fetchNotes();

    // Clear input fields
    setNote({ title: "", content: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Notes</h2>

      {/* Input field for title */}
      <input
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={(e) =>
          setNote({ ...note, title: e.target.value })
        }
      />

      <br /><br />

      {/* Input field for content */}
      <textarea
        placeholder="Content"
        value={note.content}
        onChange={(e) =>
          setNote({ ...note, content: e.target.value })
        }
      />

      <br /><br />

      {/* Button to add note */}
      <button onClick={handleAddNote}>
        Add Note
      </button>

      <hr />

      {/* Display notes */}
      {notes.length === 0 ? (
        <p>No notes available</p>
      ) : (
        notes.map((n) => (
          <div key={n.id} style={{ marginBottom: "15px" }}>
            <h4>{n.title}</h4>
            <p>{n.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Notes;
