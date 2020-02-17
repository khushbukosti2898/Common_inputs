import React from 'react';
import Checkbox from './Checkbox';
import './App.css'
import { Button, Row, Col } from 'react-bootstrap';
import { Input, CheckBox, OnlyOneCheckBox, RadioButton, DropDown } from './Input'

class Form extends React.Component {
	state = {
		fname: '',
		lname: '',
		email: '',
		pwd: '',
		hobbies: [],
		gender: '',
		city: '',
		occupation: '',
		hobbies: [],
		mobile: '',
		error: {
			mobile: '',
			fname: '',
			lname: '',
			email: '',
			pwd: '',
			hobbies: '',
			gender: '',
			city: '',
			occupation: ''
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
		if (name.length == 0) error.hobbies = "Select atleast one hobby"
		else error.hobbies = "";
		this.setState({ error })
	}

	handleSubmit = (name, value) => {
		let { error, email, pwd, hobbies, gender, city, occupation, fname, lname, mobile } = this.state;
		switch (name) {
			case 'email':
				if (email == '')
					error.email = "Email is required"
				else
					error.email = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' :
						"Email is invalid";
				break;

			case 'pwd':
				if (pwd == '')
					error.pwd = "Password is required"
				else
					error.pwd = pwd.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/i) ? '' :
						"Password is invalid";
				break;

			case 'fname':
				error.fname = fname === '' ? "First name is required" : ''
				break;

			case 'lname':
				error.lname = lname === '' ? "Last name is required" : ''
				break;

			case 'mobile':
				if (mobile == '')
					error.mobile = "Mobile is required"
				else
					error.mobile = mobile.match(/^\d{10}$/i) ? '' : 'Mobile is invalid';
				break;

			case 'hobbies':
				if (hobbies.length == 0)
					error.hobbies = "Select atleast one hobby"
				else
					error.hobbies = '';
				break;

			case 'occupation':
				error.occupation = occupation === '' ? "Occupation is required" : ''
				break;

			case 'gender':
				if (gender == "")
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
		let { fname, lname, mobile, gender, hobbies, email, pwd, city, occupation } = this.state.error
		return (<>
			<div className="container card" style={{ margin: "30px" }}>
				<Row><Col><h3>Sign up</h3></Col></Row>
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
							onBlur={this.handleChange}
							isRequired={false}
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
							type="text"
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
					<Col>
						<CheckBox
							onChange={this.handleChangeCheck}
							isRequired={true}
							title="Hobbies"
							error={hobbies}
						/>

					</Col>
					<Col>
						<RadioButton
							onChange={this.handleChange}
							error={gender}
							isRequired={true}
							title="Gender"
						/>

					</Col>

				</Row>
				<Row>
					<Col>
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
					<Col>
						<DropDown
							name="city"
							onChange={this.handleChange}
							error={city}
							isRequired={true}
							title="City"
							option={['Ahmedabad', 'Delhi', 'Mumbai']}
							isRequired={true}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button variant="primary" onClick={this.handleClick}>Submit</Button>
					</Col>
				</Row>
			</div>
		</>
		)
	}
}
export default Form;