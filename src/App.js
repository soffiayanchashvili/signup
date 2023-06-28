import './App.css';
import React, { useState } from 'react';





function App() {
  const [emailaddres, setEmailAddres] = useState ("")
  const [password, setPassword] = useState ("")

  const handleSubmit = () => {
    if (emailaddres.trim().length === 0 || password.trim().length === 0){
      return alert ('შეავსეთ ყველა ველი')
    }

    if (password.length < 8) {
      return alert ('პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს')
    }

    console.log(emailaddres, password);
  }



  return (
    <div className="App">
      <div className='signIn'>
        <h3>Create An Account</h3>
        <p>Create an account to enjoy all the services without any ads for free!</p>
        <input type='email' placeholder='Email Address' onChange={(e) => setEmailAddres(e.target.value)}/>
        <input type='password' placeholder='Password'onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Create Account</button>
        <p>Already Have An Account? <a href='#'>Sign In</a></p>
      </div>
    </div>
  );
}

export default App;
