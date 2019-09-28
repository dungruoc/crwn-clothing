import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = (value) => {
  const valueInCents = value * 100;
  const publicKey = 'pk_test_jdzJmO5wlZwTG6GaixcVdtOp00SI4PPZzF';

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total value is $${value}`}
      amount={valueInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
}

export default StripeCheckoutButton;
