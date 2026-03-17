import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/ibm-plex-sans/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import './index.css'
import App from './App'
import HomePage from './pages/HomePage'
import AppointmentPage from './pages/AppointmentPage'
import ExpertQnaPage from './pages/ExpertQnaPage'
import AdsDspPage from './pages/AdsDspPage'
import AutoAdReviewerPage from './pages/AutoAdReviewerPage'
import CrmMessagePage from './pages/CrmMessagePage'
import MedicalCounselPage from './pages/MedicalCounselPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/interactive-proposals/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="appointment" element={<AppointmentPage />} />
          <Route path="expert-qna" element={<ExpertQnaPage />} />
          <Route path="ads-dsp" element={<AdsDspPage />} />
          <Route path="auto-ad-review" element={<AutoAdReviewerPage />} />
          <Route path="crm-message" element={<CrmMessagePage />} />
          <Route path="medical-counsel" element={<MedicalCounselPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
