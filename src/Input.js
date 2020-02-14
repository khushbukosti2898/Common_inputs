import React from 'react';
import './App.css'
import { PropTypes } from 'prop-types';
import { Form } from 'react-bootstrap';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {  title, label,isRequired, className, name, type, value, style, placeholder, onChange, onBlur, required, error } = this.props
    if (type === 'text') {
      Element = <>
      <Form.Label>{title}</Form.Label>
        <Form.Control
          className={className}
          name={name}
          type={type}
          value={value}
          style={style}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
        /> 

      </>
    }
    else if (type === 'checkbox') {
    Element = <>
      <Form.Check type={type}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
    /></>
    }
    else if (type === 'radio') {
      Element = <>
        <Form.Check type={type}
          name={name}
          value={value}
          label={label}
      /></>
      }
    return (<>
      <Form.Group>
        {isRequired && <span style={{ color: "red" }}>*</span>}
        {Element}
        {error && <span className="error">{`*${error} `}</span>}
      </Form.Group>
    </>)
  }
}


Input.defaultProps = {
  type: "text",
  style: {
    margin: "10px",
  },
  isRequired: false,

}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string
}
export default Input;