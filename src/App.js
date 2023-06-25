import React from "react";
// TODO: answer here
import Home from "./Routes/Home";
import Student from "./Routes/Student";
import EditStudent from "./Routes/EditStudent";
import AddStudent from "./Routes/AddStudent";
import NotFound from "./Routes/NotFound";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student">
          <Route index element={<Student />} />
          <Route path=":id" element={<EditStudent />} />
        </Route>
        <Route path="/add" element={<AddStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </> // TODO: replace this
  );
};

export default App;
