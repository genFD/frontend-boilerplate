import { Route, Routes } from 'react-router-dom';
import { Landing } from '../components/Layout';

export const LandingRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
