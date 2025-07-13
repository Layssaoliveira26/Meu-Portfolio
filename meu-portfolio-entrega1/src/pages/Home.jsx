import './Home.css';
import { Link } from 'react-router-dom';
import Mode from '../assets/light_mode.svg'
import Menu from '../assets/menu.svg'
import Photo from '../assets/photo.png'

function Home() {

    return (
        <div className="container">
            {/*nav*/}
            <nav>
                <div className='logo'>
                    <Link to="/">Portfólio</Link>
                </div>
                <ul>
                    <li><Link to="">Sobre Mim</Link></li>
                    <li><Link to="">Habilidades</Link></li>
                    <li><Link to="">Projetos</Link></li>
                    <li><Link to="">Entre em Contato</Link></li>
                    <button className="change-mode">
                        <img src={Mode} alt="Mudar modo"></img>
                    </button>
                </ul>
                <div className="menu-icon">
                    <img src={Menu} alt=''></img>
                </div>
            </nav>
            {/*end nav*/}

            {/*main*/}
            <main>
                <div className="text-bx">
                    <h1>Olá! Eu sou a</h1>
                    <h1><b>Layssa Oliveira</b></h1>
                    <p>
                        Uma técnica em Informática e acadêmica em Engenharia de Software pela UFC. Com base nas experiências em 
                        Suporte de Sistemas e na formação técnica e acadêmica, tenho me dedicado ao aprimoramento em Desenvolvimento
                        e Engenharia de Software. Para isso, estou realizando um curso de Desenvolvimento Full Stack, buscando aprofundar
                        meus conhecimentos e fortalecer meu portfólio.
                    </p>
                    <div className="btns-main">
                        <button className="btn_curriculum">Download CV</button>
                        <button className="btn_contato">Entre em Contato</button>
                    </div>
                    <div className="social-medias">
                        <Link to="https://www.linkedin.com/in/layssaoliveira26/"><i className="fa fa-linkedin"></i></Link>
                        <Link to="https://github.com/Layssaoliveira26"><i className="fa fa-github"></i></Link>
                        <Link to="layssaoliveira626@gmail.com"><i className="fa fa-envelope"></i></Link>
                        <Link to="https://wa.me/5588997848056?text=Ol%C3%A1%2C%20seja%20bem-vindo(a)!%20Vamos%20conversar%20sobre%20desenvolvimento%20%7C%20engenharia%20de%20software%3F"><i className="fa fa-whatsapp"></i></Link>
                    </div>
                </div>
                <div className='img-bx'>
                    <img src={Photo} alt="Foto de apresentação pessoal"></img>
                </div>
            </main>
            {/*end main*/}
        </div>
    )

}

export default Home