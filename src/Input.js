import React from 'react';
import './App.css'
import { PropTypes } from 'prop-types';
import { Form } from 'react-bootstrap';

export function Input(props) {
  const { title, isRequired, className, name, type, value, style, placeholder,
    onChange, onBlur, required, error } = props;
  return (<><Form.Group>
    <b>{title}</b>{isRequired && <span style={{ color: "red" }}>*</span>}
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
    />{error && <span className="error">{`${error} `}</span>}
  </Form.Group>
  </>)
}

export class CheckBox extends React.Component {
  constructor() {
    super()
    this.hobbies = [
      { value: "swimming", label: "Swimming", id:"swimming" },
      { value: "reading", label: "Reading", id:"reading"},
      { value: "dancing", label: "Dancing", id:"dancing" },
      { value: "cooking", label: "Cooking", id:"cooking" },
    ]
  }
  render() {
    let { hobbies, title, type, isRequired, onChange, error } = this.props
    return <><Form.Group>
      <b>{title}</b>{isRequired && <span style={{ color: "red" }}>*</span>}
      {this.hobbies.map((x, i) => {
        return (<>
          <Form.Check
            type={type}
            label={x.label}
            name={hobbies}
            value={x.value}
            onChange={onChange}
            id={x.id}
          />
        </>
        );
      })}
      {error && <span className="error">{`${error} `}</span>}
    </Form.Group>
      

    </>
  }
}

export class OnlyOneCheckBox extends React.Component {
  constructor() {
    super()
    this.occupation = [
      { value: "employee", label: "Employee" ,id:"formEmployee"},
      { value: "student", label: "Student" ,id:"formStudent" },
    ]
    this.state = {
      selected: 'student'
    }
  }
  render() {
    let { error, title, type, isRequired, onChange, checked } = this.props
    return <Form.Group>
      <b>{title}</b>{isRequired && <span style={{ color: "red" }}>*</span>}
      {this.occupation.map((x, i) => {
        return (
            <Form.Check
              type={type}
              name="occupation"
              value={x.value}
              id={x.id}
              label={x.label}
              onChange={onChange}
              checked={checked === x.value}
              error={error}
            /> 
        );
      })}
      {error && <span className="error">{`${error} `}</span>}
    </Form.Group>

  }
}

export class RadioButton extends React.Component {
  constructor() {
    super()
    this.gender = [
      { value: "female", label: "Female", name: "gender", id:"formFemale" },
      { value: "male", label: "Male", name: "gender",id:"formMale" },
    ]
  }
  render() {
    let { title, error, type, isRequired, onChange } = this.props
    return <Form.Group>
      <b>{title}</b>{isRequired && <span style={{ color: "red" }}>*</span>}
      {this.gender.map((x, i) => {
        return <>
          <Form.Check
            type={type}
            onChange={onChange}
            value={x.value}
            label={x.label}
            id={x.id}
            name={x.name}
            error={error}
          /></>
      })}
      {error && <span className="error">{`${error} `}</span>}
    </Form.Group>
  }
}

export class DropDown extends React.Component {
  render() {
    let { title, name, error, onChange, option, isRequired } = this.props
    return (<><Form.Group >
      <b>{title}</b>{isRequired && <span style={{ color: "red" }}>*</span>}
      <Form.Control as="select" name={name} onChange={onChange}>
        <option>Select</option>
        <option>{option[0]}</option>
        <option>{option[1]}</option>
        <option>{option[2]}</option>
        </Form.Control>
      {error && <span className="error">{`${error} `}</span>}
    </Form.Group> </>)
  }
}

CheckBox.defaultProps = {
  type: "checkbox"
}

OnlyOneCheckBox.defaultProps = {
  type: "checkbox"
}
RadioButton.defaultProps = {
  type: "radio"
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
