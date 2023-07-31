import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  const { setUser, authUser } = useAuth();
  const navigate = useNavigate();

  return <AuthForm onGoogleSignIn={signIn} />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const { setUser, authUser } = useAuth();

  const id_token = request.headers.get('Authorization');
  
  if (!id_token) {
    throw new Error('No authentication token provided.');
  }

  const user = await authUser({ id_token });
  setUser(user);

  return redirect('/');
}