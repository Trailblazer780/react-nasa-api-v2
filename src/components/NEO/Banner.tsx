type Props ={
    asteroidCount: number
}

const Banner:React.FC<Props> = (props) => {

    return (
        <div className="pb-2 sm:pb-5">
            <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-gray-700 p-2 shadow-lg sm:p-3 border-2 border-primary-500">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex w-0 flex-1 items-center justify-center">
                    <h2 className="ml-3 truncate text-white text-lg md:text-2xl lg:text-4xl">
                        <span className="md:hidden">Asteroids Near Earth Right Now: {props.asteroidCount}</span>
                        <span className="hidden md:inline">Asteroids Near Earth Right Now: {props.asteroidCount}</span>
                    </h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Banner