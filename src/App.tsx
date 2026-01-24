import { Route, Routes } from 'react-router';

import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import TransportPage from './pages/TransportPage/TransportPage';


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}
