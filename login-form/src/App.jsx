import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import './App.css'

function LoginForm (){
      const [showPassword, setShowPassword] = useState(false);
      function ShowPassword(){
        setShowPassword(!showPassword);
      }

      return (
        <div>
          <p> Hello, welcom to my web site </p>
          <input className="input-login" placeholder="Email" size="20"/>
           <br/>
            {showPassword === true ? 
            (
            <>
              <input className="input-login" placeholder="Password" type="text" size="20"/>
            <button onClick={ShowPassword} className="button-show">Hide</button>
            </>
            ) : 
             (
            <>
             <input className="input-login" placeholder="Password" type="password" size="20"/>
             <button onClick={ShowPassword} className="button-show">Show</button>
            </>
          )}
          <br/>
          <button className="button-login">Login</button>
          <button className="button-login">Sign up</button> 
          </div>
      );

     }
  
        function CurrentTime (){

        const [showTime, setShowTime] = useState(dayjs().format('HH:mm:ss'));

        useEffect(() => {
          setInterval(() => {
          setShowTime(dayjs().format('HH:mm:ss'));
          console.log('run code');}, 1000);}, []);
 
          return (
          <p> Current time: {showTime}</p>
              ); 
        }

      function App () {

        return (
        <> 
          <LoginForm/>
          <CurrentTime/>
        </>  
        );
      }

export default App
