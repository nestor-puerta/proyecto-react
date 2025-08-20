import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'
import Layout from './components/LayOut';
import Rutas from '../rutas';

function App() {
  return (
    <>

      <Layout>
        <Rutas />
      </Layout>
    </>
  )
}

export default App;