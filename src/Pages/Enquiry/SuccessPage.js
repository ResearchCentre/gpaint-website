import React from 'react'
import {DataModalWrap} from './style'
import { Button, Col, Row } from 'react-bootstrap';
import moment from 'moment';

export const SuccessPage = ({responseData, setOpenModel}) => {
  return (
    
         <DataModalWrap>
                <div className="payment_success_container">
                <p className="payment_header my-3">Thank you for submitting the inquiry form.</p>
                <div className="form_details py-5">
                  <p className="name pb-4">Hi {responseData.name || "user"},</p>
                  <p className='mb-5'>Your inquiry form has been submitted successfully. Our team will get back to you within 2 working days.</p>                 

                  <Row className="mb-3">
                    <Col className="details_value d-flex flex-wrap " >
                       <p className='me-2 details_head'> Name :</p>
                       <p>  {responseData?.name}</p>
                    </Col>
                   
                  </Row>

                  {/* <Row className="mb-3">

                    <Col className="details_value d-flex flex-wrap " >
                       <p className='me-2 details_head'> Email ID :</p>
                       <p>  {responseData?.supportEmail}</p>

                    </Col>                  
                  </Row> */}

                  <Row className="mb-3">
                    <Col className="details_value d-flex flex-wrap " >
                       <p className='me-2 details_head'>  Reference Number :</p>
                       <p>  {responseData?.referenceNumber}</p>
                    </Col>                 
                  </Row>


                  <Row className="mb-3">
                    <Col className="details_value d-flex flex-wrap " >
                      <p className='me-2 details_head'>  Submitted Date :</p>
                      <p>  {moment(responseData?.submittedDate).format('DD-MMM-YYYY:HH:mm')}</p>
                    </Col>  

                  </Row>                 

                  <p className="mb-0 mt-5 details_value">Kind Regards,</p>
                  <p className="details_value mb-0">Enquiry Team</p>  
                  {/* <p className="details_value mb-0">Global Operations</p> */}
                  {/* <p className="details_value mb-0">Contact Phone: 0415 198 140</p> */}
                  <a className="details_value mb-0" href='https://marketplace.newebon.com/'>Marketplace NeweboN</a>
                  <div className='text-center mt-5'>
                    <Button className='close_btn' onClick={()=>{setOpenModel(false)}}>Okay</Button>
                  </div>
                </div>
              </div>
              </DataModalWrap>
              

    
  )
}
