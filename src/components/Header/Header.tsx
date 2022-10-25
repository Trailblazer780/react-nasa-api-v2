import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Header.css';

const INACTIVE_LINK_STYLES:string = 'text-2xl text-white hover:text-indigo-50 hover-underline-animation';
const ACTIVE_LINK_STYLES:string = 'text-2xl text-primary-500 hover-underline-animation-active';

const Header = () => {


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
                    <div className="flex flex-col justify-center py-4 lg:hidden">
                        <NavLink to="/" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Home</NavLink>
                        <NavLink to="/near-earth-objects" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Near Earth Objects</NavLink>

                        <NavLink to="/asteroid-serach" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Asteroid Search</NavLink>

                        <NavLink to="/epic" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>EPIC</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )

}

export default Header;