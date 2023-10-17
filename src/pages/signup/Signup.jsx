import { Link } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h2>
            -<br />
            Scale Sign Up
            <br />-
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cumque
            vel aspernatur labore laudantium? Voluptas omnis possimus harum
            alias. Neque tempora accusantium officiis nihil ducimus expedita
            fugiat tempore dicta cupiditate.
          </p>
          <span>Already Have An Account?</span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="email" required placeholder="email" />
          <input type="password" required placeholder="password" />
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
