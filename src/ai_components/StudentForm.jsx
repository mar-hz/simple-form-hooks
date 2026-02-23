import React, { useState, useEffect } from 'react';
import { useFocus } from './useFocus';
import './StudentForm.css';

export function StudentForm() {
  const [formState, setFormState] = useState({
    matricula: '',
    nombre: '',
    apellidos: '',
    edad: '',
    universidad: '',
    carrera: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const firstInputRef = useFocus();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    // Whenever the form state changes after submission we could perform side effects.
    if (submitted) {
      console.log('Datos enviados:', formState);
    }
  }, [formState, submitted]);

  return (
    <div className="student-form-container">
      <h2>Formulario de estudiante</h2>
      {!submitted && (
        <form onSubmit={handleSubmit} className="student-form">
          <input
            ref={firstInputRef}
            name="matricula"
            type="text"
            placeholder="Matrícula"
            value={formState.matricula}
            onChange={handleChange}
            required
          />
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            value={formState.nombre}
            onChange={handleChange}
            required
          />
          <input
            name="apellidos"
            type="text"
            placeholder="Apellidos"
            value={formState.apellidos}
            onChange={handleChange}
            required
          />
          <input
            name="edad"
            type="number"
            placeholder="Edad"
            value={formState.edad}
            onChange={handleChange}
            required
          />
          <input
            name="universidad"
            type="text"
            placeholder="Universidad"
            value={formState.universidad}
            onChange={handleChange}
            required
          />
          <input
            name="carrera"
            type="text"
            placeholder="Carrera"
            value={formState.carrera}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      )}

      {submitted && (
        <div className="student-data">
          <p>Matrícula: {formState.matricula}</p>
          <p>Nombre: {formState.nombre}</p>
          <p>Apellidos: {formState.apellidos}</p>
          <p>Edad: {formState.edad}</p>
          <p>Universidad: {formState.universidad}</p>
          <p>Carrera: {formState.carrera}</p>
          <button onClick={() => setSubmitted(false)}>Volver</button>
        </div>
      )}
    </div>
  );
}
