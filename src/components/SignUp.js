import React from 'react';
import { Link } from 'react-router-dom';

import useForm from '../Utils/useForm';
import axios from 'axios';

export default function SignUp(props) {
    const [ formInfo, handleChanges, clearForm ] = useForm();

    const submitHandler = e => {
        e.preventDefault();
        const{ username, password, email } = formInfo;
        axios.post('https://expat-journal.herokuapp.com/api/auth/register', { username, password, email })
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', username);
            props.history.push('/sign-in');
        })
        .catch(err => console.log(err));

        clearForm();
    }

    //function to check on if the form is filled or not??

    return (
        <div className='auth-form'>
            <h1>Sign up to start your Journal</h1>

            <form onSubmit={submitHandler}>
                <input
                  className={formInfo.error ? 'error' : ''}
                  type='text'
                  name='username'
                  placeholder='Enter a user name'
                  value={formInfo.username || ''}
                  onChange={handleChanges}
                  required
                />

                <input
                  className={formInfo.error ? 'error' : ''}
                  type='email'
                  name='email'
                  placeholder='Enter an Email address'
                  value={formInfo.email || ''}
                  onChange={handleChanges}
                  required
                />

                <input
                  className={formInfo.error ? 'error' : ''}
                  type='password'
                  name='password'
                  placeholder='Enter a password'
                  value={formInfo.password || ''}
                  onChange={handleChanges}
                  required
                />

                <input
                  className={formInfo.error ? 'error' : ''}
                  type='password'
                  name='confirmPassword' 
                  placeholder='Confirm your password'
                  value={formInfo.confirmPassword || ''}
                  onChange={handleChanges}
                  required
                />

                <button type='submit' className='submit-btn'>Join Now!</button>        
            </form>

            <h3>Already have an account? <Link to='/sign-in'>Sign in</Link>here</h3>
        </div>
    );
}