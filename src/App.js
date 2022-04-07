// IMPORT
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, NotFound } from './pages';

// EXPORT
export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
