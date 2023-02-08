import Carousel from 'react-bootstrap/Carousel';
import Imagen1 from '../Imagenes/imagen1.png';
import Imagen2 from '../Imagenes/imagen2.png';
import Imagen3 from '../Imagenes/imagen3.png';

import '../css/imagenes.css';


function Imagenes() {
    return (
        <div className='Carousel'>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Imagen1}
                        alt='Imagen de Codigo'
                    />
                    <Carousel.Caption>
                        <h3>En esta primera imagen se generan las rutas</h3>
                        <p>Las Route definen a que componente se redirecciona</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Imagen2}
                        alt='Imagen de codigo'
                    />

                    <Carousel.Caption>
                        <h3>En esta seguna imagen se definen los link</h3>
                        <p>Los Link son similares a los "a" en Html</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Imagen3}
                        alt='Imagen de codigo'
                    />

                    <Carousel.Caption>
                        <h3>En esta tercera imagen se representan los componentes</h3>
                        <p>En esta tercera imagen se observan los componentes a llamar</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default Imagenes;