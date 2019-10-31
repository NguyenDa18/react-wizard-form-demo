import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleGroup = ({ step, completed }) => (
  <Step.Group>
    <Step active={step === 1} completed={step > 1}>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step active={step === 2} completed={step > 2}>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step active={step === 3} completed={step > 3}>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleGroup