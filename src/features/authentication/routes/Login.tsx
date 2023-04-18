import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { Layout } from '../components/Layout';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Log in to your account">
      {/* <LoginForm onSuccess={() => navigate('/app')} /> */}
      <LoginForm />
    </Layout>
  );
};
