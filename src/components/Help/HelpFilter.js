import React, { useState } from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'gatsby';
import * as JsSearch from "js-search";
import './Help.scss'
import { Icon } from "../";

const HelpFilter = ({ title, placeholder, data, button, emptyState }) => {

    const dataToSearch = new JsSearch.Search('title')
    dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex('title')
    dataToSearch.addIndex('title')
    dataToSearch.addIndex(['category', 'titleCategory'])
    dataToSearch.addDocuments(data)

    const [queryResult, setQueryResult] = useState(data);

    const handleSearch = (textInput) => {
        if (textInput.length === 0) return setQueryResult(data)
        if(textInput.length >= 3) return setQueryResult(dataToSearch.search(textInput))
        if (textInput.length < 3) return
    }

    const items = queryResult.length > 0 ? queryResult.map((item) => (
        <Row className='card' key={item._id}>
            <Col md={8}>
                <b>{item.category.titleCategory}</b> - {item.title}
            </Col>
            <Col md={4}>
                <Link to={item.slug.current}><span>{button}</span> <Icon code={"FaArrowRight"}></Icon></Link>
            </Col>
        </Row>
    )) : <Row className='card justify-content-center'>{emptyState}</Row>

    return (
        <>
            <div className='helpContainer'>
                <div className='container'>
                    <div className='helpContainer__helpHeader'>{title}</div>
                    <div className='helpContainer__input'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                <Icon code="MdSearch"></Icon>
                            </InputGroup.Text>
                            <Form.Control
                                placeholder={placeholder}
                                aria-label={placeholder}
                                aria-describedby="basic-addon1"
                                size='lg'
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </InputGroup>
                    </div>
                </div>

            </div>
            <div className='container questions mt-4'>
                {items}
            </div>
        </>
    )
}

export default HelpFilter