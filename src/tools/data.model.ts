// -------------------------------------- Astronomy Picture of the Day --------------------------------------
export interface APODData {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

// ---------------------------------------- Asteroid Data ----------------------------------------
export interface AsteroidTodayData {
    links: Links;
    element_count: number;
    near_earth_objects: any;
}

export interface Links{
    self: string;
    next: string;
    prev: string;
}

export interface Asteroid {
    id: string;
    neo_reference_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: EstimatedDiameter;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: CloseApproach[];
    orbital_data: OrbitalData;
    is_sentry_object: boolean;
}

export interface EstimatedDiameter {
    kilometers: Kilometers;
    meters: Meters;
    miles: Miles;
    feet: Feet;
}

export interface Kilometers {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

export interface Meters {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

export interface Miles {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

export interface Feet {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

export interface CloseApproachData {
    close_approach_data: CloseApproach[];
}

export interface CloseApproach {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: RelativeVelocity;
    miss_distance: MissDistance;
    orbiting_body: string;
}

export interface RelativeVelocity {
    kilometers_per_second: string;
    kilometers_per_hour: string;
    miles_per_hour: string;
}

export interface MissDistance {
    astronomical: string;
    lunar: string;
    kilometers: string;
    miles: string;
}

export interface OrbitalData {
    orbit_id: string;
    orbit_determination_date: string;
    first_observation_date: string;
    last_observation_date: string;
    date_arc_in_days: number;
    observations_used: number;
    orbit_uncertainty: string;
    minimum_orbit_intersection: string;
    jupiter_tisserand_invariant: string;
    epoch_osculation: string;
    eccentricity: string;
    semi_major_axis: string;
    inclination: string;
    ascending_node_longitude: string;
    orbital_period: string;
    perihelion_distance: string;
    perihelion_argument: string;
    aphelion_distance: string;
    perihelion_time: string;
    mean_anomaly: string;
    mean_motion: string;
    equinox: string;
    orbit_class: OrbitClass;
}

export interface OrbitClass {
    orbit_class_type: string;
    orbit_class_description: string;
    orbit_class_range: string;
}
// ---------------------------------------- Mars Rover Data ----------------------------------------

export interface MarsRoverPhotosData {
    photos: Photo[];
}

export interface Photo {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}

export interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

// ---------------------------------------- EPIC Data ----------------------------------------
// export interface EPIC{
//     dates: EpicData[];
// }
export interface EpicData {
    date: string;
}

export interface Image {
    images: EpicImage[];
}

export interface EpicImage{
    identifier: string;
    caption: string;
    image: string;
    version: string;
    centroid_coordinates: CentroidCoordinates;
    dscovr_j2000_position: DscovrJ2000Position;
    lunar_j2000_position: LunarJ2000Position;
    sun_j2000_position: SunJ2000Position;
    altitude_quaternions: AltitudeQuaternions;
    date: string;
}
export interface CentroidCoordinates {
    lat: number;
    lon: number;
}

export interface DscovrJ2000Position {
    x: number;
    y: number;
    z: number;
}

export interface LunarJ2000Position {
    x: number;
    y: number;
    z: number;
}

export interface SunJ2000Position {
    x: number;
    y: number;
    z: number;
}

export interface AltitudeQuaternions {
    q0: number;
    q1: number;
    q2: number;
    q3: number;
}

// ---------------------------------------- Web Application Data ----------------------------------------
export interface HomeProps {
    setLoading:Function;
}

export interface LoadingOverlayProps {
    enabled:boolean;
    bgColor:string;
    spinnerColor:string;
}