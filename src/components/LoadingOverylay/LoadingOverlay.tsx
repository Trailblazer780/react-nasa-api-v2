import { Triangle } from 'react-loader-spinner';
import { LoadingOverlayProps } from '../../tools/data.model';



const LoadingOverlay = ({enabled, bgColor, spinnerColor}:LoadingOverlayProps) => {

    let styles:Object = {
        backgroundColor:bgColor
    }

    return (
        (enabled)
        ? 
            <div className="flex w-full h-full absolute items-center justify-center" style={styles}>
                <Triangle
                    color={spinnerColor}
                    height={300}
                    width={300}
                />
            </div>
        : <div></div>
    );
}

export default LoadingOverlay;