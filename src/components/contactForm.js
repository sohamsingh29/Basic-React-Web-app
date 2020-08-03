import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import FormInput from "./formInput";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media} {
    width: 280px;
  }
`;
const FormDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${({ theme }) => theme.media} {
    flex-direction: column;
  }
`;
const FormButton = styled.button`
  position: relative;
  z-index: 2;
  line-height: 0;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: 500;
  color: #382b22;
  padding: 1.25em 2em;
  background: #fff0f0;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &:hover {
    background: #ffe9e9;
    transform: translate(0, 0.25em);
    &::before {
      box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
      transform: translate3d(0, 0.5em, -1em);
    }
  }
  &:active {
    background: #ffe9e9;
    transform: translate(0em, 0.75em);
    &::before {
      box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
      transform: translate3d(0, 0, -1em);
    }
  }
`;

const ContactForm = () => {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const formik = useFormik({
    initialValues: {
      Name: "",

      email: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(15, "Must be 15 characters or less.")
        .required("Required Field."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Required Field."),
      Subject: Yup.string()
        .required("Required Field.")
        .min(10, "Elaborate Please.")
        .max(50, "You cannot write more than 300 characters."),
      message: Yup.string()
        .min(100, "Elaborate Please.")
        .max(500, "You cannot write more than 500 characters."),
    }),
    onSubmit: (values, actions) => {
      axios({
        method: "POST",
        url: "https://formspree.io/your_own_key",
        data: values,
      })
        .then((response) => {
          actions.setSubmitting(false);
          actions.resetForm();
          handleServerResponse(true, "Thanks!");
        })
        .catch((error) => {
          actions.setSubmitting(false);
          handleServerResponse(false, error.response.data.error);
        });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormDiv>
        <FormInput
          name="Name"
          label="Full Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Name}
          touched={formik.touched.Name}
          errors={formik.errors.Name}
        />
        <FormInput
          name="email"
          label="Email Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          touched={formik.touched.email}
          errors={formik.errors.email}
        />
      </FormDiv>
      <FormInput
        style={{ width: "100%" }}
        name="Subject"
        label="Subject"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Subject}
        touched={formik.touched.Subject}
        errors={formik.errors.Subject}
      />
      <FormInput
        style={{ width: "100%" }}
        area
        name="message"
        label="Message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        touched={formik.touched.message}
        errors={formik.errors.message}
      />
      <div
        style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
      >
        <FormButton disabled={formik.isSubmitting} type="submit">
          Submit
        </FormButton>{" "}
        {serverState &&
          (serverState.ok ? (
            <p>thank you for submitting</p>
          ) : (
            <p>form is not working please use the contact email</p>
          ))}
      </div>
    </Form>
  );
};

export default ContactForm;
