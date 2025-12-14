const API_URL = "http://localhost:8081/notes";

export async function getNotes() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addNote(note) {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
}
