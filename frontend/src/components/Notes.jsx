import { useEffect, useState } from "react";
import { getNotes, addNote } from "../services/api";

/*
  Notes Component
  ----------------
  Handles:
  1. Fetching notes from backend
  2. Displaying notes
  3. Adding new notes
  4. Deleting notes
*/

function Notes() {
  const [notes, setNotes] = useState([]); // stores all notes
  const [note, setNote] = useState({ title: "", content: "" }); // input fields

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  const handleAddNote = async () => {
    if (!note.title || !note.content) return;

    await addNote(note);
    await fetchNotes();
    setNote({ title: "", content: "" }); // clear inputs
  };

  // DELETE functionality
  const handleDeleteNote = async (id) => {
    await fetch(`http://localhost:8081/notes/${id}`, { method: "DELETE" });
    await fetchNotes();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">My Notes</h2>

      {/* Input fields */}
      <input
        type="text"
        placeholder="Title"
        className="w-full border border-gray-300 rounded p-2 mb-2"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        className="w-full border border-gray-300 rounded p-2 mb-2"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
        onClick={handleAddNote}
      >
        Add Note
      </button>

      <hr className="my-4" />

      {/* Display notes */}
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes available</p>
      ) : (
        notes.map((n) => (
          <div
            key={n.id}
            className="border border-gray-300 rounded p-3 mb-3 flex justify-between items-start"
          >
            <div>
              <h4 className="font-semibold">{n.title}</h4>
              <p className="text-gray-700">{n.content}</p>
            </div>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDeleteNote(n.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Notes;
