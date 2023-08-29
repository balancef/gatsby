import React, { useContext } from 'react'
import useContact from '../../hooks/useContact'
import { LanguageContext } from '../../context/languajeContext';
import { Banner, Seo } from "../";
import { Col, Row } from 'react-bootstrap';
import './Contact.scss'
import ContactForm from './ContactForm';

const Contact = () => {

    let query = useContact()
    const { language } = useContext(LanguageContext);
    let data = null

    if (language === "es") {
        data = query.allSanityContact.ContactES[0];
    } else {
        if (language === "de") {
            data = query.allSanityContact.ContactDE[0];
        } else {
            data = query.allSanityContact.ContactEN[0];
        }
    }

    return (
        <>
            <Seo title={""} description={""} keywords="" />
            {(data.banner !== null) ? <Banner banner={data.banner} /> : <></>}
            <div className='container'>
                <Row className='contact_title'>
                    <Col><p>{data.title}</p></Col>
                </Row>
                <Row className='contact_subtitle'>
                    <Col><p>{data.subTitle}</p></Col>
                </Row>
            </div>
            <div className='container'>
                {language !== null && <ContactForm language={language} />}
            </div>
            <div className='container'>
                <Row className=''>
                    <Col className='contact_information'><p>{data.text}</p></Col>
                </Row>
            </div>
        </>
    )
}

export default Contact