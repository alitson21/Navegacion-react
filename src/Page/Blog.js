import { useState } from 'react';
import Comentario from '../Componentes/Comentarios';
import '../css/blog.css';

var arraycomentarios = [
    {
        id: 1,
        dato: 'Este es el primer mensaje del Blog Saludos'
    },
    {
        id: 1,
        dato: 'Nose porque tengo que pulsar dos veces cargar comentario para que se genere uno nuevo'
    }
]

function Blog() {
    const [Textoingresado, SetTextoingresado] = useState('')
    const [comentario, SetComentario] = useState([
        {
            id: 0,
            dato: ''
        }
    ])
    const [ReadLoad, SetReadLoad] = useState(arraycomentarios.length)

    const handleTextoingresado = (e) => {
        //console.log(e.target.value);
        SetTextoingresado(e.target.value)
    }

    const handleCargarComentario = () => {
        //console.log(Textoingresado)
        SetComentario(
            {
                id: arraycomentarios.length + 1,
                dato: Textoingresado
            }
        )
        //console.log(comentario)
        arraycomentarios.push(comentario)
        Reset()
    }

    const Reset = () => {
        document.getElementById('inputtexto').value = ''
    }


    return (
        <div className='blog'>
            <h2>Bienvenidos al Blog</h2>
            <p>Donde puden dejar sus comentarios hacerca del tema</p>
            <div className='insert-blog'>
                <input type='text' className='form-control' onChange={handleTextoingresado} placeholder='Ingrese su comentario' id='inputtexto' />
                <button className='btn btn-primary' onClick={handleCargarComentario}>Cargar comentario</button>
            </div>
            <div className='listado-comentarios'>
                <h3>Listado de Comentarios</h3>
                {ReadLoad &&
                    arraycomentarios.map((item) =>
                        <Comentario texto={item.dato} id={item.id}></Comentario>
                    )
                }
            </div>
        </div>
    )
}


export default Blog;