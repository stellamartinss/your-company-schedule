import React from 'react'
import './App.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './locales/i18n' // Create i18n configuration file

import Router from './Router'

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </>
  )
}

export default App
