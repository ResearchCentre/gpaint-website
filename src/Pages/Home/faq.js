import React from 'react'
import { faqdata } from "../JsonFile/Faqs/index"
import UIAccordion from "../../Components/Reusable/UIAccordion/index"
const Faq = () => {
    return (
        <div>
            <h3 className='text-center' style={{paddingTop: '50px'}}>Frequently Asked Questions</h3>

            {faqdata.map((data, idx) => {
                return (
                    <>
                        <UIAccordion
                            accordionTitle={data.question}
                            accordionValue={data.para}
                        // className="mb-3"
                        />
                    </>
                )
            })}
        </div>
    )
}

export default Faq