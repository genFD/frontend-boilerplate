import { Route, Routes } from 'react-router-dom';
import { Register, Login } from '@/pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
