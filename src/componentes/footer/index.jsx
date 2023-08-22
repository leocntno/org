import './footer.css'

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.linkedin.com/in/leonardo-centeno-guerrero-226149189/'>
            <img src="/img/linkedin.png" alt='LinkedIn' />
        </a>
        <a href='https://github.com/leocntno'>
            <img src="/img/github.png" alt='github' />
        </a>
        <a href='https://www.instagram.com/leocntno'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por LEO</strong>
</footer>
}

export default Footer