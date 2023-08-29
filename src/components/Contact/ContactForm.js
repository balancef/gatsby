import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { dataLanguage } from './data';

const ContactForm = ({ language }) => {

    const checkField = (field) => {
        field.value === "" || false
            ?
            field.style.border = "2px solid red"
            :
            field.style.border = "1px solid #dee2e6"
    }

    const submit = (e) => {
        e.preventDefault();
        //name
        checkField(e.target.name)
        //email
        checkField(e.target.email)
        //subject
        checkField(e.target.subject)
        //phone
        checkField(e.target.phone)
        //message
        checkField(e.target.message)
        //checkbox
        checkField(e.target.checkbox)

        //paso todo ejecuto api
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: new FormData(e.target)
        }).then(res => {
            if (res.status === 200) {
                alert('Mensaje enviado correctamente')
                e.target.reset()
            } else {
                alert('Error al enviar el mensaje')
            }
        }
        )
        
    }


    const data = dataLanguage[language];

    return (

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
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>{data.fieldEmail} <span>*</span></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder={data.placeholderEmail}
                            name='email'
                        />
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
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formGroupTextArea">
                        <Form.Label>{data.fieldMessage} <span>*</span></Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder={data.placeholderMessage}
                            name='message'
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className='contact_form__checkbox'>
                    <Form.Check // prettier-ignore
                        type="checkbox"
                        id="custom-switch"
                        label={data.checkbox}
                        name='checkbox'
                    />
                </Col>
            </Row>
            <Row>
                <Col className='contact_form__button'>
                    <Button variant="primary" type="submit">
                        {data.buttonTitle}
                    </Button>
                </Col>
            </Row>
        </Form>
    )

}

export default ContactForm;