import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DiagnosisPage from './pages/DiagnosisPage';
import ResultPage from './pages/ResultPage';
import DashboardPage from './pages/DashboardPage';
import EducationPage from './pages/EducationPage';
import MapsPage from './pages/MapsPage';
import ChatbotPage from './pages/ChatbotPage';


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/diagnosis' element={<DiagnosisPage />} />
            <Route path='/result' element={<ResultPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/education' element={<EducationPage />} />
            <Route path='/maps' element={<MapsPage />} />
            <Route path='/chatbot' element={<ChatbotPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
