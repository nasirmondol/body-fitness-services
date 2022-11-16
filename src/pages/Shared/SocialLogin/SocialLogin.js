import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import github from '../../../images/social/GitHub.png'
import google from '../../../images/social/google.png'
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    if(user || gitUser){
        navigate('/home')
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mt-2 m-3'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {/* <p>{errorElement}</p> */}
            <div>

                <Button onClick={() => signInWithGoogle()} className="mb-3 btn btn-info w-50 d-block mx-auto my-2">
                    <img src={google} alt="" />
                    <span className='px-2'>Google Login</span>
                </Button>
                
                <Button onClick={() => signInWithGithub()} className="btn btn-primary w-50 d-block mx-auto">
                    <img src={github} alt="" />
                    <span className='px-2'>Github Login</span>
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;