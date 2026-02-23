import React from 'react'
import { useEffect, useState } from 'react';
import { Message } from './Message';
import './Form.css';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        matricula: '',
        nombre: '',
        apellidos: '',
        edad: '',
        universidad: '',
        carrera: '',
    });
    
    const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;
    
    const [isVisible, setIsVisible] = useState(false);
    const onBtnClick = () => {
        setIsVisible(!isVisible);
    };

    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setFormState({...formState, [name]: value});
    }

    useEffect( () => {
        // console.log('useEffect called!');
    }, []);
    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);

  return (
    <>
        {/* <h1>Formulario Simple</h1><hr />

        <input type="text" className="form-control" placeholder="Matricula" name="matricula"
            value={ matricula }
            onChange={ onInputChange }
        />

        <input type="text" className="form-control mt-2" placeholder="Nombre" name="nombre"
            value={ nombre }
            onChange={ onInputChange }
        /> */}

        {!isVisible && (<div className="contact-us">
            <form>
                <input placeholder="Matricula" type="text" required="" value={matricula} 
                    onChange={ onInputChange } name="matricula"/>
                <input placeholder="Nombre" type="text" required="" value={nombre}
                    onChange={ onInputChange } name="nombre"/>
                <input placeholder="Apellidos" type="text" required="" value={apellidos}
                    onChange={ onInputChange } name="apellidos"/>
                <input placeholder="Edad" type="number" required="" value={edad}
                    onChange={ onInputChange } name="edad"/>
                <input placeholder="Universidad" type="text" required="" value={universidad}
                    onChange={ onInputChange } name="universidad"/>
                <input placeholder="Carrera" type="text" required="" value={carrera}
                    onChange={ onInputChange } name="carrera"/>
                
                <button type="button" onClick={ onBtnClick }>Sign Up</button>
            </form>
        </div>)}

        {isVisible && (
            <div className="contact-us" style={{marginTop: '30px'}}>
                <p>Matricula: { matricula }</p>
                <p>Nombre: { nombre }</p>
                <p>Apellidos: { apellidos }</p>
                <p>Edad: { edad }</p>
                <p>Universidad: { universidad }</p>
                <p>Carrera: { carrera }</p>

                <button type="button" onClick={ onBtnClick }>Return</button>
            </div>
        )}
    </>
  )
}