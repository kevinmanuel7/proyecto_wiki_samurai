import './Header.css'
import logo from '../assets/portadapagina.png'
import {userState, useState} from 'react'

function Header() {
    const [menuAbierto, setMenuAbierto] = useState(false)

    return (
        <>
            <header className="header-principal">

                <div className="header-izq">
                    <button 
                        className="btn-menu"
                        onClick={() => setMenuAbierto(!menuAbierto)}
                    >   
                        ☰
                    </button>
                </div>

                <div className="header-centro">
                    <img src={logo} alt="Samurai Wiki" />
                </div>

                <div className="header-der">
                    <form className="form-busqueda">
                        <input type="text" />
                        <button type="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-search"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0"/>
                            </svg>
                        </button>
                    </form>
                </div>

            </header>

            {menuAbierto && (
                <nav className={`menu-desplegable ${menuAbierto ? 'visible' : ''}`}>
                    <ul>
                        <li>Historia</li>
                        <li>Samurai famosos</li>
                        <li>Armas</li>
                        <li>Cultura</li>
                    </ul>
                </nav>
            )}
        </>
    )
}

export default Header