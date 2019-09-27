import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {

  state = {
    email: '',
    password: ''
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log(err.message);
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I have already an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          {
            [{ label: "Email", name: "email", type: "email", value: email, onChange: this.handleChange },
            { label: "Password", name: "password", type: "password", value: password, onChange: this.handleChange },
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
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} customStyle="google-sign-in">Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;