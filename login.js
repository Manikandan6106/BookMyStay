import './login.css';

function Login() {
  return (
    
    <div>
        

        <center><h1><b><i>BOOKMYSTAY</i></b></h1></center>
        <form>
          <h2>LOGIN</h2>

          <br></br>
        

          <lable>Name:</lable>
        
          
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <input type="text" id="name" name="name" placeholder="yourname" />
        
        <br></br>
        <br></br>
      
          <lable>Password:</lable>
          
        &nbsp;
        &nbsp;
        <input type="text" id="name" name="name" placeholder="password" />
        <br></br>
        <br></br>
        <button >Sign in</button>
        <br></br>
        <br></br>
        <h4>Don't have an account?</h4>
        
        <a href=" ">Create an account</a>
       
      
        </form>
      
    </div>
  );
}

export default Login;