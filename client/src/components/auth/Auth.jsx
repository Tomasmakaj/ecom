import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'


const Auth = ({setIsLoginPop, isLoginPop, user, setUser}) => {
        
    const navigate = useNavigate()
    
    const [isSignUp, setIsSignUp] = useState (false)
    const [form, setForm] = useState ({})

        
        let handleSubmit = (e) => {
            e.preventDefault();
            console.log(form);
            fetch("http://127.0.0.1:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data["user"]) {
                    localStorage.setItem("jwt", data.token);
                    setUser({
                        username: data.user.username
                    });
                    navigate('/home')
                    setIsLoginPop(prev => !prev)
                }else{
                    alert(data["error"])
                }
            });
        }

        let updateForm = (e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            });
          };
          
          let logOut = ()=>{
            localStorage.clear()
            setUser({username: ""})
          };

            const [newUser, setNewUser] = useState({
                email: '',
                password: '',
        });
    
            let createUser = (e) => {
                e.preventDefault();
                console.log(e.target.value);
                setNewUser({
                    ...newUser,
                    [e.target.name]: e.target.value,
                });
            };

            function handlePost(e){
                e.preventDefault()
                fetch("http://localhost:3000/users",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                })
                .then(res=>res.json())
                .then((data) => {
                    console.log(data);
                    if(data["user"]){
                        localStorage.setItem("jwt", data.token);
                        setUser({
                        username: data.user.username
                    });
                    }else{
                        alert(data["error"])
                    }
                })};
        
          const handleChange = (key, value) => {
            setForm({
                ...form,
                [key]: value
            })
        }
    
    return (
        <div id='auth-bg' onClick={()=> {setIsLoginPop(prev => !prev); }}>
            <div id='auth-form' onClick={(e) => {e.stopPropagation()}}>
            <h1>{isSignUp? 'Sign Up' : 'Sign In'}</h1>
            <button className='g hover-auth'>Continue with Google</button>
            <button className='a hover-auth'>Continue with Apple</button>
            <button className='fb hover-auth'>Continue with Facebook</button>
            <div id='divider'>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        <form onSubmit={handleSubmit}>

        {
        isSignUp&& <div id='signup-container'>
        </div>

        }
        <input type='email' onChange={(e)=> {handleChange(e.target.name, e.target.value)}} name='username' placeholder='Email' />
        <input type='password' onChange={(e)=> {handleChange(e.target.name, e.target.value)}} name='password' placeholder='Password'/>

        <button className='continue hover-auth' >Continue</button>
        </form> 
        {isSignUp? null :
         <div id='forgot-pword'>
         <input  id='check' type='checkbox'/>
         <label htmlFor='check' className='check'>Remember Me</label>
         <a>Forgot Password?</a>
         </div>
        }
        <hr/>
        <div id='join'>
            <p>{isSignUp? 'Have an Account?':'Not a member yet?'}</p>
            <a onClick={()=> {setIsSignUp(prev => !prev)}}>{isSignUp? 'Login': 'Join now'}</a>
            
        </div>
    </div>
    </div>
  )
}

export default Auth
