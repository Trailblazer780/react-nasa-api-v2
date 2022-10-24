import {useState} from 'react';
import '../../../assets/css/custom.css';
import HomeComponent from '../../Home';
import Footer from '../../Footer';
import LoadingOverlay from '../../LoadingOverylay/LoadingOverlay';

const Home = () => {
    const [loading, setLoading] = useState<boolean>(true);

    return(
        <>
            <LoadingOverlay enabled={loading} bgColor={"#494949"} spinnerColor={"#4fa94d"}/>
            <div className="relative">
                <HomeComponent setLoading={setLoading} />
                {!loading && <Footer />}
            </div>
        </>
    )
}

export default Home;