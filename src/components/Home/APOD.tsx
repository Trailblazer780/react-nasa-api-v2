import { APODData } from "../../tools/data.model";
import './APOD.css';
type Props ={
    data:APODData,
    setLoading: React.Dispatch<React.SetStateAction<any>>;
}

const APOD:React.FC<Props> = (props) => {


    return (
        <div className="container relative py-8">
            <div className="relative flex flex-col justify-center items-center py-2">
                <div className="px-6 pb-8 w-full rounded-xl shadow-lg border bg-gray-700 border-primary-500 animate__animated animate__fadeIn">
                    <h1 className="animate__animated animate__fadeIn text-center mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-primary-500">Astronomy Picture of the Day</h1>
                    <h2 className="animate__animated animate__fadeIn animate__delay-1s text-center m-2 text-xl lg:text-2xl text-gray-300">Todays date is: {props.data.date}</h2>
                    <h2 className="animate__animated animate__fadeIn animate__delay-2s text-white text-center m-2">{props.data.title}</h2>
                </div>
            </div>

            <div className="relative blur-everything flex justify-center py-8 animate__animated animate__fadeIn animate__delay-3s z-20">
                {props.data.media_type === "image" &&
                    <div className="px-10 py-10 w-max rounded-xl shadow-lg border bg-gray-600 border-primary-500 transition duration-700">
                        <a href={props.data.hdurl} target="_blank" rel="noreferrer"><img className="" alt={props.data.title} src={props.data.url} onLoad={() => {props.setLoading(false)}}/></a>
                    </div>}
                {props.data.media_type === "video" &&
                    <div className="px-10 py-10 w-max rounded-xl shadow-lg border bg-gray-600 border-primary-500 transition duration-700 containeriframe">
                        <iframe className="responsive-iframe" title={props.data.title}  src={props.data.url} onLoad={() => {props.setLoading(false)}}> </iframe>
                    </div>}
            </div>
            <div className="relative flex flex-col justify-center items-center py-2 animate__animated animate__fadeIn animate__delay-3s">
                <div className="px-6 pb-8 w-full rounded-xl shadow-lg border bg-gray-700 border-primary-500">
                    {props.data.media_type === "image" && <h2 className="text-center m-2 text-4xl text-primary-500">Photo Explaination</h2>}    
                    {props.data.media_type === "video" && <h2 className="text-center m-2 text-4xl text-primary-500">Video Explaination</h2>}
                    <p className="text-white text-xl ">{props.data.explanation}</p>
                </div>
            </div>
        </div>
    );
}

export default APOD