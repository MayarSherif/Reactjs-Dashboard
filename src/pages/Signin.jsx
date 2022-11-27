import React, { useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setUser} from '../redux/user'
import { signInWithGooglePopup, signinUserWithEmailAndPassword } from '../utils/firebase/firebase';
import "../styles/signin.scss";
import { Link, useNavigate } from 'react-router-dom';


const defaultFormFields = {
    email: '',
    password: ''
}

const Signin = () => {
    // const { setCurrentUser, currentUser } = useContext(UserContext);
    const dispatch = useDispatch();
    const{currentUser} = useSelector( (state) => state.userRed )
    const navigation = useNavigate();
    const userG = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        
        dispatch(setUser(user));


        console.log(currentUser);
        if (currentUser) {
            navigation('/dashboard')
            
        }
    }

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

 

    const signinhandler = async (event) => {
        event.preventDefault();
        try {
            const response = await signinUserWithEmailAndPassword(email, password);
            const {user} = response;
            console.log(user);
            // user.displayName = formFields.firstName;
            // console.log(user.displayName);
            dispatch(setUser(user));
            console.log(currentUser);
            navigation('/dashboard');
            // dispatch(setUser(user));

           
        } catch (error) {
            alert('wrong username or password', error);
        }
        
    }
const navhandler = () =>{
    if (currentUser) {
        window.location.pathname = '/dashboard';
        
    }
}

    const inputhandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='wrapper'>
            <div className='signin'>
                <h2>Get's started.</h2>
                <div className='new__acc'>
                    <p>Don't have an account?  </p>
                    <Link to={"/signup"}> Signup </Link>
                </div>
                <div className='options__buttons'>
                    <button onClick={userG}>
                        <i class="ri-google-fill"></i>
                        Signin with google
                    </button>
                    <button>
                        <i class="ri-facebook-fill"></i>
                        Signin with Facebook
                    </button>
                </div>
                <div>
                    <form className='submit__info' onSubmit={signinhandler} >
                        <div className='signin__form'>
                            <label>Email</label>
                            <input type="email" onChange={inputhandler} name="email" value={email} required />
                            <label>Password</label>
                            <input type="password" onChange={inputhandler} name="password" value={password} required />
                        </div>
                        <button type='submit' onClick={navhandler} >Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signin