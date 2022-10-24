import {useState} from 'react';
import NEO from '../../NEO';
import LoadingOverlay from '../../LoadingOverylay/LoadingOverlay';
import Footer from '../../Footer';

const NearEarthAsteroids = () => {
    
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <>
            <LoadingOverlay enabled={loading} bgColor={"#494949"} spinnerColor={"#4fa94d"}/>
            <div className="relative">
                <NEO setLoading={setLoading}/>
                {!loading && <Footer />}
            </div>
        </>
    )
}

export default NearEarthAsteroids