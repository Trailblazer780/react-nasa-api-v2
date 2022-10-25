import {useState} from 'react';
import LoadingOverlay from "../../LoadingOverylay/LoadingOverlay"
import Footer from "../../Footer"
import EpicComponent from '../../EPIC';



const EPIC = () => {

    const [loading, setLoading] = useState<boolean>(true);

    return (
        <>
            <LoadingOverlay enabled={loading} bgColor={"#494949"} spinnerColor={"#4fa94d"}/>
            <div className="relative">
                <EpicComponent setLoading={setLoading} isLoading={loading} />
                {!loading && <Footer />}
            </div>
        </>
    )

}

export default EPIC