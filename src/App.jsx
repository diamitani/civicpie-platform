import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WardPage from './pages/illinois/chicago/48thward/WardPage';
import './styles/design.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-mesh" />
      <Routes>
        {/* Directory routing — scalable per district */}
        <Route path="/illinois/chicago/48thward" element={<WardPage />} />
        {/* Default redirect to pilot */}
        <Route path="/" element={<Navigate to="/illinois/chicago/48thward" replace />} />
        <Route path="*" element={<Navigate to="/illinois/chicago/48thward" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
