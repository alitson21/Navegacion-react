import '../css/footer.css'

function Footer() {

    const Getfecha = '20/01/2023';

    return (
        <div className='footer'>
            <p>Creado por: <strong>Alitson Martinez</strong></p>
            <p>date : {Getfecha}</p>
            <p>Copyrithg @</p>
        </div>
    )
}

export default Footer