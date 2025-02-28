import React from 'react'
import { aboutUs } from "../JsonFile/AboutUs/index"
import { Row, Col } from "react-bootstrap"

const AboutusContent = () => {
    return (
        <section className='text-center'>
            <h3>Know more about us</h3>

            <p>We are a trailblazing product-based company, driven by a passion for excellence and a relentless pursuit of technological advancement. With a diverse portfolio of software solutions, we are trying to redefine the standards.</p>
            <Row>
                {aboutUs.map((abtus, idx) => {
                    return (
                        <Col lg={4} md={12}>
                        <img src={abtus.img} alt={`circle img${idx}`} />
                            <h5>{abtus.heading}</h5>
                            <p>{abtus.content}</p>
                        </Col>
                    )
                })}
            </Row>
        </section>
    )
}

export default AboutusContent