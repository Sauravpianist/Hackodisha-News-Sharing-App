import React, { useState } from 'react';
import { useAuth } from '../contexts/user.context';
import { MDBContainer, MDBInput, MDBCheckbox} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email:email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      // const authToken = data.authtoken;
      const userData = data.user;
      login(userData);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBInput
            wrapperClass='mb-4'
            name='email'
            label='Email address'
            id='form1'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            name='password'
            label='Password'
            id='form2'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <button onClick={handleLogin} className="mb-4 btn btn-primary btn-lg btn-block">
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link to="/signup">Register</Link>
            </p>
          </div>
        </MDBContainer>

    </>
  );
}

export default Login;
