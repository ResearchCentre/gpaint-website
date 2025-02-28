import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import UIButton from "../UIButton";

function UIField({
  label,
  type,
  options,
  name,
  position,
  btnCss,
  background,
  isDarkTheme,
  textColor,
  disabled,
  row,
  Placeholder,
  maxLength,
  handleChange,
  required,
  value,
  content,
  readOnly,
  loading,
  event,
  handleClick
}) {
  return (
    <div className="email_refer help_form form_label">
      {readOnly && (
        <Form.Group className="mb_16">
          {label && <Form.Label>{label}</Form.Label>}
          <br />
          {value ? <strong>{value}</strong> : <Spinner animation="border" size="sm" />}
        </Form.Group>
      )}
      {type === "select" && !readOnly && (
        <Form.Group className="mb_16">
          {label && <Form.Label>{label}</Form.Label>}
          <Form.Select
            className="form-select"
            aria-label="Default select example"
            name={name}
            onChange={handleChange}
            required={required}
            value={value && value}
          >
            {Placeholder && (
              <option disabled value="">
                {Placeholder}
              </option>
            )}
            {options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}
      {(type === "text" ||
        type === "email" ||
        type === "number" ||
        type === "file" ||
        type === "password") &&
        !readOnly && (
          <Form.Group className="mb_16">
            {label && <Form.Label className={isDarkTheme ? "dark_mode" : "light_mode"}>{label}</Form.Label>}
            <Form.Control
              disabled={disabled}
              placeholder={Placeholder && Placeholder}
              type={type}
              name={name}
              maxLength={maxLength && maxLength}
              onChange={handleChange}
              value={value && value}
              required={required}
            />
          </Form.Group>
        )}
      {type === "textarea" && !readOnly && (
        <Form.Group className="mb_16">
          {label && <Form.Label>{label}</Form.Label>}
          <Form.Control
            disabled={disabled}
            placeholder={Placeholder && Placeholder}
            as={type}
            rows={row ? row : 3}
            name={name}
            onChange={handleChange}
            required={required}
            value={value && value}
          />
        </Form.Group>
      )}
      {type === "date" && !readOnly && (
        <Form.Group className="mb_16">
          {label && <Form.Label>{label}</Form.Label>}
          <Form.Control
            disabled={disabled}
            placeholder={Placeholder && Placeholder}
            type={type}
            name={name}
            onChange={handleChange}
            required={required}
            value={value ? moment(value).format("YYYY-MM-DD") : ""}
          />
        </Form.Group>

      )}
      {type === "checkbox" && !readOnly && (
        <Form.Group className="mb_16">
          <Form.Check
            disabled={disabled}
            label={label}
            type={type}
            name={name}
            onChange={handleChange}
            required={required}
            value={value && value}
            defaultChecked={value && value === true}
          />
        </Form.Group>
      )}
      {type === "radio" && !readOnly && (
        <Form.Group className="mb_16">
          {label && <Form.Label>{label}</Form.Label>}
          <Form.Group>
            {options?.map((option, index) => (
              <>
                <Form.Check
                  disabled={disabled}
                  inline
                  name={name}
                  label={option}
                  type={type}
                  onChange={handleChange}
                  value={option}
                  checked={value && value === option}
                />
              </>
            ))}
          </Form.Group>
        </Form.Group>
      )}

      {type === "button" && !readOnly && event === "submit" && (
        <div className={position}>
          {/* <Button
            type="submit"
            disabled={disabled}
            style={{
              background: background,
              color: textColor,
            }}
          >
            {loading ? (
              <Spinner animation="border" size="sm" /> // Display a spinner when loading
            ) : (
              label
            )}
          </Button> */}
          <UIButton
            btnClassName={btnCss}
            btnDisable={loading ? true : false}
            btnType="submit"
            btnlabel={label}
          />
        </div>
      )}

      {type === "button" && !readOnly && event === "click" && (
        <div className={position}>
          <Button
            disabled={disabled}
            style={{
              background: background,
              color: textColor,
            }}
            onClick={() => handleClick()}
          >
            {label}
          </Button>
        </div>
      )}

      {type === "div" && !readOnly && (
        <div
          style={{
            background: background,
            color: textColor,
          }}
          className={position}
        >
          {content}
        </div>
      )}

      {(type === "" || type === undefined) && (
        <Form.Group>{label && <Form.Label>{label}</Form.Label>}</Form.Group>
      )}
    </div>
  );
}

export default UIField;
