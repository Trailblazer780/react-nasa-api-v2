import { useEffect, useState } from "react";
import { Asteroid, CloseApproach } from "../../tools/data.model";

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
    return <div className="container">{httpError}</div>;
  }

  return (
    <div className="container py-8">
        <div className="relative flex flex-col justify-center items-center py-2">
            <div className="px-6 pb-8 w-full rounded-xl shadow-lg border bg-gray-700 border-primary-500 animate__animated animate__fadeIn">
                <h1 className="animate__animated animate__fadeIn text-center mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-primary-500">Information about Asteroid: {data.name}</h1>
                <h2 className="ml-3 truncate text-white text-center text-lg md:text-2xl lg:text-4xl">
                    <span className="md:hidden">NEO ID: {data.id}</span>
                    <span className="hidden md:inline">NEO ID: {data.id}</span>
                </h2>
            </div>
        </div>
        {/* ASTEROID DATA TABLE */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4  sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden md:rounded-lg">
                <table className="min-w-full divide-y divide-primary-500 border-2 shadow-xl border-primary-500 animate__animated animate__fadeInUp">
                  <thead className="bg-gray-700">
                    <tr className="divide-x divide-primary-500">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-sm md:text-base text-left font-semibold text-primary-500 sm:pl-6"
                      >
                        Data Type
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm md:text-base text-center font-semibold text-primary-500"
                      >
                        Data
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-500 bg-gray-700">
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">Date First Observed</td><td className="whitespace-nowrap  py-4 pl-4 pr-4 text-sm md:text-base font-medium text-gray-200 sm:pl-6 text-center">{data.orbital_data.first_observation_date}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">Most Recent Observation</td><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200 text-center">{data.orbital_data.last_observation_date}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">Orbit ID</td><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200 text-center">{data.orbital_data.orbit_id}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">Potential Hazard</td><td className="whitespace-nowrap px-3 py-4 text-sm md:text-base text-gray-200 text-center">
                            {data.is_potentially_hazardous_asteroid && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Yes</span>}
                            {!data.is_potentially_hazardous_asteroid && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">No</span>}
                    </td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">Absolute Magnitude</td><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200 text-center">{data.absolute_magnitude_h}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">Orbit Class</td><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200 text-center">{data.orbital_data.orbit_class.orbit_class_type}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">Estimated Diameter min/max (km)</td><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200 text-center">{data.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)}/{data.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)}</td></tr>
                    <tr className="divide-x divide-primary-500 hover:bg-gray-600"><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">Estimated Diameter min/max (ft)</td><td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200 text-center">{data.estimated_diameter.feet.estimated_diameter_min.toFixed(2)}/{data.estimated_diameter.feet.estimated_diameter_max.toFixed(2)}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center pt-10 animate__animated animate__fadeInUp">
        <div className="px-6 pb-8 w-full rounded-xl shadow-lg border bg-gray-700 border-primary-500">
            <h2 className="animate__animated animate__fadeIn text-center mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-primary-500">All current close approach data</h2>
        </div>
      </div>
        {/* CLOSE APPROACH TABLE */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4  sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden md:rounded-lg">
                <table className="min-w-full divide-y divide-primary-500 border-2 border-primary-500 animate__animated animate__fadeInUp">
                  <thead className="bg-gray-700">
                    <tr className="divide-x divide-primary-500">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-sm md:text-base text-left font-semibold text-primary-500 sm:pl-6"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm md:text-base text-center font-semibold text-primary-500"
                      >
                        Velocity (Km/h)
                      </th>
                      <th
                        scope="col"
                        className="hidden md:block px-4 py-3.5 text-sm md:text-base text-center font-semibold text-primary-500"
                      >
                        Miss Distance (Km)
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm md:text-base text-center font-semibold text-primary-500"
                      >
                        Orbiting Body
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-500 bg-gray-700">
                    {data.close_approach_data.map((closeApproach:CloseApproach ) => { return <tr className="divide-x divide-primary-500 hover:bg-gray-600">
                    <td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">{closeApproach.close_approach_date_full}</td>
                    <td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">{parseFloat(closeApproach.relative_velocity.kilometers_per_hour).toFixed(0)} Km/h</td>
                    <td className="hidden md:block whitespace-nowrap p-4 text-sm md:text-base text-gray-200">{parseFloat(closeApproach.miss_distance.kilometers).toFixed(0)}</td>
                    <td className="whitespace-nowrap p-4 text-sm md:text-base text-gray-200">{closeApproach.orbiting_body}</td></tr>})}
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
