import React, { useState } from "react";

const faculties = ["Medicine", "Arts", "Education", "Engineering"];

function StudentForm() {
  const [student, setStudent] = useState({
    regNo: "",
    name: "",
    faculty: "",
    email: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleOnRegister = () => {
    alert(JSON.stringify(student));
  };

  return (
    <div>
      <h3>Student Registration Form</h3>
      <div>
        <label>Reg No</label>
        <input
          value={student.regNo}
          onChange={handleOnChange}
          type="text"
          name="regNo"
        />
      </div>
      <div>
        <label>Name</label>
        <input
          value={student.name}
          onChange={handleOnChange}
          type="text"
          name="name"
        />
      </div>
      <div>
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
      <div>
        <label>Email</label>
        <input
          value={student.email}
          onChange={handleOnChange}
          type="email"
          name="email"
        />
      </div>
      <div>
        <button onClick={handleOnRegister}>Register</button>
      </div>
    </div>
  );
}

export default StudentForm;
