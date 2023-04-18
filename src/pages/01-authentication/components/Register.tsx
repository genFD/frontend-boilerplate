import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '@/features/authentication';
import { Layout } from '@/pages';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Register to your account">
      {/* <LoginForm onSuccess={() => navigate('/app')} /> */}
      <RegisterForm />
    </Layout>
  );
};
