import { useState } from "react";
import api from "../api";
import getNotes from './Home';

function CreatePost() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [department, setDepartment] = useState("");
    const [grade, setGrade] = useState("");
    const [cgpa, setCGPA] = useState("");
    const [sslcPercentage, setSSLCPercentage] = useState("");
    const [plusTwoPercentage, setPlusTwoPercentage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [uploadFile, setUploadFile] = useState(null); 

    const handleFileChange = (event) => {
        setUploadFile(event.target.files[0]);
    };

    const createNote = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("department", department);
        formData.append("grade", grade);
        formData.append("cgpa", cgpa);
        formData.append("sslc_percentage", sslcPercentage);
        formData.append("plus_two_percentage", plusTwoPercentage);
        formData.append("phone_number", phoneNumber);
        formData.append("address", address);
        formData.append("image", uploadFile); 

        try {
            const res = await api.post("/api/notes/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.status === 201) {
                alert("done");
                getNotes();
            } else {
                alert("Failed to create note.");
            }
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "5px" }}>
            <h2 style={{ color: "#333", marginBottom: "20px" }}>ENTER STUDENT DETAILS</h2>
            <form onSubmit={createNote} encType="multipart/form-data">
                <label htmlFor="firstName">First Name</label><br />
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    style={{ marginBottom: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                /><br />

                <label htmlFor="lastName">Last Name:</label><br />
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    style={{ marginBottom: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                />

                <label htmlFor="department">Department</label>
                <input
                    type="text"
                    id="department"
                    name="department"
                    required
                    onChange={(e) => setDepartment(e.target.value)}
                    value={department}
                    style={{ marginBottom: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                />

                <label htmlFor="grade">Grade</label>
                <input
                    type="text"
                    id="grade"
                    name="grade"
                    required
                    onChange={(e) => setGrade(e.target.value)}
                    value={grade}
                    style={{ marginBottom: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                />

                <label htmlFor="cgpa">CGPA</label>
                <input
                    type="text"
                    id="cgpa"
                    name="cgpa"
                    required
                    onChange={(e) => setCGPA(e.target.value)}
                    value={cgpa}
                    style={{ marginBottom: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                />

                <label htmlFor="sslcPercentage">SSLC Percentage</label>
                <input
                    type="text"
                    id="sslcPercentage"
                    name="sslcPercentage"
                    required
                    onChange={(e) => setSSLCPercentage(e.target.value)}
                    value={sslcPercentage}
                    style={{ marginBottom: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                />

                <label htmlFor="plusTwoPercentage">Plus Two Percentage</label>
                <input
                    type="text"
                    id="plusTwoPercentage"
                    name="plusTwoPercentage"
                    required
                    onChange={(e) => setPlusTwoPercentage(e.target.value)}
                    value={plusTwoPercentage}
                    style={{ marginBottom: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    style={{ marginBottom: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                />

                <label htmlFor="address">Address</label>
                <textarea
                    id="address"
                    name="address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    style={{ marginBottom: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                />

                <label htmlFor="file">Select an Image:</label><br />
                <input
                    type="file"
                    id="file"
                    name="file"
                    required
                    onChange={handleFileChange}
                    style={{ marginBottom: "10px" }}
                /><br />
                <input type="submit" value="Submit" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }} />
            </form>
        </div>
    );
}

export default CreatePost;
