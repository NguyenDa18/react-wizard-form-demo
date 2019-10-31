import React, { useState } from 'react';

import StepGroup from './StepGroup';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';

const INITIAL_FORM = {
	firstName: '',
	lastName: '',
	email: '',
	age: '',
	city: '',
	country: ''
};

const MainForm = () => {
	const [step, setStep] = useState(1);
	const [form, setForm] = useState(INITIAL_FORM);
	const [completed, setCompleted] = useState(false);
	const [active, setActive] = useState(true);

	const prevStep = (step) => {
		setStep(step - 1);
		handleActive();
		handleCompleted();
	};
	const nextStep = (step) => {
		setStep(step + 1);
		handleActive();
		handleCompleted();
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setForm(prevState => ({ ...prevState, [name]: value }));
		console.log(form);
	}; 
	const handleCompleted = () => setCompleted(!completed);
	const handleActive = () => setActive(!active);
	const values = { ...form };

	switch(step) {
	case 1: 
		return (
			<div>
				<h1>{step}</h1>
				<StepGroup step={step} />
				<UserDetails nextStep={nextStep} handleChange={handleChange} values={values} step={step}  />
			</div>
		); 
	case 2:
		return (
			<div>
				<h1>{step}</h1>
				<StepGroup step={step} />
				<PersonalDetails prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={values} step={step}  />
			</div>
		);
	case 3:
		return (
			<div>
				<h1>{step}</h1>
				<StepGroup step={step} />
				<Confirmation prevStep={prevStep} nextStep={nextStep} values={values} step={step}  />
			</div>
		);
	default:
		return <div>Default</div>;
	}
};

export default MainForm;