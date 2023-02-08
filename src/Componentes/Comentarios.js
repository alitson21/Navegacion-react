function Comentario(props) {

    return (
        <>
            <div className='estructura-comentario'>
                <b># {props.texto}</b>
                <button className='btn btn-secondary visto'>Visto</button>
                <button className='btn btn-danger eliminar'>Eliminar</button>
            </div>
        </>
    )
}

export default Comentario