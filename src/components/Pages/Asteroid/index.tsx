import {useState} from 'react';
import { useParams } from 'react-router-dom';
import LoadingOverlay from '../../LoadingOverylay/LoadingOverlay';
import AsteroidItem from '../../AsteroidItem';
import Footer from '../../Footer';


const Asteroid = () => {

    const [loading, setLoading] = useState<boolean>(true);

    const { id } = useParams();

    if(!id){
        return (
            <div>No Asteroid Found</div>
        );
    }


    return(
        <>
            <LoadingOverlay enabled={loading} bgColor={"#494949"} spinnerColor={"#4fa94d"}/>
            <div className="relative">
                <AsteroidItem setLoading={setLoading} id={id} />
                {!loading && <Footer />}
            </div>
        </>
    )

}

export default Asteroid