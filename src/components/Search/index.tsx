import {useRef} from 'react';
import { useNavigate } from "react-router-dom";

const Search:React.FC = () => {
    
    const navigate = useNavigate();

    const neoIdInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {

        event.preventDefault();
        const enteredId = neoIdInputRef.current!.value;
        console.log(enteredId);
        navigate(`/asteroid/${enteredId}`);
    }

    return (

        <div className="container relative py-8">
        <div className="relative flex flex-col justify-center items-center py-2">
            <div className="px-6 pb-8 w-full rounded-xl shadow-lg border bg-gray-700 border-primary-500 animate__animated animate__fadeIn">
                <h1 className="animate__animated animate__fadeIn text-center mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-primary-500">Asteroid Search</h1>
                <form onSubmit={submitHandler}>
                    <div className="flex w-full justify-center">
                        <div className="mt-1 flex w-full md:w-1/2 rounded-md shadow-sm">
                            <div className="relative flex flex-grow items-stretch focus-within:z-10">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.7 .9L299.4 75.6l2.3-29.3c1-12.8-12.8-21.5-24-15.1L101.3 133.4C38.6 169.7 0 236.6 0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3L480.8 234.3c6.5-11.1-2.2-25-15.1-24l-29.3 2.3L511.1 18.3c.6-1.5 .9-3.2 .9-4.8C512 6 506 0 498.5 0c-1.7 0-3.3 .3-4.8 .9zM192 448c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128s-57.3 128-128 128zm0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm16 96c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z"/></svg>
                            </div>
                                <input type="text" ref={neoIdInputRef} className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 sm:text-sm" placeholder="NEO ID" />
                            </div>
                            <button type="submit" className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Search;