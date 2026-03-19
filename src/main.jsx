import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TreeProvider } from './context/TreeContext'
import './index.css'
import './i18n'
import App from './App.jsx'
import AuthVerifyPage from './components/AuthVerifyPage.jsx'
import JoinPage from './components/JoinPage.jsx'
import PublicProfile from './components/PublicProfile.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TreeProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth/verify" element={<AuthVerifyPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/p/:slug" element={<PublicProfile />} />
      </Routes>
    </TreeProvider>
  </BrowserRouter>
)
