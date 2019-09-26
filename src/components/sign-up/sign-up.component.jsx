import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {

  state = {
    displayName: '',
    email: '',
    password: '',
    confirmedPassword: ''
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmedPassword } = this.state;

    console.log(this.state);
    if (password !== confirmedPassword) {
      alert('Confirmed password not match');
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmedPassword: ''
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email address</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          {
            [{ label: "Name", name: "displayName", type: "text", value: displayName, onChange: this.handleChange },
            { label: "Email", name: "email", type: "email", value: email, onChange: this.handleChange },
            { label: "Password", name: "password", type: "password", value: password, onChange: this.handleChange },
            { label: "Confirm your password", name: "confirmedPassword", type: "password", value: confirmedPassword, onChange: this.handleChange }
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
}

export default SignUp;