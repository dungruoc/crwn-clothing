import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { signUpStartAction } from '../../redux/user/user.actions';

const SignUp = ({ startSignUp }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: ''
  });

  const { displayName, email, password, confirmedPassword } = userCredentials;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      alert('Confirmed password not match');
    }

    try {
      startSignUp(email, password, displayName);
      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmedPassword: ''
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email address</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        {
          [{ label: "Name", name: "displayName", type: "text", value: displayName, onChange: handleChange },
          { label: "Email", name: "email", type: "email", value: email, onChange: handleChange },
          { label: "Password", name: "password", type: "password", value: password, onChange: handleChange },
          { label: "Confirm your password", name: "confirmedPassword", type: "password", value: confirmedPassword, onChange: handleChange }
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
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  startSignUp: (email, password, displayName) => dispatch(signUpStartAction({ email: email, password: password, displayName: displayName }))
})

export default connect(null, mapDispatchToProps)(SignUp);