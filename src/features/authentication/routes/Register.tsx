import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import { Layout } from '../components/Layout';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Log in to your account">
      {/* <LoginForm onSuccess={() => navigate('/app')} /> */}
      <RegisterForm />
    </Layout>
  );
};
