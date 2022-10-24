import { useState, useEffect } from 'react';
import APOD from "./APOD";
import { APODData } from '../../tools/data.model';

const API_KEY:string = "YebcvNe2gk1kOzI5NxfnX0hhfwSVg4BV7mY9sFrE";
const APOD_SCRIPT:string = "https://api.nasa.gov/planetary/apod?api_key=" + API_KEY;

type Props ={
    setLoading: React.Dispatch<React.SetStateAction<any>>;
}

const HomeComponent:React.FC<Props> = (props) => {
    const [data, setData] = useState<APODData>();
    const [httpError, setHttpError] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(APOD_SCRIPT);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseData = await response.json();
            setData(responseData);
        }

        fetchData().catch((error) => {
            setHttpError(error.message);
            props.setLoading(false);
        });

    }, []);

    if (!data) {
        return (
            <div></div>
        )
    }

    return (
        <>
            <div className=''>
                <APOD data={data} setLoading={props.setLoading}/>
            </div>
        </>
    );
}

export default HomeComponent
