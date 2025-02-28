import React from "react";
import { Accordion } from "react-bootstrap";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "bootstrap/dist/css/bootstrap.min.css";

const UIAccordion = ({ className, defaulAccordionModal, accordionTitle, accordionValue }) => {
    return (
        <section className="faqs_accordion">
            <Accordion
                defaultActiveKey={defaulAccordionModal}
            >
                <Accordion.Item eventKey="0">
                    <Accordion.Header className={`d-flex ${className}`}>
                        <div className='flex-grow-1'>{accordionTitle}</div>
                        <KeyboardArrowDownIcon />
                    </Accordion.Header>
                    <Accordion.Body>
                        {accordionValue}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section >
    );
};

export default UIAccordion;
