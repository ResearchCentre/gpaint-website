import React, { useState } from "react";
import { Form, Input, Button, Select, Spin } from "antd";
import { Container } from "react-bootstrap";
import { SuccessPage } from "./SuccessPage";
import EnquiryWrap from "./style";
import {
  message12,
  message18,
  message24,
  message9,
} from "../../MasterData/message";
import { label_array_1 } from "../../MasterData/label"
import { Placeholder } from "../../MasterData/Placeholder";
import { submitEnquiryAPI } from "../../Action/api";
const { Option } = Select;
const { TextArea } = Input;

export const Enquiry = () => {
  const [form] = Form.useForm();
  const [formLoading, setFormLoading] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [responseData, setResponseData] = useState({});

  const handleSubmit = async (e) => {
    setFormLoading(true);
    const createDate = new Date();
    const obj = {
      emailId: e.email,
      phoneNumber: e.contactNo,
      enquiryType: "Enquiry",
      message: e.message,
      product: "All Product",
      name: e.name,
      address: "None",
      country: "All",
      createdDate: createDate.toISOString(),
    };
    try {
      const response = await submitEnquiryAPI(obj);
      if (response.status) {
        setFormLoading(false);
        setResponseData(response?.data?.data);
        setOpenModel(true);
        form.resetFields();
      }
    } catch (error) {
      console.error("Error:", error);
      setFormLoading(false);
    }
  };

  return (
    <EnquiryWrap>
      <Spin spinning={formLoading} fullscreen size="large" />
      <Container className="my-5">
        {openModel ? (
          <SuccessPage
            responseData={responseData}
            setOpenModel={setOpenModel}
          />
        ) : (
          <div>
            <p className="form_title"> Enquiry Form</p>
            <div className=" d-flex justify-content-center">
              <Form
                onFinish={handleSubmit}
                form={form}
                className="payment_form"
                layout="vertical"
                initialValues={{
                  name: "",
                  email: "",
                  contactNo: "",
                  message: "",
                }}
              >
                <Form.Item
                  label= {label_array_1[0]}
                  className="mt-3"
                  name="name"
                  rules={[{ required: true, message: message9 }]}
                >
                  <Input placeholder={Placeholder.fullName} maxLength={500} />
                </Form.Item>

                <Form.Item
                  label= {label_array_1[1]}
                  className="mt-3"
                  name="email"
                  rules={[
                    { required: true, type: "email", message: message12 },
                  ]}
                >
                  <Input placeholder={Placeholder.emailId} />
                </Form.Item>

                <Form.Item
                  label= {label_array_1[2]}
                  className="mt-3"
                  name="contactNo"
                  rules={[{ required: true, message: message18 }]}
                >
                  <Input type="number" placeholder={Placeholder.contact} />
                </Form.Item>

                <Form.Item
                  label= {label_array_1[4]}
                  className="mt-3"
                  name="message"
                  rules={[{ required: true, message: message24 }]}
                >
                  <TextArea placeholder={Placeholder.message} />
                </Form.Item>

                <div className="text-center">
                  <Button
                    className="form_btn mt-4"
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Container>

      {/* <Footer /> */}
    </EnquiryWrap>
  );
};
