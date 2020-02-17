import React from 'react';
import './App.css'
import { PropTypes } from 'prop-types';
import { Form } from 'react-bootstrap';

export function Input(props) {
  const { title, isRequired, className, name, type, value, style, placeholder,
    onChange, onBlur, required, error } = props;
  return (<>
    {title}{isRequired && <span style={{ color: "red" }}>*</span>}
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
    />{error && <span className="error">{`*${error} `}</span>}
  </>)
}

export class CheckBox extends React.Component {
  constructor() {
    super()
    this.hobbies = [
      { value: "swimming", label: "Swimming" },
      { value: "reading", label: "Reading" },
      { value: "dancing", label: "Dancing" },
      { value: "cooking", label: "Cooking" },
    ]
  }
  render() {
    let { hobbies, title, type, isRequired, onChange, error } = this.props
    return <><div>
      {title}{isRequired && <span style={{ color: "red" }}>*</span>}
      {this.hobbies.map((x, i) => {
        return (
          <label key={i} className="mr-2">
            <input
              type={type}
              name={hobbies}
              value={x.value}
              onChange={onChange}
            /> {x.label}
          </label>
        );
      })}
    </div>
      {error && <span className="error">{`*${error} `}</span>}
    </>
  }
}

export class OnlyOneCheckBox extends React.Component {
  constructor() {
    super()
    this.occupation = [
      { value: "employee", label: "Employee" },
      { value: "student", label: "Student" },
    ]
    this.state = {
      selected: 'student'
    }
  }
  render() {
    let {  error, title, type, isRequired, onChange, checked } = this.props
    return <div>
      {title}{isRequired && <span style={{ color: "red" }}>*</span>}
      {this.occupation.map((x, i) => {
        return (
          <label key={i} className="mr-2">
            <input
              type={type}
              name="occupation"
              value={x.value}
              onChange={onChange}
              checked={checked === x.value}
              error={error}
            /> {x.label}
          </label>
        );
      })}<br/>
      {error && <span className="error">{`*${error} `}</span>}
    </div>

  }
}

export class RadioButton extends React.Component {
  constructor() {
    super()
    this.gender = [
      { value: "female", label: "Female", name: "gender" },
      { value: "male", label: "Male", name: "gender" },
    ]
  }
  render() {
    let { title, error, type, isRequired, onChange } = this.props
    return <div className="mr-2">
      {title}{isRequired && <span style={{ color: "red" }}>*</span>}
      {this.gender.map((x, i) => {
        return <label key={i}>
          <input
            type={type}
            onChange={onChange}
            value={x.value}
            name={x.name}
            error={error}
          />
          {x.label}
        </label>

      })}<br />
      {error && <span className="error">{`*${error} `}</span>}
    </div>
  }
}

export class DropDown extends React.Component {
  render() {
    let { title, name, error, onChange, option, isRequired } = this.props
    return (<>
      {title}{isRequired && <span style={{ color: "red" }}>*</span>}
      <select name={name} onChange={onChange}>
        <option>Select</option>
        <option>{option[0]}</option>
        <option>{option[1]}</option>
        <option>{option[2]}</option>
      </select>
      <br />
      {error && <span className="error">{`*${error} `}</span>}
    </>)
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
/* export default Input; */