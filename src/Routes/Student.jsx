// TODO: answer here
import "../styles/Student.css";
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";

const Student = () => {
  // TODO: answer here
  //state untuk menampung data student
  const [student, setStudent] = useState([]);
  //state untuk loading
  const [loading, setLoading] = useState(true);
  //state untuk error
  const [error, setError] = useState(false);
  //state untuk filter
  const [filter, setFilter] = useState("All");

  //mengambil data student dari API
  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await fetch("http://localhost:3001/student");
        const student = await response.json();
        setStudent(student);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    getStudent();
  }, []);

  // if (loading) {
  //   return <p>Loading ...</p>;
  // }
  if (error) {
    return <p>Error!</p>;
  }

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      const newStudent = student.filter((student) => student.id !== id);
      setStudent(newStudent);
    } catch (error) {
      console.log(error);
    }
  };

  const filterStudent = (event) => {
    setFilter(event.target.value);
  };

  const filteredStudent = student.filter((student) => {
    if (filter === "All") {
      return student;
    } else {
      return student.faculty === filter;
    }
  });

  return (
    <>
      {/* TODO: answer here */}
      <NavBar />
      <Box m={["66px 0px", "66px 0px", "66px"]}>
        {/* <Center> */}
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <div>
            <div className="flex-container-student">
              <h1>All Student ({student?.length})</h1>
              <Select
                borderColor={"black"}
                size={"sm"}
                width={"200px"}
                colorScheme="gray"
                name="Fakultas"
                id="filterFakultas"
                data-testid="filter"
                // className="student-filter"
                onChange={filterStudent}>
                <option value="All">All</option>
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Ilmu Sosial dan Politik">
                  Fakultas Ilmu Sosial dan Politik
                </option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">
                  Fakultas Teknologi Informasi dan Sains
                </option>
              </Select>
            </div>
            <TableContainer>
              <Table
                id="table-student"
                variant={"simple"}
                size={["sm", "sm", "md"]}>
                <Thead>
                  <Th>No</Th>
                  <Th>Full Name</Th>
                  {/* <Hide below="md"> */}
                  <Th>Faculty</Th>
                  <Th>Program Study</Th>
                  {/* </Hide> */}
                  <Th>Option</Th>
                </Thead>
                <Tbody>
                  {filteredStudent?.map((student, index) => (
                    <Tr key={student.id} className="student-data-row test-tr">
                      <Td className="index-data">{index + 1}</Td>
                      <Link
                        as={ReactLink}
                        to={`/student/${student.id}`}
                        className="student-name">
                        <Td h={66} verticalAlign={"middle"}>
                          {student.fullname}
                        </Td>
                      </Link>
                      {/* <Hide below="md"> */}
                      <Td>{student.faculty}</Td>
                      <Td>{student.programStudy}</Td>
                      {/* </Hide> */}
                      <Td className="cell-delete">
                        <button
                          onClick={() => deleteStudent(student.id)}
                          className="btn-delete"
                          data-testid={`delete-${student.id}`}>
                          Delete
                        </button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        )}
        {/* </Center> */}
      </Box>
      <Footer />
    </>
  );
};

export default Student;
