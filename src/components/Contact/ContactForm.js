import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { dataLanguage } from './data';
import { Link } from 'gatsby';

const ContactForm = ({ language, emailTo, emailCC }) => {

  const [msg, setMsg] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [fieldError, setFieldError] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const data = dataLanguage[language];

  const closeAlert = () => {
    setMsg(null);
  }

  const checkField = (field, type, fieldName) => {
    if ((field.value === "" && type === "text") || (field.checked === false && type === "check")) {
      field.style.border = "2px solid red"
      setFieldError((prevState) => {

        return {
          ...prevState,
          [fieldName]: data.errorField
        }
      })
      return false
    }

    if (fieldName === "phone" && !(/^\+\d{1,4}\s?\d{1,14}$/.test(field.value))) {
      field.style.border = "2px solid red"
      setFieldError(prevState => ({
        ...prevState,
        [fieldName]: ""
      }))
      setPhoneError(data.errorPhone)
      return false
    }

    if (fieldName === "email" && !(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(field.value))) {
      field.style.border = "2px solid red"
      setFieldError(prevState => ({
        ...prevState,
        [fieldName]: ""
      }))
      setEmailError(data.errorEmail)
      return false
    }

    field.style.border = "1px solid #dee2e6"
    setFieldError(prevState => ({
      ...prevState,
      [fieldName]: ""
    }))
    if (fieldName === "email") setEmailError("")
    if (fieldName === "phone") setPhoneError("")
    return true

  }

  const submit = (e) => {
    e.preventDefault();
    setBtnDisabled(true)
    let result = true;

    if (!checkField(e.target.name, "text", "name")) result = false
    if (!checkField(e.target.email, "text", "email")) result = false
    if (!checkField(e.target.subject, "text", "subject")) result = false
    if (!checkField(e.target.phone, "text", "phone")) result = false
    if (!checkField(e.target.message, "text", "message")) result = false
    if (!checkField(e.target.checkbox, "check", "checkbox")) result = false

    if (result) {
      setLoading(true)
      fetch(process.env.GATSBY_CONTACT_FUNCTION_URL, {
        method: 'POST',
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          subject: e.target.subject.value,
          phone: e.target.phone.value,
          msg: e.target.message.value,
          to: emailTo,
          cc: emailCC
        })
      }).then(res => {
        if (res.status === 200) {
          setMsg({
            style: 'success',
            title: data.alert.success.title,
            msg: data.alert.success.message
          })
        } else {
          setMsg({
            style: 'danger',
            title: data.alert.error.title,
            msg: data.alert.error.message
          })
        }
        setLoading(false)
      }
      )
        .catch(err => {
          setMsg({
            style: 'danger',
            title: data.alert.error.title,
            msg: data.alert.error.message
          })
          setLoading(false)
        }
        )
    }
    setBtnDisabled(false)
  }

  return (
    <>
      {msg != null &&
        <Alert variant={msg.style} onClose={closeAlert} dismissible>
          <Alert.Heading>{msg.title}</Alert.Heading>
          <p>
            {msg.msg}
          </p>
        </Alert>}

      <Form className='contact_form' onSubmit={submit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>{data.fieldName} <span>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder={data.placeholderName}
                name='name'
              />
              <span style={{ color: 'red' }}>{fieldError.name}</span>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>{data.fieldEmail} <span>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder={data.placeholderEmail}
                name='email'
              />
              <span style={{ color: 'red', fontSize: '0.9rem' }}>{emailError}</span>
              <span style={{ color: 'red', fontSize: '0.9rem' }}>{fieldError.email}</span>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGroupSubject">
              <Form.Label>{data.fieldSubject} <span>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder={data.placeholderSubject}
                name='subject'
              />
              <span style={{ color: 'red', fontSize: '0.9rem' }}>{fieldError.subject}</span>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGroupPhone">
              <Form.Label>{data.fieldPhone} <span>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder={data.placeholderPhone}
                name='phone'
              />
              <span style={{ color: 'red', fontSize: '0.9rem' }}>{phoneError}</span>
              <span style={{ color: 'red', fontSize: '0.9rem' }}>{fieldError.phone}</span>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupTextArea">
              <Form.Label>{data.fieldMessage} <span>*</span></Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder={data.placeholderMessage}
                name='message'
              />
              <span style={{ color: 'red', fontSize: '0.9rem' }}>{fieldError.message}</span>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className='contact_form__checkbox'>
            <Form.Check // prettier-ignore
              type="checkbox"
              id="custom-switch"
              label=""
              name='checkbox'
            />
            <p>
              {data.checkboxLabelInit}
              <span><Link to={data.checkboxLink}>{data.checkboxLabelLink}</Link></span>
              {data.checkboxLabelEnd}
            </p>

          </Col>
        </Row>
        <Row>
          <Col className='contact_form__button'>
            <Button variant="primary" type="submit" disabled={btnDisabled}>
              {data.buttonTitle}
            </Button>
          </Col>
        </Row>
        {loading && <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}

      </Form>

    </>
  )

}

export default ContactForm;