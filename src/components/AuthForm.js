import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from 'react-router-dom';

import classes from './AuthForm.module.css';

async function authenticate() {
  // ...
  localStorage.setItem("address", await signer.getAddress());
  onAuthenticated(provider);
}

function disconnect() {
  localStorage.removeItem("address");
  setAddress(null);
  onAuthenticated(null);
}


function AuthForm() {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method="post" className={classes.form}>
      {address ? (
        <div>
          <p>Connected with address: {address}</p>
          <button onClick={disconnect}>Disconnect Wallet</button>
          {onClose && <button onClick={onClose}>Close</button>}
        </div>
      ) : (
        <button onClick={authenticate}>Connect Wallet</button>
      )}
      </Form>
    </>
  );
}

export default AuthForm;
