import { useEffect, useState } from "react";
import { getNotes, addNote, updateNote, deleteNote } from "../services/api";
import bgImg from "../assets/background4.jpg";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", content: "" });
  const [editingId, setEditingId] = useState(null); // track which note is being edited

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  const handleAddOrUpdateNote = async () => {
    if (!note.title || !note.content) return;

    if (editingId) {
      // Update existing note
      await updateNote(editingId, note);
      setEditingId(null);
    } else {
      // Add new note
      await addNote(note);
    }

    await fetchNotes();
    setNote({ title: "", content: "" });
  };

  const handleEditNote = (n) => {
    setNote({ title: n.title, content: n.content });
    setEditingId(n.id);
  };

  const handleDeleteNote = async (id) => {
    await deleteNote(id);
    await fetchNotes();
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="max-w-5xl mx-auto p-6 pt-10">
        {/* Form */}
        <div className="rounded-xl shadow-lg p-6 mb-8 bg-gray-200/80">
          <h2 className="text-4xl font-bold mb-7 bg-clip-text text-transparent bg-gradient-to-br from-indigo-700 to-pink-500 text-outline1 text-shadow-2">
            {editingId ? "Edit Note" : "Add a New Note"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Title"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-gray-500 focus:outline-none placeholder-gray-900"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
            <textarea
              placeholder="Content"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-gray-500 focus:outline-none md:col-span-2 placeholder-gray-900"
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
            />
          </div>
          <button
            className="mt-7 text-gray-100 bg-gradient-to-br from-indigo-700 to-pink-500 px-6 py-2 rounded-lg shadow-xl hover:shadow-lg hover:scale-105 transition-transform"
            onClick={handleAddOrUpdateNote}
          >
            {editingId ? "Update Note" : "Add Note"}
          </button>
        </div>

        {/* Notes Grid */}
        {notes.length === 0 ? (
          <p className="text-gray-100 text-center">No notes available</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((n) => (
              <div
                key={n.id}
                className="bg-gray-200/80 rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow relative"
              >
                <h4 className="font-semibold text-lg mb-2 text-gray-900">{n.title}</h4>
                <p className="text-black mb-4">{n.content}</p>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                    onClick={() => handleEditNote(n)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800 font-semibold"
                    onClick={() => handleDeleteNote(n.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notes;