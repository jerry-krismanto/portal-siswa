import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";
import { Button, Center } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* TODO: answer here */}
      <Center h={"100vh"}>
        <div className="not-found-container">
          <h1>404 Not Found</h1>
          <div className="not-found-flex-container">
            <h2>Country Roads</h2>
            <Button
              colorScheme="teal"
              onClick={() => navigate("/")}
              data-testid="back"
              // className="back-button"
            >
              Take me home
            </Button>
          </div>
        </div>
      </Center>
    </>
  );
};

export default NotFound;
