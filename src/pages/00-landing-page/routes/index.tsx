import { Route, Routes } from 'react-router-dom';
import { Landing } from '@/pages';

export const LandingRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
