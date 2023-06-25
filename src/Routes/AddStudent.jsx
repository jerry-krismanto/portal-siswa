// TODO: answer here
import React from "react";
import "../styles/AddStudent.css";
import NavBar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Input, Textarea, Select } from "@chakra-ui/react";
import Footer from "../components/Footer";

const AddStudent = () => {
  // TODO: answer here
  const [student, setStudent] = useState({
    programStudy: "Ekonomi",
    gender: "Male",
  });
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const studentWithFaculty = {
      ...student,
      faculty: getFaculty(student.programStudy),
    };
    try {
      const response = await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentWithFaculty),
      });
      const data = await response.json();
      console.log(data);
      navigate("/student");
    } catch (error) {
      console.log(error);
    }
  }

  function getFaculty(programStudy) {
    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        return "Fakultas Ekonomi";
      case "Administarasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        return "Fakultas Ilmu Sosial dan Ilmu Politik";
      case "Teknik Sipil":
      case "Arsitektur":
        return "Fakultas Teknik";
      case "Matematika":
      case "Fisika":
      case "Informatika":
        return "Fakultas Teknologi Informasi dan Sains";
      default:
        return "Fakultas Ekonomi";
    }
  }

  return (
    <>
      {/* TODO: answer here */}
      <NavBar />
      <div className="add-student-container">
        <h1>Add Student</h1>
        <form action="#" className="add-flex-container" onSubmit={handleSubmit}>
          <label htmlFor="name">Fullname</label>
          <Input
            borderColor={"black"}
            w={[300, 400, 500]}
            type="text"
            id="name"
            name="name"
            data-testid="name"
            value={student.fullname}
            onChange={(event) =>
              setStudent({ ...student, fullname: event.target.value })
            }
          />
          <label htmlFor="profilePicture">Profile Picture</label>
          <Input
            borderColor={"black"}
            w={[300, 400, 500]}
            id="profilePicture"
            type="text"
            name="profilePicture"
            data-testid="profilePicture"
            value={student.profilePicture}
            onChange={(event) =>
              setStudent({ ...student, profilePicture: event.target.value })
            }
          />
          <label htmlFor="address">Address</label>
          <Textarea
            borderColor={"black"}
            w={[300, 400, 500]}
            name="address"
            id="address"
            cols="30"
            rows="10"
            data-testid="address"
            value={student.address}
            onChange={(event) =>
              setStudent({ ...student, address: event.target.value })
            }></Textarea>
          <label htmlFor="phoneNumber">Phone Number</label>
          <Input
            borderColor={"black"}
            w={[300, 400, 500]}
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            data-testid="phoneNumber"
            value={student.phoneNumber}
            onChange={(event) =>
              setStudent({ ...student, phoneNumber: event.target.value })
            }
          />
          <label htmlFor="date">Birth Date</label>
          <Input
            borderColor={"black"}
            w={[300, 400, 500]}
            type="date"
            id="date"
            name="date"
            data-testid="date"
            value={student.birthDate}
            onChange={(event) =>
              setStudent({ ...student, birthDate: event.target.value })
            }
          />
          <label htmlFor="gender">Gender</label>
          <Select
            borderColor={"black"}
            w={[300, 400, 500]}
            name="gender"
            id="gender"
            data-testid="gender"
            value={student.gender}
            onChange={(event) =>
              setStudent({ ...student, gender: event.target.value })
            }>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
          <label htmlFor="prody">Program Study</label>
          <Select
            borderColor={"black"}
            w={[300, 400, 500]}
            name="prody"
            id="prody"
            data-testid="prody"
            value={student.programStudy}
            onChange={(event) =>
              setStudent({ ...student, programStudy: event.target.value })
            }>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administarasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">
              Hubungan Internasional
            </option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </Select>
          <Button
            colorScheme="blue"
            type="submit"
            value="Add Student"
            data-testid="add-btn">
            Add Student
          </Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddStudent;
