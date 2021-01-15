import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FromContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from '../Signin/Sttyle';

function Signin() {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">dolla</Icon>
                <FromContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required></FormInput>
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required></FormInput>
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FromContent>
            </FormWrap>
        </Container>
    )
}

export default Signin