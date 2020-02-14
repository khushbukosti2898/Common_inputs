import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
import './App.css'
import { Button, Row, Col } from 'react-bootstrap';

class Form extends React.Component {
	state = {
		fname:'',
		lname:'',
		email: '',
		pwd: '',
		hobbies: [],
		gender:'',
		error: {
			mobile: '',
			fname: '',
			lname: '',
			email: '',
			pwd: '',
			hobbies: '',
			gender: ''
		}
	}
	handleChangeCheck = (e) => {
		let { hobbies } = this.state;
		let { value, checked } = e.target;
		let index;
		if (checked) {
			hobbies.push(value);
		}
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
		let { error } = this.state;
		switch (name) {
			case 'email':
				if (value == '')
					error.email = "Email is required"
				else
					error.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' :
						"Email is invalid";
				break;

			case 'pwd':
				if (value == '')
					error.pwd = "Password is required"
				else
					error.pwd = value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/i) ? '' :
						"Password is invalid";
				break;

			case 'fname':
				if (value == '')
					error.fname = "First name is required"
				break;

			case 'lname':
				if (value == '')
					error.lname = "Last name is required"
				break;

			case 'mobile':
				if (value == '')
					error.mobile = "Mobile is required"
				else
					error.mobile = value.match(/^\d{10}$/) ? '' : 'Mobile is invalid';
				break;

			case 'gender':
				if (value == "")
					error.gender = "Select gender"
				else
					error.gender = '';
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
		let {fname,lname,mobile,gender,hobbies,email,pwd}=this.state.error
		return (<>
			<div className="container card">
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
				<Row><Col>Hobbies</Col></Row>
				<Row>
					<Col>
						<Input
							onChange={this.handleChangeCheck}
							type="checkbox"
							name="hobbies"
							value="swimming"
							title="Hobbies"
							label="Swimming"
							error={this.state.error.hobbies}
						/>

						<Input
							onChange={this.handleChangeCheck}
							type="checkbox"
							name="hobbies"
							value="reading"
							title="Hobbies"
							label="Reading"
							error={hobbies}
						/>

						<Input
							onChange={this.handleChangeCheck}
							type="checkbox"
							name="hobbies"
							value="cooking"
							title="Hobbies"
							label="Cooking"
							error={hobbies}
						/>

						<br />
					</Col>
				</Row>
				<Row>
					<Col>Gender</Col>
				</Row>
				<Row>
					<Col>
						<Input
							onChange={this.handleChange}
							type="radio"
							name="gender"
							value="male"
							label="Male"
							error={gender}
						/>
						<Input
							onChange={this.handleChange}
							type="radio"
							name="gender"
							value="female"
							label="Female"
							error={gender}
						/>
					</Col>
				</Row>



				<Button variant="primary" onClick={this.handleClick}>Submit</Button>
			</div>
		</>
		)
	}
}
export default Form;