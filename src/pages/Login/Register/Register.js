import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSendEmailVerification } from 'react-firebase-hooks/auth';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleName = event => {
        setName(event.target.value)
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = async event => {
        event.preventDefault();
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        await sendEmailVerification();
    }

    return (
        <div className='mt-5 p-5'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='d-flex justify-content-start'>Your name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='d-flex justify-content-start'>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='d-flex justify-content-start'>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error?.message}</p>

                <Button className='w-50 m-3 text-dark' variant="warning" type="submit">
                    Register
                </Button>
                <p className='d-flex justify-content-start'>Already have an account? <Link className='text-primary text-decoration-none ms-2' to='/login'>Please login</Link></p>
                {/* <SocialLogin/> */}
            </Form>

        </div>
    );
};

export default Register;