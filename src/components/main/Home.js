import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cors from 'cors'
const Home = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: '',
    password: '',
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevData) => ({ ...prevData, [name]: value }));
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === '' || password === '') {
      toast.error('All fields are required', {
        position: 'top-center',
      });
    } else {
      try {
        const response = await fetch('https://app-test.simplycloud.gr/api/v1/auth/login', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error('Invalid credentials');
        }

        const userData = await response.json();
        console.log('User data:', userData);

        // Save user data or perform other actions as needed
        localStorage.setItem('user_login', JSON.stringify(userData));

        toast.success('Login successful!', {
          position: 'top-center',
        });

        // Redirect to the desired page
        history('/Cashier');
      } catch (error) {
        console.error('Login error:', error);
        toast.error('Invalid credentials', {
          position: 'top-center',
        });
      }
    }
  };

  return (
    <>
      <div className="container-fluid bg justify-content-center">
        <section className="justify-content-center ">
          <div className="left_data  p-3 justify-content-center" style={{ width: '100%' }}>
            <h3 className="text-center col-lg-12">Login</h3>
            <Form className="mt-5">
              <Form.Group className="mb-3 col-lg-12" controlId="formBasicPassword">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Email"
                  className="styl"
                />
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-12"
                onClick={loginUser}
                style={{ background: '#4c62de' }}
                type="submit"
              >
                Login
              </Button>
              <br />
              <br />
              <Button
                variant="primary"
                className="col-lg-12"
                onClick={loginUser}
                style={{ background: 'dodgerblue' }}
                type="submit"
              >
                Demo Account
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account <span onClick={() => history('/signup')}>SignUp</span>{' '}
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;

