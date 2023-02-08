import { useState, useEffect } from 'react';
import '../css/proyectos.css';

function Proyectos() {
    const [ImagenGracias, SetImagenGracias] = useState('');


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/growlithe')
            .then(respuesta => respuesta.json())
            .then(dato => {
                console.log(dato.sprites.front_default)
                SetImagenGracias(dato.sprites.front_default)
            })
    });


    return (
        <div className='proyectos'>
            <h3>Descripcion y Errores</h3>
            <p>Uno de los errores que presente  fuen cuando   useEffect(() en el componete Imagenes para llamar a una Api </p>
            <p>Al hacer esto me bloqueaba la navegacion del Route</p>
            <p>por que ? ni idea ?</p>
            <p>Despues indagando me di cuenta que estaba usando mal el useEffect</p>
            <p>y logre llamar a la api que quiera</p>
            <div className='imagen-gracias'>
                <h4>Gracias por este proyecto</h4>
                <p>Pude practicar varias cosas a la vez</p>
                <img src={ImagenGracias} alt={ImagenGracias} />
            </div>
        </div>
    )
}


export default Proyectos