import {useState, useEffect} from 'react';
import {EpicImage} from '../../tools/data.model';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './EPIC.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const API_KEY:string = "YebcvNe2gk1kOzI5NxfnX0hhfwSVg4BV7mY9sFrE";
const EPIC_MOST_RECENT:string = "https://api.nasa.gov/EPIC/api/natural?api_key="+API_KEY;
const EPIC_IMAGE:string = "https://epic.gsfc.nasa.gov/archive/natural/";
let loaded:number = 0;

type Props ={
    isLoading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<any>>;
}

const EpicComponent:React.FC<Props> = (props) => {

    const [data, setData] = useState<EpicImage[]>([]);
    const [url, setUrl] = useState<string[]>([]);
    const [date, setDate] = useState<string>('');
    const [httpError, setHttpError] = useState<string>('');

    
    useEffect(() => {

        const buildurls = async () => {
            let array:string[] = [];
            let urlArray:string[] = [];
            console.log(data);
            // add all dates to an array
            for(let i = 0; i < data.length; i++){
                array.push(data[i].date);
            }
            let split = array[0].split(" ");
            // console.log(split);
            let split2 = split[0].split("-");
            let date1 = split2.toString().replace(/,/g, "-");
            // console.log(split2);
            let dateForUrl = split2[0] + "/" + split2[1] + "/" + split2[2] + "/";
            // loop through the data and build all of the url
            for(let i = 0; i < data.length; i++){
                urlArray.push(EPIC_IMAGE + dateForUrl + "png/" + data[i].image + ".png");

            }
            setUrl(urlArray);
            setDate(date1);
            return;
        }


        const fetchData = async () => {
            const response = await fetch(EPIC_MOST_RECENT);

            if (!response.ok) {
                throw new Error("Uh Oh! Something went wrong!");
            }

            const responseData = await response.json();
            setData(responseData);
            buildurls();
        }
        
        fetchData().catch((error) => {
            console.log("error" + error.message);
            setHttpError(error.message);
            // props.setLoading(false);
        }).then(() => {
            
            props.setLoading(false);
        });
        
    }, [props]);

    const imagesLoaded = () => {
        if (loaded === data.length) {
            console.log("All images loaded");
        } else {
            loaded++;
            console.log("loaded: " + loaded);
            props.setLoading(false);
        }
    }

    
    return (
        <>
        <div className='container relative py-8'>
            <div className="relative flex flex-col justify-center items-center">
                <div className="px-6 pb-8 w-full rounded-xl shadow-lg border bg-gray-700 border-primary-500 animate__animated animate__fadeIn">
                    <h1 className="animate__animated animate__fadeIn text-center mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-primary-500">Most Recent EPIC Photos</h1>
  
                    <h2 className="ml-3 text-white text-center text-lg md:text-2xl lg:text-4xl">
                        <span className="md:hidden">These images were taken by Nasa's EPIC camera onboard the NOAA DSCOVR spacecraft</span>
                        <span className="hidden md:inline">These images were taken by Nasa's EPIC camera onboard the NOAA DSCOVR spacecraft</span>
                    </h2>
                    <h3 className='ml-3 text-white text-center text-lg md:text-2xl lg:text-4xl'>These images were taken: {date}</h3>
                </div>
            </div>
            <div className="w-full flex justify-center py-8">
            <div className="w-full flex flex-col justify-center items-center py-2">
                <div className="px-6 py-8 w-full h-auto flex justify-center rounded-xl shadow-lg border bg-gray-700 border-primary-500">
                    <div className="w-2/3 sm:1/3 md:1/3 lg:w-1/3">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            lazy={true}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {data.map((images:EpicImage, n:number) =>{ return <div key={images.identifier} className=""><SwiperSlide><img className="epic" alt={images.caption} onLoad={() => imagesLoaded()} height={500} width={500} src={url[n]}/></SwiperSlide></div> })}

                        </Swiper>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>

    )

}

export default EpicComponent