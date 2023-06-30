import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>

<form action="action_page.php" method="post">
  <div class="imgcontainer">
    <h1>Hi there!</h1>
    <p>Welcome to CLUB TRACKER</p>
  </div>

    <div className="container">
    <label for="uname"><b>Email Address</b></label>
    <input type="text" placeholder="Enter Username" name="uname" />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Login</button>
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
