import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import InternalLink from './shared/internal-link'

const StyledForm = styled(Form)`
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem 0;

    .success-link {
      margin-top: 10px;
    }

    .form-child {
      width: 100%;
      padding: 8px 0;
      margin: 7px 0;
      border: none;
    }

    label {}

    .error {
        font-size: 12px;
        color: red;
        width: 400px;
        &:before {
          content: "❌ ";
          font-size: 10px;
        }
    }

`


const StyledErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  width: 400px;
  margin-left: 1rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }

`;


const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
      <input {...field} {...props} />
      </label>
    </>
  );
};

const MyTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}
        {meta.touched && meta.error ? (
            <StyledErrorMessage>{meta.error}</StyledErrorMessage>
        ) : null}
        <textarea {...field} {...props} />
        </label>
      </>
    );
  };


const ErrorMessage = () => {
    return (
        <div className='submit-message'>
            <p>There was an error submitting your message.</p>
            <p>Please refresh the the page and try again or email us at</p>
            <p>bueltmannchiropractic@gmail.com</p>
        </div>
    )
}

const SuccessMessage = () => {
    return (
        <div className='submit-message'>
            <p>Thank you for your message.</p>
            <p>We will get back to you as soon as possible.</p>
        </div>
    )
}


const BasicForm = ({ className }) => {
    const [ submitted, setSubmitted ] = useState(false)
    const [ isSubmitting, setIsSubmitting ] = useState(false)
    const [ isError, setIsError ] = useState(false)


    const submitData = async (values) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('/.netlify/functions/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(values)
            })

            console.log({response})
            response.ok ? setSubmitted(true) : setIsError(true)
            setIsSubmitting(false)
   
        } catch(err) {
            setIsError(true)
            setIsSubmitting(false)
        }
    
    };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: ""
        }}
        validationSchema={Yup.object({
            name: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
            email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
            message: Yup.string()
            .required("Required"),
        })}
        onSubmit={async (values, { resetForm }) => {
            await submitData(values)
            resetForm();
        }}
      >
            <StyledForm className={className}>
                {isError ? <ErrorMessage /> : isSubmitting ? <p>Submitting...</p> : submitted ? <SuccessMessage /> 
                    : 
                    <>
                        <MyTextInput
                        label="Name"
                        name="name"
                        type="text"
                        className='form-child'
                        />
                        <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        className='form-child'
                        />
                        <MyTextArea
                          label="Message"
                          name="message"
                          className='form-child'
                          rows='5'
                          cols='50'
                        />
                        <InternalLink as='button' type='submit'>Submit</InternalLink>
                    </>
                }
            </StyledForm>
      </Formik>
    </>
  );
};


export default BasicForm
