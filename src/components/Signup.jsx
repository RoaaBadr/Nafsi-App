import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import Navbar from "../sections/Navbar";
import { Link } from 'react-router-dom'

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <>
    <Navbar/>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <section class="">
          <div class="px-4 py-5 px-md-5 text-center text-lg-start">
            <div class="">
              <div class="row gx-lg-5 align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                  <h1 class="my-5 display-3 fw-bold ls-tight">
                    Hello , <br />
                    <span class="text-primary">Get Started!</span>
                  </h1>
                  <p className="parag">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                    quibusdam tempora at cupiditate quis eum maiores libero
                    veritatis? Dicta facilis sint aliquid ipsum atque?
                  </p>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0">
                  <div class="container border rounded-7 ">
                    <div class="card-body py-5 px-md-5">
                      <form>
                        <div class="row ">
                          <h1 className=" my-4 font-weight-bold .display-4 text-center">
                            Sign Up
                          </h1>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <TextField
                                label="First Name"
                                name="firstName"
                                type="text"
                              />
                            </div>
                          </div>

                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <TextField
                                label="last Name"
                                name="lastName"
                                type="text"
                              />
                            </div>
                          </div>
                          <div class="form-outline mb-4">
                            <TextField
                              label="Email"
                              name="email"
                              type="email"
                            />
                          </div>
                          <div class="form-outline mb-4">
                            <TextField
                              label="password"
                              name="password"
                              type="password"
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <TextField
                              label="Confirm Password"
                              name="confirmPassword"
                              type="password"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          class="btn btn-primary btn-block mb-4  "
                        >
                          Sign up
                        </button>
                        <div class="text-center "><p className="parag">Have an account?
                          <span className="space">
                        <Link to={"/log-in"}>Log In</Link></span></p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Formik></>
  );
};
