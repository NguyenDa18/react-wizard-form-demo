import React from 'react'
import { Button, List } from 'semantic-ui-react'

const Confirmation = ({ prevStep, nextStep, values, step }) => {
    return (
        <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>First Name: {values.firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Last Name: {values.lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:jack@semantic-ui.com'>{values.email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='calendar' />
                        <List.Content>{values.age} Years</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>{values.city}, {values.country}</List.Content>
                    </List.Item>
                </List>

                <Button secondary onClick={e => prevStep(step)}>Back</Button>
                <Button primary onClick={e => nextStep(step)}>Confirm</Button>
            </div>
    )
}

export default Confirmation