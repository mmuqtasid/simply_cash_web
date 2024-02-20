import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cors from "cors";

const Home = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevData) => ({ ...prevData, [name]: value }));
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "" || password === "") {
      toast.error("All fields are required", {
        position: "top-center",
      });
    } else {
      try {
        const response = await fetch("/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password, deviceid: "web" }),
        });

        // const response = await fetch('https://app-test.simplycloud.gr/api/v1/auth/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ email, password }),
        // });

        if (!response.ok) {
          throw new Error("Invalid credentials");
        }

        const userData = await response.json();
        console.log("User data:", userData);

        // Save user data or perform other actions as needed
        localStorage.setItem("user_login", JSON.stringify(userData));

        toast.success("Login successful!", {
          position: "top-center",
        });

        // Redirect to the desired page
        history("/HomeMain");
        // history("/Cashier")
      } catch (error) {
        console.error("Login error:", error);
        toast.error("Invalid credentials", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <>
      <div className="container-fluid bg d-flex justify-content-center align-items-center vh-100">
        <section
          className="left_data p-3"
          style={{
            backgroundColor: "#fff",
            width: "300px",
            border: "2px solid dodgerblue",
          }}
        >
          <h3 className="text-center">Login111</h3>
          <div className="col-md-12">
            <Form className="text-center">
              <Form.Group className="mb-3" controlId="formBasicPassword">
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
                style={{ background: "#4c62de" }}
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
                style={{ background: "dodgerblue" }}
                type="submit"
              >
                Demo Account
              </Button>
            </Form>
          </div>
          <p className="mt-3">
            Already Have an Account{" "}
            <span onClick={() => history("/signup")}>SignUp</span>{" "}
          </p>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;