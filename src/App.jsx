import React from 'react';
import './App.css';
import { StudentForm } from './ai_components/StudentForm';

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>Registro de estudiante</h1>
      <StudentForm />
    </>
  );
}

export default App
