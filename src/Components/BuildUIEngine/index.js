import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import UIElement from "../Reusable/UIField/index";

function GridBuilder({
  formStructureJson,
  handleChange,
  formSubmit,
  loading,
  handleClick,
  isDarkTheme
}) {

  return (
    <Form onSubmit={(e) => formSubmit(e)} className="email_refer help_form">
      <h6>{formStructureJson?.title}</h6>
      {formStructureJson.pages[0]?.fields.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row?.map((field, colIndex) => {
            return (
              <>
                {field?.length > 1 ? (
                  <Col sm={row?.length === 2 ? 6 : row?.length === 3 ? 4 : 3}>
                    <Row>
                      {field?.map((data, index) => (
                        <>
                          <Col
                            key={data.id}
                            style={{
                              flex: "1",

                              // padding: "10px",
                            }}
                            sm={
                              formStructureJson.pages[0]?.colSpan[rowIndex][
                              colIndex
                              ]
                            }
                          >
                            <UIElement
                              label={data?.label}
                              type={data?.type}
                              options={data?.options}
                              name={data?.name}
                              position={field?.position}
                              background={field?.background}
                              textColor={field?.textColor}
                              disabled={field?.disabled}
                              row={field?.row}
                              Placeholder={field?.Placeholder}
                              maxLength={field?.maxLength}
                              required={field?.required}
                              value={field?.value}
                              content={field?.content}
                              handleChange={handleChange}
                              readOnly={field?.readOnly}
                              event={field?.event}
                              loading={loading}
                              handleClick={() => handleClick()}
                            />
                          </Col>
                        </>
                      ))}
                    </Row>
                  </Col>
                ) : (
                  <Col
                    key={field.id}
                    style={{
                      flex: "1",
                    }}
                    sm={formStructureJson.pages[0]?.colSpan[rowIndex]}
                  >
                    <UIElement
                      label={field?.label}
                      type={field?.type}
                      options={field?.options}
                      name={field?.name}
                      isDarkTheme={isDarkTheme}
                      btnCss="help_btn_class"
                      position="my_40 text-center"
                      background={field?.background}
                      textColor={field?.textColor}
                      disabled={field?.disabled}
                      row={field?.row}
                      Placeholder={field?.Placeholder}
                      maxLength={field?.maxLength}
                      required={field?.required}
                      value={field?.value}
                      content={field?.content}
                      handleChange={handleChange}
                      readOnly={field?.readOnly}
                      event={field?.event}
                      loading={loading}
                      handleClick={() => handleClick()}
                    />
                  </Col>
                )}
              </>
            );
          })}
        </Row>
      ))}
    </Form>
  );
}

export default GridBuilder;
