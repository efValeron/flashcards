import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { App } from 'src/app/App'

import '@/app/styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
