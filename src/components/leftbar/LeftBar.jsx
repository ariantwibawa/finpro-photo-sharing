import { Link } from "react-router-dom";
import "./leftBar.css";

// Component.............

// Icon Image............


export default function LeftBar() {
  return (
    <div className="leftBar">
      <div className="left-container">
        <div className="menu">

          <Link to="/profile/id">
            <div className="user">
              <img src="" alt="" />
              <h4>Ariant Wibawa</h4>
            </div>

            <Link to='/'>
              <div className="item">
                <img src="" alt="" />
                <h4>Create</h4>
              </div>
            </Link>

            <hr/>

            <Link to=''>
              <div className="item">
                <img src="" alt="" />
                <h4>Logout</h4>
              </div>
            </Link>

          </Link>
        </div>
      </div>
    </div>
  );
}
