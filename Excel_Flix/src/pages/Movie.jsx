import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
    const moviesData = useLoaderData();
    return <>
        <ul className="container grid grid-four--cols g-40">
            {moviesData && moviesData.Search.map((curMovie) => {
                return <Card key={curMovie.imdbID} curMovie={curMovie} />
            })}
        </ul>
    </>;
}