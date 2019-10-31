import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const PersonalDetails = ({ prevStep, nextStep, handleChange, values, step }) => {
	return (
		<Form color='blue' >
			<h1 className="ui centered">Enter Personal Details</h1>
			<Form.Field>
				<label>Age</label>
				<input placeholder='Age'
					name="age"
					onChange={handleChange}
					defaultValue={values.age}
				/>
			</Form.Field>
			<Form.Field>
				<label>City</label>
				<input placeholder='City'
					name="city"
					onChange={handleChange}
					defaultValue={values.city}
				/>
			</Form.Field>
			<Form.Field>
				<label>Country</label>
				<input placeholder='Country'
					name="country"
					onChange={handleChange}
					defaultValue={values.country}
				/>
			</Form.Field>
			<Button secondary onClick={e => prevStep(step)}>Back</Button>
			<Button primary onClick={e => nextStep(step)}>Save And Continue </Button>
		</Form>
	);
};

export default PersonalDetails;