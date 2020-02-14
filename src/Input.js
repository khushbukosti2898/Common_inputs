import React from 'react';
import './App.css'
import { PropTypes } from 'prop-types';
import { Form } from 'react-bootstrap';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, checked, option, label, isRequired, className, name, type, value, style, placeholder,
      onChange, onBlur, required, error } = this.props
    console.log(checked)
    if (type === 'text') {
      Element = <>
        {title}
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
          checked={checked}
        /></>
    }
    else if (type === 'radio') {
      Element = <>
        <Form.Check type={type}
          name={name}
          value={value}
          label={label}
          onChange={onChange}
        /></>
    }
    else if (type === 'dropdown') {
      Element = <>
        <Form.Label>City</Form.Label>
        <Form.Control as="select" name={name} onChange={onChange}>
          <option>Select</option>
          <option>{option[0]}</option>
          <option>{option[1]}</option>
          <option>{option[2]}</option>
        </Form.Control></>
    }
    return (<>
      <Form.Group>
        {isRequired && <span style={{ color: "red" }}>*</span>}
        {Element}
        {(type === "text" || type === 'dropdown') &&
          error && <span className="error">{`*${error} `}</span>}
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
  chacked: "false"

}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string
}
export default Input;