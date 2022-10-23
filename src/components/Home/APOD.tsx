import { APODData } from "../../tools/data.model";

type Props ={
    data:APODData,
    setLoading: React.Dispatch<React.SetStateAction<any>>;
}

const APOD:React.FC<Props> = (props) => {

    return (
        <div className="container relative py-8">
            <div className="flex flex-col justify-center items-center py-2">
                <div className="px-6 pb-8 w-full rounded-xl shadow-lg border bg-gray-700 border-gray-700">
                    <h1 className="text-center m-2 text-2xl lg:text-4xl font-bold tracking-tight text-primary-500">Astronomy Picture of the Day</h1>
                    <h2 className="text-center m-2 text-xl lg:text-2xl text-gray-700 dark:text-gray-400">Todays date is: {props.data.date}</h2>
                    <h2 className="text-white text-center m-2">{props.data.title}</h2>
                </div>
            </div>
            <div className="flex justify-center py-8">
                <div className="px-10 py-10 w-max rounded-xl shadow-lg border bg-gray-500 border-gray-500 transition duration-300 hover:scale-125">
                    {props.data.media_type === "image" ? <a href={props.data.hdurl} target="_blank" rel="noreferrer"><img className="" alt="" src={props.data.url} onLoad={() => {props.setLoading(false)}}/></a> : <iframe className="APOD" width="853" height="505" src="https://www.youtube.com/embed/NS71ppsk7n0?rel=0" onLoad={() => {props.setLoading(false)}}> </iframe>}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-2">
                <div className="px-6 pb-8 w-full rounded-xl shadow-lg border bg-gray-700 border-gray-700">
                    <h2 className="text-center m-2 text-4xl text-primary-500">Photo Explaination</h2>
                    <p className="text-white text-xl">{props.data.explanation}</p>
                </div>
            </div>
        </div>
    );
}

export default APOD