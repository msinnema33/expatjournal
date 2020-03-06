import React from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {}
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        // console.log(this.state.credentials)
        axiosWithAuth()
        //get stub from BE
          .post('/api/auth/login', this.state.credentials)
          .then(res => {
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('username', this.state.credentials.username);
              this.props.history.push('/dashboard');
          })
          .catch(err => console.log(err));
    };

    //check form function??

    render() {
        return (
          <section className='login-page'>  
            <h1>Expat Journal</h1>
            <h2>Share and remember these experiences</h2>

            <div className='auth-form'>
                <h3>Welcome Back</h3>

                <form onSubmit={this.login}>
                    <input
                      type='text'
                      name='username'
                      placeholder='Enter your user name'
                      value={this.state.credentials.username || ''}
                      onChange={this.handleChange}
                      required
                    />

                    <input
                      type='password'
                      name='password'
                      placeholder='Enter your password'
                      value={this.state.credentials.password || ''}
                      onChange={this.handleChange}
                      required
                    />

                    <button type='submit' className='submit-btn'>Sign In</button>    
                </form>
            </div>
          </section>  
        );
    }
}

export default Login;