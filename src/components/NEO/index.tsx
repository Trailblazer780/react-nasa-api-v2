import { useState, useEffect } from "react";
import AsteroidListItem from "./AsteroidListItem";
import {AsteroidTodayData, Asteroid} from "../../tools/data.model";

const NEOW_SCRIPT: string = "https://www.neowsapp.com/rest/v1/feed/today";

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<any>>;
};

const NEO: React.FC<Props> = (props) => {
  const [data, setData] = useState<AsteroidTodayData>();
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(NEOW_SCRIPT);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      setData(responseData);
      setAsteroids(responseData.near_earth_objects[getDate()]);
      props.setLoading(false);
    };

    fetchData().catch((error) => {
      setHttpError(error.message);
      props.setLoading(false);
    });
  }, [props]);

  const getDate = () => {
    var isoDateString = new Date().toISOString();
    let split = isoDateString.split("T");
    let fullDay: string = split[0];
    return fullDay;
  };

  if (!data || httpError || !asteroids) {
    return (
      <div className="container relative py-8">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div className="container relative py-8">
    <div className="relative flex flex-col justify-center items-center py-2">
        <div className="px-6 pb-8 w-full rounded-xl shadow-lg border bg-gray-700 border-primary-500 animate__animated animate__fadeIn">
            <h1 className="animate__animated animate__fadeIn text-center mb-2 text-2xl lg:text-4xl font-bold tracking-tight text-primary-500">Near Earth Objects</h1>
            <h2 className="ml-3 text-white text-center text-lg md:text-2xl lg:text-4xl">
                <span className="md:hidden">Asteroids Near Earth Right Now: {data.element_count}</span>
                <span className="hidden md:inline">Asteroids Near Earth Right Now: {data.element_count}</span>
            </h2>
        </div>
    </div>
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
                        Asteroid ID
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left font-semibold text-primary-500"
                      >
                        Asteroid Name
                      </th>
                      <th
                        scope="col"
                        className="hidden lg:table-cell px-4 py-3.5 text-left font-semibold text-primary-500"
                      >
                        Asteroid Velocity (Km/h)
                      </th>
                      <th
                        scope="col"
                        className="hidden lg:table-cell py-3.5 pl-4 pr-4 text-left font-semibold text-primary-500 sm:pr-6"
                      >
                        Asteroid Diameter min/max (km)
                      </th>
                      <th
                        scope="col"
                        className="hidden lg:table-cell px-3 py-3.5 text-left font-semibold text-primary-500"
                      >
                        Asteroid Distance (km)
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left font-semibold text-primary-500"
                      >
                        Potentially Hazardous
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-500 bg-gray-700">
                    {asteroids.map((asteroid: Asteroid) => {
                      return (
                          <AsteroidListItem
                            key={asteroid.id}
                            id={asteroid.id}
                            name={asteroid.name}
                            closeApproach={asteroid.close_approach_data}
                            hazardous={
                              asteroid.is_potentially_hazardous_asteroid
                            }
                            diameter={asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2) + "/" + asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)}
                          />
                      );
                    })}
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

export default NEO;
