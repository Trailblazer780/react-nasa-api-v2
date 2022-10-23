import {useState} from 'react';
import APOD from '../../Home/APOD';
import { HomeProps } from '../../../tools/data.model';
import '../../../assets/css/custom.css';
import HomeComponent from '../../Home';
import LoadingOverlay from '../../LoadingOverylay/LoadingOverlay';

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true);

    return(
        <>
            <LoadingOverlay enabled={loading} bgColor={"#494949"} spinnerColor={"#4fa94d"}/>
            <div className="relative">
                <HomeComponent setLoading={setLoading} />
            </div>
        </>
    )
}

export default Home;