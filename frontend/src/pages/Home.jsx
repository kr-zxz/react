import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";
import CreatePost from './Createpost';
import Navbar  from "./Navbar";

function Home() {
    const [notes, setNotes] = useState([]);
   
    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                // Sort notes based on grade
                const sortedNotes = data.sort((a, b) => a.grade.localeCompare(b.grade));
                setNotes(sortedNotes);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    return (
        <div style={{ backgroundImage: 'url("https://images.unsplash.com/20/cambridge.JPG?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHx8fDE3MTM1ODQzOTl8MA&ixlib=rb-4.0.3")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
                <h2 style={{ marginBottom: '20px', color: '#fff' }}>STUDENT INFORMATION</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    {notes.map((note) => (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '0 0 auto', margin: '10px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '300px', backgroundColor: '#f9f9f9' }} key={note.id}>
                            <Note note={note} onDelete={deleteNote} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
