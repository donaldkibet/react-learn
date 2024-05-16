import React, { useState } from "react";
import "./StudentForm.css";

const faculties = ["Medicine", "Arts", "Education", "Engineering"];

function StudentForm() {
  const [student, setStudent] = useState({
    regNo: "",
    name: "",
    faculty: "",
    email: "",
  });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleOnRegister = () => {
    // alert(JSON.stringify(student));
    console.log(student);
  };

  return (
    <div className="studentFormContainer">
      <h3>Student Registration Form</h3>
      <div className="formControl">
        <label>Reg No</label>
        <input
          value={student.regNo}
          onChange={handleOnChange}
          type="text"
          name="regNo"
        />
      </div>
      <div className="formControl">
        <label>Name</label>
        <input
          value={student.name}
          onChange={handleOnChange}
          type="text"
          name="name"
        />
      </div>
      <div className="formControl">
        <label>Faculty</label>
        <select
          value={student.faculty}
          onChange={handleOnChange}
          name="faculty"
        >
          <option value="">Select faculty</option>
          {faculties.map((faculty) => (
            <option key={faculty} value={faculty}>
              {faculty}
            </option>
          ))}
        </select>
      </div>
      <div className="formControl">
        <label>Email</label>
        <input
          value={student.email}
          onChange={handleOnChange}
          type="email"
          name="email"
        />
      </div>
      <div>
        <button className="registerButton" onClick={handleOnRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default StudentForm;
