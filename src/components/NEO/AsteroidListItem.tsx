import { Link } from "react-router-dom";
import {CloseApproach} from "../../tools/data.model";

type Props = {
    id: string,
    name: string,
    hazardous: boolean,
    closeApproach: Array<CloseApproach>,
    diameter: string
};

const AsteroidListItem:React.FC<Props> = (props) => {

    return (
        <tr className="divide-x divide-primary-500 hover:bg-gray-600">
            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-base font-medium text-primary-500 hover:underline sm:pl-6 text-center"><Link to={`/asteroid/${props.id}`}>{props.id}</Link></td>
            <td className="whitespace-nowrap p-4 text-base text-gray-200">{props.name}</td>
            <td className="whitespace-nowrap p-4 text-base text-gray-200">{parseFloat(props.closeApproach[0].relative_velocity.kilometers_per_hour).toFixed(0)} Km/h</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-base text-gray-200 sm:pr-6">{props.diameter}</td>
            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-base text-gray-200 sm:pr-6">{parseFloat(props.closeApproach[0].miss_distance.kilometers).toFixed(0)} Km</td>
            <td className="whitespace-nowrap px-3 py-4 text-base text-gray-200 text-center">
                {props.hazardous && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Yes</span>}
                {!props.hazardous && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">No</span>}
            </td>
        </tr>
    )
}

export default AsteroidListItem;
