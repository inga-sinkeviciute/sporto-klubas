import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div>
        <i className="fa-solid fa-dumbbell"> Sportuok!</i>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="">Registration Form</Link>
            </li>
            <li>
              <Link to="/table">Members List</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
