import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss';
import App from './App.tsx'
import AppLayout from './components/hoc/pageLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout>
      <App />
    </AppLayout>
  </StrictMode>,
)
