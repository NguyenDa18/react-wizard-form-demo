import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const UserDetails = ({ nextStep, values, handleChange, step }) => {
	return (
		<Form color='green' >
			<h1 className="ui centered">Enter User Details</h1>
			<Form.Field>
				<label>First Name</label>
				<input
					name="firstName"
					placeholder='First Name'
					onChange={handleChange}
					defaultValue={values.firstName}
				/>
			</Form.Field>
			<Form.Field>
				<label>Last Name</label>
				<input
					name="lastName"
					placeholder='Last Name'
					onChange={handleChange}
					defaultValue={values.lastName}
				/>
			</Form.Field>
			<Form.Field>
				<label>Email Address</label>
				<input
					name="email"
					type='email'
					placeholder='Email Address'
					onChange={handleChange}
					defaultValue={values.email}
				/>
			</Form.Field>
			<Button primary onClick={e => nextStep(step)}>Save And Continue </Button>
		</Form>
	);
}; 

export default UserDetails;