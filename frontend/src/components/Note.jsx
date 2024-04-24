import React from "react";
// import "../styles/Note.css"

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="note-container">
            <img src={note.image} alt={note.file} style ={{width:'200px'}} />
            <p className="note-title">FIRST NAME : {note.first_name}</p>
            <p className="note-title">LAST NAME : {note.last_name}</p>
            <p className="note-title">DEPARTMENT : {note.department}</p>
            <p className="note-title">GRADE :{note.grade}</p>
            <p className="note-title">CGPA :{note.cgpa}</p>
            <p className="note-title">SSLC PERCENTAGE:{note.sslc_percentage}</p>
            <p className="note-title">PLUSTWO PERCENTAGE :{note.plus_two_percentage}</p>
            <p className="note-title">PHONENUMBER :{note.phone_number}</p>
            <p className="note-title">ADDRESS :{note.address}</p>

            {/* <a href={note.file}>download</a> */}
           
            
          

            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>

            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Update
            </button>
        </div>
    );

//     return(
//         <table className="note-table">
//     <thead>
//         <tr>
//             <th>Title</th>
//             <th>Download</th>
//             <th>Date</th>
//             <th>ID</th>
//             <th>Action</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>{note.title}</td>
//             <td><a href={note.file}>Download</a></td>
//             <td>{formattedDate}</td>
//             <td>{note.id}</td>
//             <td><button onClick={() => onDelete(note.id)}>Delete</button></td>
//         </tr>
//     </tbody>
// </table>

//     );
}

export default Note