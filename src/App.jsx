import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WardPage from './pages/illinois/chicago/48thward/WardPage';
import WardDirectory from './pages/directory/WardDirectory';
import EntityDetail from './pages/directory/EntityDetail';
import './styles/design.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-mesh" />
      <Routes>
        {/* District Home */}
        <Route path="/illinois/chicago/48thward" element={<WardPage />} />
        
        {/* Community Directory — Multi-Page */}
        <Route path="/directory" element={<WardDirectory />} />
        <Route path="/directory/:category" element={<WardDirectory />} />
        <Route path="/directory/item/:entityId" element={<EntityDetail />} />

        {/* Default redirect to pilot */}
        <Route path="/" element={<Navigate to="/illinois/chicago/48thward" replace />} />
        <Route path="*" element={<Navigate to="/illinois/chicago/48thward" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
