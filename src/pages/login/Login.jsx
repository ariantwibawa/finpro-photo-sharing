import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import './login.css'

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errLogin,
    setErrLogin,
    handleLogin,
  } = useLogin();

  return (
    <div className="login">
        <div className="card">
      <div className="left">
        <h2>-<br/> Scale <br/>-</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cumque
          vel aspernatur labore laudantium? Voluptas omnis possimus harum alias.
          Neque tempora accusantium officiis nihil ducimus expedita fugiat
          tempore dicta cupiditate.
        </p>
        <span>Don't Have An Account?</span>
        <Link to='/signup'>
          <button className="btn btn-primary">Sign Up</button>
        </Link>
      </div>
      <form className="right">
        <input type="text" required placeholder="username" onChange={(e) => setEmail (e.target.value)} />
        <input type="password" required placeholder="password" onChange={(e) => setPassword (e.target.value)}/>
        <button type="submit" className='btn' onClick={handleLogin}>Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
