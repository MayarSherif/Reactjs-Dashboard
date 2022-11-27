import React, {useState} from 'react';
import '../styles/signup.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {setUser} from '../redux/user'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth
} from '../utils/firebase/firebase'

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

const Signup = () => {
  const dispatch = useDispatch();
  const{currentUser} = useSelector( (state) => state.userRed )
  const navigation = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password } = formFields;


  const signuphandler = async (event) => {
    event.preventDefault();
    try {

      const response = await createAuthUserWithEmailAndPassword(email, password);
      const{user} = response;
      await createUserDocFromAuth(user, { firstName, password});

      user.displayName = formFields.firstName;
      console.log(user.displayName);
      navigation('/dashboard');
      dispatch(setUser(user));
    
      
      
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('user already exists', error);
      }
      console.log('error', error);
    }
  }

  const navigate = () => {
    if (currentUser) {
      navigation('/dashboard')
    }
  }

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='wrapper'>
      <div className='signup'>
        <h2>Get's started</h2>
        <div className='signup__formm'>
          <div className='new__acc'>
            <p>Already have an account?  </p>
            <Link to={"/signin"}> Signin </Link>
          </div>
          <form className='submit__infoo' onSubmit={signuphandler}>
            <div className='signup__form'>
              <label>First name</label>
              <input type="text" onChange={inputhandler} name="firstName" value={firstName} />
              <label>Last name</label>
              <input type="text" onChange={inputhandler} name="lastName" value={lastName} />
              <label>Email</label>
              <input type="email" onChange={inputhandler} name="email" value={email} />
              <label>Password</label>
              <input type='password' onChange={inputhandler} name="password" value={password} />
            </div>

            <button type='submit' onClick={navigate}>Submit</button>

          </form>
        </div>
      </div>
    </div>

  )
}

export default Signup