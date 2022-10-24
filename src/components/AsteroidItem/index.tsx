import { useEffect, useState } from "react";
import { Asteroid } from "../../tools/data.model";

type Props = {
  id: string;
  setLoading: React.Dispatch<React.SetStateAction<any>>;
};

const API_KEY: string = "YebcvNe2gk1kOzI5NxfnX0hhfwSVg4BV7mY9sFrE";

const AsteroidItem: React.FC<Props> = (props) => {
  const ASTEROID_DATA: string =
    "https://api.nasa.gov/neo/rest/v1/neo/" + props.id + "?api_key=" + API_KEY;

  const [data, setData] = useState<Asteroid>();
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(ASTEROID_DATA);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
      props.setLoading(false);
    };

    fetchData().catch((error) => {
      setHttpError(error.message);
      props.setLoading(false);
    });
  }, [props, ASTEROID_DATA]);

  if (!data) {
    return <div>{httpError}</div>;
  }

  return (
    <div className="container py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden md:rounded-lg">
                <table className="min-w-full divide-y divide-primary-500 border-2 border-primary-500 animate__animated animate__fadeInUp">
                  <thead className="bg-gray-700">
                    <tr className="divide-x divide-primary-500">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-center font-semibold text-primary-500 sm:pl-6"
                      >
                        Data Type
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left font-semibold text-primary-500"
                      >
                        Data
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-500 bg-gray-700">
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-base text-gray-200">Date First Observed [YYYY-MM-DD]</td><td className="whitespace-nowrap py-4 pl-4 pr-4 text-base font-medium text-gray-200 sm:pl-6 text-center">{data.orbital_data.first_observation_date}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-base text-gray-200">Most Recent Observation [YYYY-MM-DD]</td><td className="whitespace-nowrap p-4 text-base text-gray-200">{data.orbital_data.last_observation_date}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-base text-gray-200">Orbit ID</td><td className="whitespace-nowrap p-4 text-base text-gray-200">{data.orbital_data.orbit_id}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-base text-gray-200">Potential Hazard</td><td className="whitespace-nowrap px-3 py-4 text-base text-gray-200 text-center">
                            {data.is_potentially_hazardous_asteroid && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Yes</span>}
                            {!data.is_potentially_hazardous_asteroid && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">No</span>}
                    </td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-base text-gray-200">Absolute Magnitude</td><td className="whitespace-nowrap p-4 text-base text-gray-200">{data.absolute_magnitude_h}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-base text-gray-200">Orbit Class</td><td className="whitespace-nowrap p-4 text-base text-gray-200">{data.orbital_data.orbit_class.orbit_class_type}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-base text-gray-200">Estimated Diameter min/max (km)</td><td className="whitespace-nowrap p-4 text-base text-gray-200">{data.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)}/{data.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-base text-gray-200">Estimated Diameter min/max (ft)</td><td className="whitespace-nowrap p-4 text-base text-gray-200">{data.estimated_diameter.feet.estimated_diameter_min.toFixed(2)}/{data.estimated_diameter.feet.estimated_diameter_max.toFixed(2)}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsteroidItem;
