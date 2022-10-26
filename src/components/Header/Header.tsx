import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.css';

const INACTIVE_LINK_STYLES:string = 'text-2xl text-white hover:text-indigo-50 hover-underline-animation';
const ACTIVE_LINK_STYLES:string = 'text-2xl text-primary-500 hover-underline-animation-active';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 w-full bg-gray-700 z-50 shadow lg:bg-opacity-80 lg:backdrop-filter lg:backdrop-blur-lg lg:border-b-2 lg:border-primary-500 animate__animated animate__fadeIn">
            <div className='container blur-none'> 
                <nav className="px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div className="flex w-full items-center justify-center border-b border-primary-500 py-2 lg:border-none">
                        <div className="flex items-center">
                            <NavLink to="/">
                                <span className="sr-only">Ethan Farrell's Nasa Open API Application</span>
                                <img className="h-24 w-auto" src={Logo} alt="TB" />
                            </NavLink>
                            <div className="ml-10 hidden space-x-8 lg:block">
                                <NavLink to="/" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Home</NavLink>
                                <NavLink to="/near-earth-objects" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Near Earth Objects</NavLink>

                                <NavLink to="/asteroid-search" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Asteroid Search</NavLink>

                                <NavLink to="/epic" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>EPIC</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-center py-4 lg:hidden">
                        {!menuOpen && <button onClick={() => setMenuOpen(!menuOpen)}><svg className="h-5 w-5 fill-primary-500 hover:fill-primary-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>}
                        {menuOpen && (
                            <div className="flex flex-col justify-center text-center lg:hidden">
                                <button className="text-center" onClick={() => setMenuOpen(!menuOpen)}><svg className="h-5 w-5 fill-primary-500 hover:fill-primary-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></button>
                                <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/" className={navData => navData.isActive ? ACTIVE_LINK_STYLES  : INACTIVE_LINK_STYLES  } end>Home</NavLink>
                                <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/near-earth-objects" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Near Earth Objects</NavLink>
        
                                <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/asteroid-search" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Asteroid Search</NavLink>
        
                                <NavLink onClick={() => setMenuOpen(!menuOpen)} to="/epic" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>EPIC</NavLink>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    )

}

export default Header;