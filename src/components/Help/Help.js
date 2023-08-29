import React, { useContext } from 'react'
import useHelp from "../../hooks/useHelp";
import { Seo, HelpFilter } from "../";
import { LanguageContext } from "../../context/languajeContext";
import { Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';
import { dataLanguage } from './data';

const Help = () => {
    let query = useHelp()
    const { language } = useContext(LanguageContext);
    let data = null

    if (language === "es") {
        data = query.allSanityHelp.HelpES;
    } else {
        if (language === "de") {
            data = query.allSanityHelp.HelpDE;
        } else {
            data = query.allSanityHelp.HelpEN;
        }
    }

    return (
        <>
            <Seo title={dataLanguage[language]?.seoTitle} description={dataLanguage[language]?.seoDescription} keywords="" />
            {language !== null && <HelpFilter
                title={dataLanguage[language]?.pageTitle}
                placeholder={dataLanguage[language]?.placeholder}
                data={data}
                button={dataLanguage[language]?.button}
                emptyState={dataLanguage[language]?.emptyState}
            />}
            <div className='component_container'>
                <div className='container component_container__info'>
                    <Row>
                        <Col className='component_container__title'><span>{dataLanguage[language]?.component.title}</span></Col>
                    </Row>
                    <Row>
                        <Col><Link to={dataLanguage[language] ? dataLanguage[language].component.link : "#"}>{dataLanguage[language]?.component.button}</Link></Col>
                    </Row>
                    <Row>
                        <Col className='component_container__subTitle'><span>{dataLanguage[language]?.component.subTitle}</span></Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Help