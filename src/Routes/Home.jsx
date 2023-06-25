// TODO: answer here
import "../styles/Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="flex-container">
          <div className="flex-left">
            <p>
              Studi Independen <br />
              Kampus Merdeka <br />
              <span className="thick-span">by Ruangguru</span>
            </p>
          </div>
          <div className="flex-right">
            <p>Student portal</p>
            <Button color={"white"} bg={"black"} variant="solid">
              <Link
                to="/student"
                // className="student-btn"
                data-testid="student-btn">
                All Student
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ); // TODO: replace this
};

export default Home;
