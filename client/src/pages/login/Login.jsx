import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ClubTracker</h3>
          <span className="loginDesc">
            Connect with clubs and never miss any updates from now
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton"><a href="/" className="link">Log In</a></button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton"><a href="/register" className="link">
              Create a New Account</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}