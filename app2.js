import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>

<form action="action_page.php" method="post">
  <div class="imgcontainer">
    <h1>Create Account</h1>
    <p>Welcome to CLUB TRACKER</p>
  </div>

    <div className="container">
    <label for="uname"><b>Email Address</b></label>
    <input type="text" placeholder="Enter Username" name="uname" />

    <label for="psw"><b>Create Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw"><b>Confrim Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Sign Up</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>

   
    </>
  );
}

export default App;