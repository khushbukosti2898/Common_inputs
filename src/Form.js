import React from 'react';
import './App.css';
import './index.css';
import { Button, Row, Col } from 'react-bootstrap';
import { Input, CheckBox, OnlyOneCheckBox, RadioButton, DropDown } from './Input'

class Form extends React.Component {
	state = {
		fname: '',
		lname: '',
		mname: '',
		email: '',
		pwd: '',
		gender: '',
		city: '',
		occupation: '',
		hobbies: [],
		mobile: '',
		cpwd: '',
		error: {
			mobile: '',
			fname: '',
			lname: '',
			email: '',
			pwd: '',
			hobbies: '',
			gender: '',
			city: '',
			occupation: '',
			cpwd: ''
		}
	}

	handleChangeCheck = (e) => {
		let { hobbies } = this.state;
		let { value, checked } = e.target;
		let index;
		if (checked)
			hobbies.push(value);
		else {
			index = hobbies.indexOf(value)
			hobbies.splice(index, 1)
		}
		this.setState({ hobbies },
			() => { this.validateCheckField(hobbies, value) });
	}
	validateCheckField = (name, value) => {
		let { error } = this.state;
		if (name.length === 0) error.hobbies = "Select atleast one hobby"
		else error.hobbies = "";
		this.setState({ error })
	}

	handleSubmit = (name, value) => {
		let { error, email, pwd, cpwd, hobbies, gender, city, occupation, fname, lname, mobile, mname } = this.state;
		switch (name) {
			case 'email':
				if (email === '')
					error.email = "Email is required"
				else
					error.email = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' :
						"Email is invalid";
				break;

			case 'pwd':
				if (pwd === '') error.pwd = "Password is required"
				else error.pwd = pwd.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()-_+={}[]|;:"<>,.])(?=.{6,})/i) ? '' :
					"Password is invalid(must contain one uppercase, lowercase, digit, special character and length>6)";
				break;

			case 'cpwd':
				if (cpwd === '') error.cpwd = "Confirm password is required"
				else if (cpwd !== pwd) error.cpwd = "Does not match with password"
				else error.cpwd = ''
				break;

			case 'fname':
				if (fname === '') error.fname = "First name is required"
				else error.fname = fname.match(/^[a-zA-Z]{2,30}$/i) ? '' :
					"First name is invalid";
				break;

			case 'mname':
				error.mname = mname.match(/^[a-zA-Z]{2,30}$/i) ? '' :
					"Middle name is invalid";
				break;

			case 'lname':
				if (lname === '') error.lname = "Last name is required"
				else error.lname = lname.match(/^[a-zA-Z]{2,30}$/i) ? '' :
					"Last name is invalid";
				break;

			case 'mobile':
				if (mobile === '') error.mobile = "Mobile is required"
				else error.mobile = mobile.match(/^\d{10}$/i) ? '' : 'Mobile is invalid';
				break;

			case 'hobbies':
				error.hobbies = hobbies.length === 0 ? "Select atleast one hobby" : '';
				break;

			case 'occupation':
				error.occupation = occupation === '' ? "Occupation is required" : ''
				break;

			case 'gender':
				if (gender === "")
					error.gender = "Select gender"
				else
					error.gender = '';
				break;
			case 'city':
				if (city === '' || city === "Select")
					error.city = "Select city"
				else
					error.city = '';
				break;

			default:
				break;
		}
		this.setState({ error: error })
	}

	handleChange = (e) => {
		let { name, value } = e.target
		this.setState({
			[name]: value
		}, () => this.handleSubmit(name, value))
	}

	handleClick = () => {
		let { error } = this.state;
		for (let key in error) {
			if (error.hasOwnProperty(key)) {
				this.handleSubmit(key, error[key])
			}
		}
	}

	render() {
		let { fname, lname, mobile, gender, cpwd, hobbies, email, pwd, city, occupation, mname } = this.state.error

		return (<>
			<div className="container">
				<Row className="text-center">
					<Col md="12">
						<h3><b>Sign up</b></h3>
					</Col>
				</Row>
				<Row>
					<Col md='4'>
						<Input
							title="First Name"
							type="text"
							name="fname"
							placeholder="First Name"
							onChange={this.handleChange}
							onBlur={this.handleChange}
							error={fname}
							isRequired={true} />
					</Col>
					<Col md='4'>
						<Input
							title="Middle Name"
							type="text"
							name="mname"
							placeholder="Middle Name"
							onChange={this.handleChange}
							isRequired={false}
							error={mname}
						/>
					</Col>
					<Col md='4'>
						<Input
							title="Last Name"
							type="text"
							name="lname"
							placeholder="Last Name"
							onChange={this.handleChange}
							onBlur={this.handleChange}
							error={lname}
							isRequired={true}
						/>
					</Col>
				</Row>
				<Row>
					<Col md='12'>
						<Input
							title="Email"
							type="text"
							name="email"
							placeholder="Email"
							onChange={this.handleChange}
							onBlur={this.handleChange}
							error={email}
							isRequired={true}
						/>
					</Col>
				</Row>

				<Row>
					<Col md="6">
						<Input
							title="Password"
							type="password"
							name="pwd"
							placeholder="Password"
							onChange={this.handleChange}
							onBlur={this.handleChange}
							error={pwd}
							isRequired={true}
						/>
					</Col>
					<Col md="6">
						<Input
							title="Confirm Password"
							type="password"
							name="cpwd"
							placeholder="Confirm Password"
							onChange={this.handleChange}
							onBlur={this.handleChange}
							error={cpwd}
							isRequired={true}
						/>
					</Col>


				</Row>
				<Row>
					<Col>
						<Input
							title="Mobile"
							type="text"
							name="mobile"
							placeholder="Mobile"
							onChange={this.handleChange}
							onBlur={this.handleChange}
							error={mobile}
							isRequired={true}
						/>
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<CheckBox
							onChange={this.handleChangeCheck}
							isRequired={true}
							title="Hobbies"
							error={hobbies}
						/>
					</Col>
					<Col md="6">
						<RadioButton
							onChange={this.handleChange}
							error={gender}
							isRequired={true}
							title="Gender"
						/>
					</Col>
				</Row>
				<Row>
					<Col md="12">
						<OnlyOneCheckBox
							onChange={this.handleChange}
							error={occupation}
							isRequired={true}
							title="Occupation"
							checked={this.state.occupation}
						/>
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<DropDown
							name="city"
							onChange={this.handleChange}
							error={city}
							isRequired={true}
							title="City"
							option={['Ahmedabad', 'Delhi', 'Mumbai', 'Rajkot']}
						/>
					</Col>
				</Row>
				<Row>
					<Col md="12">
						<Button variant="primary" onClick={this.handleClick}>Submit</Button>
					</Col>
				</Row>
			</div>
		</>
		)
	}
}
export default Form;