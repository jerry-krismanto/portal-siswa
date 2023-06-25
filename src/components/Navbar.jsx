// TODO: answer here
import { NavLink as ReactLink } from "react-router-dom";
import "../styles/Navbar.css";
import { Link } from "@chakra-ui/react";
// import { ExternalLinkIcon } from '@chakra-ui/icons'

const NavBar = () => {
  return (
    // TODO: answer here
    <div>
      <nav>
        <ul>
          <li>
            <Link
              fontSize={["sm", "sm", "md"]}
              as={ReactLink}
              to={"/"}
              className="home-page"
              data-testid="home-page"
              color={"white"}>
              Student Portal
            </Link>
          </li>
          <li>
            <Link
              fontSize={["sm", "sm", "md"]}
              as={ReactLink}
              color={"white"}
              to={"/student"}
              className="student-page"
              data-testid="student-page">
              All Student
            </Link>
          </li>
          <li>
            <Link
              fontSize={["sm", "sm", "md"]}
              as={ReactLink}
              to={"/add"}
              className="add-page"
              data-testid="add-page"
              color={"white"}>
              Add Student
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
