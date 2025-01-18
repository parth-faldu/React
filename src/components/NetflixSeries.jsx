import SeriesData from "../api/SeriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
    return (
        <ul className="grid grid-three--cols">
            {SeriesData.map((curElem) => {
                return <SeriesCard key={curElem.id} data={curElem} />;
            })}
        </ul>

    );
};

export default NetflixSeries;