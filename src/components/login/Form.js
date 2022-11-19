import { Formik } from "formik";
import Cookies from 'js-cookie'
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginSchema } from '../../utils/Validation'
import { useDispatch } from "react-redux";
import { login } from "../../redux/lib/auth";
const LoginForm = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <>
      <div className="py-4 h-100 d-flex flex-column  justify-content-center align-items-center">
        <div className="w-100 text-center">
          <img src="tqneen-logo.png" alt="tqneen logo" />
        </div>
        <h1 className="fw-bolder">Welcome !</h1>

        <Formik
          validationSchema={LoginSchema}
          onSubmit={({ mobile, password }) => {
            if (mobile === '01120223494' && password === '123456') {
              Cookies.set('user', JSON.stringify({ mobile: '01120223494', name: 'Ahmed Gabr' }), { expires: 7 })

                dispatch(login({mobile: '01120223494', name:'Ahmed Gabr'}))
              toast.success('Welcome to Tqneen')
              Navigate('/')

            } else {
              toast.error('Mobile number or password is not valid')
            }
          }}
          initialValues={{
            mobile: "01120223494",
            password: "123456",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3 align-items-center justify-content-center gap-4 my-5">
                <Form.Group
                  as={Col}
                  md="8"
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Form.Label>Mobile number</Form.Label>
                  <Form.Control
                    className="mb-1"
                    type="text"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.mobile && !errors.mobile}
                  />
                  {
                    errors.mobile && <span className="text-danger pt-1">{errors.mobile} </span>
                  }
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="8"
                  controlId="validationFormik102"
                  className="position-relative"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="mb-1"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.password && !errors.password}
                  />
                  {
                    errors.password && <span className="text-danger pt-1">{errors.password} </span>
                  }
                </Form.Group>
                <Col md='8' className="text-center">
                  <Button type="submit" >Submit form</Button>
                </Col>
              </Row>


            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;