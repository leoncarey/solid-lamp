import React from 'react'
import Router from 'next/router'
import { Formik } from 'formik'

import FormControl from '../FormInput'
import Button from '../Button'
import CheckboxButton from '../CheckboxButton'

import {
    FormWrapper
} from './styles'

const FormLogin: React.FC = () => {
    const initialValues = {
        emailUser: '',
        passwordUser: '',
        keepLogged: false
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                console.log('Values here =====> ', values)
                actions.resetForm()

                Router.push('/')
            }}
            >
            {props => (
                <FormWrapper
                    onSubmit={props.handleSubmit}
                    >
                    <FormControl
                        type="text"
                        name="emailUser"
                        autocomplete="off"
                        value={props.values.emailUser}
                        labelText="Email"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />

                    <FormControl
                        type="password"
                        name="passwordUser"
                        labelText="Password"
                        autocomplete="off"
                        value={props.values.passwordUser}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                    />

                    <CheckboxButton
                        id="keepLogged"
                        name="keepLogged"
                        value={props.values.keepLogged}
                        labelText="Manter logado"
                        onChange={props.handleChange}
                    />

                    <Button type="submit">Entrar</Button>
                </FormWrapper> 
            )}
            </Formik>
    )
}

export default FormLogin