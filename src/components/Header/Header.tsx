import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <h3>Github API</h3>
      </Link>
    </header>
  );
};

export default Header;
