import { Route, Routes } from 'react-router-dom';
import { Register } from '../components/Register';
import { Login } from '../components/Login';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
