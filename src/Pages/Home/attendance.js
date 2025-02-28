import React from 'react'
import { liveAttendancedata } from "../JsonFile/LiveAttendance/index"
import { Row, Col } from "react-bootstrap";

const Attendance = () => {
    return (
        <section className='text-center mt-5'>
            <h3>Why NeweboN's GPaint</h3>

            <Row>{liveAttendancedata.map((data, idx) => {
                return (
                    <Col lg={4} md={12}>
                        <img src={data.img} alt={`circle img${idx}`} />
                        <h5>{data.heading}</h5>
                        <p>{data.content}</p>
                    </Col>
                )
            })}</Row>
        </section>
    )
}

export default Attendance