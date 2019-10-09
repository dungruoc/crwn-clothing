import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';
import { googleSignInStartAction, emailSignInStartAction } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <SignInContainer>
      <TitleContainer>I have already an account</TitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        {
          [{ label: "Email", name: "email", type: "email", value: email, onChange: handleChange },
          { label: "Password", name: "password", type: "password", value: password, onChange: handleChange },
          ].map(({ label, name, type, value, onChange }, idx) => (
            <FormInput
              key={idx}
              label={label}
              name={name}
              type={type}
              value={value}
              required
              onChange={onChange}
            />
          ))
        }
        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} customStyle="google-sign-in">Sign in with Google</CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStartAction()),
  emailSignInStart: (email, password) => dispatch(emailSignInStartAction({ email: email, password: password }))
});

export default connect(null, mapDispatchToProps)(SignIn);