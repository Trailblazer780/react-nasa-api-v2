import {Link} from 'react-router-dom';
import Logo from '../../../assets/logo.png';

const Error:React.FC = () => {

    return (
        <>
            <div className="flex min-h-full flex-col pt-16 pb-12">
            <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="flex flex-shrink-0 justify-center">
                <a href="/" className="inline-flex">
                    <span className="sr-only">Your Company</span>
                    <img className="h-44 w-auto" src={Logo} alt="" />
                </a>
                </div>
                <div className="py-6">
                <div className="text-center">
                    <p className="text-5xl font-semibold text-primary-500">404</p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found.</h1>
                    <p className="mt-2 text-base text-black">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-6">
                    <Link to='/' className="text-base font-medium text-primary-500">
                        Go back home
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                    </div>
                </div>
                </div>
            </main>
            </div>
        </>
    );
}

export default Error