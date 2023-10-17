import './nav.css'
import { Link } from "react-router-dom";

// Api Data.......

// Components.............
import DarkMode from '../darkmode/DarkMode';

// FontAwesome Icon.............
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
     {/*..............................................NavAria Left...............................................*/}
        <div className="nav-left">
          <Link to="/">
            <h3 className="logo">Scale</h3>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/profile/id">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div className="nav-searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" />
          </div>
        </div>

    {/*..............................................NavAria Right...............................................*/}
        <div className="nav-right"></div>
        <Link to="/">
          <FontAwesomeIcon icon={faBell} />
        </Link>
        <DarkMode/>
        <Link to="/">
          <FontAwesomeIcon icon={faBars} />
        </Link>
        <div className="user">
          <img src="" alt="" />
          <h4>Ariant Wibawa</h4>
        </div>
      </div>
    </nav>
  );
}
