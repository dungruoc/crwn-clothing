import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';
import { googleSignInStartAction, emailSignInStartAction } from '../../redux/user/user.actions';

class SignIn extends React.Component {

  state = {
    email: '',
    password: ''
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const {emailSignInStart} = this.props;
    emailSignInStart(email, password);
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <TitleContainer>I have already an account</TitleContainer>
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
          <ButtonsContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} customStyle="google-sign-in">Sign in with Google</CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStartAction()),
  emailSignInStart: (email, password) => dispatch(emailSignInStartAction({email: email, password: password}))
});

export default connect(null, mapDispatchToProps)(SignIn);