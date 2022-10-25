import { NavLink, Link } from "react-router-dom";
import "./Footer.css";
const INACTIVE_LINK_STYLES:string = 'text-2xl text-white hover:text-indigo-50 hover-underline-animation';
const ACTIVE_LINK_STYLES:string = 'text-2xl text-primary-500 hover-underline-animation-active';

const Footer:React.FC = () => {

    return (
        <footer className="bg-gray-700 border-t-2 border-primary-500">
            <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
                <nav className="hidden md:flex -mx-5 -my-2 flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <NavLink to="/" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Home</NavLink>
                    </div>

                    <div className="px-5 py-2">
                        <NavLink to="/near-earth-objects" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Near Earth Objects</NavLink>
                    </div>

                    <div className="px-5 py-2">
                        <NavLink to="/asteroid-search" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>Asteroid Search</NavLink>
                    </div>

                    <div className="px-5 py-2">
                        <NavLink to="/epic" className={navData => navData.isActive ? ACTIVE_LINK_STYLES : INACTIVE_LINK_STYLES } end>EPIC</NavLink>
                    </div>
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                <a href="https://www.facebook.com/Trailblazer780" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6 hover:fill-primary-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                </a>

                <a href="https://github.com/Trailblazer780" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6 hover:fill-primary-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                </a>

                <a href="https://www.linkedin.com/in/ethan-d-farrell-/" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Linkedin</span>
                    <svg  className="h-6 w-6 hover:fill-primary-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                </a>

                <a href="https://www.youtube.com/channel/UCLr4h8UWh_FiuvJvOMGApkg" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Youtube</span>
                    <svg className="h-6 w-6 hover:fill-primary-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>                </a>

                </div>
                <p className="mt-8 text-center text-base text-gray-400">&copy; 2022 <a href="https://ethanfarrell.ca" className="text-primary-500 hover:text-primary-700 underline">Ethan Farrell</a>. All rights reserved. Powered By: <a className="text-primary-500 hover:text-primary-700 underline" href="https://api.nasa.gov/">Nasa Open Web API</a> </p>
            </div>
            </footer>
    );

}

export default Footer