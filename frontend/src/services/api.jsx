const API_URL = "http://localhost:8081/notes";

// Fetch all notes
export async function getNotes() {
  const res = await fetch(API_URL);
  return res.json();
}

// Add a new note
export async function addNote(note) {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
}

// Update an existing note
export async function updateNote(id, note) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
}

// Delete a note
export async function deleteNote(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
