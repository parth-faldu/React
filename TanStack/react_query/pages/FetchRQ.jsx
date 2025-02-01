import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../src/api/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
  });

  if (isPending) return <p>Loading ... </p>;
  if (isError)
    return <p>Error : {error.message || "Something went wrong!!"}</p>;

  return (
    <div>
      <ul className="section-accordion">
        {data?.map(({ id, body, title }) => (
          <li key={id}>
            <NavLink to={`/rq/${id}`}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="pagination-section container">
        <button
          onClick={() =>
            pageNumber <= 0
              ? setPageNumber(0)
              : setPageNumber((prev) => prev - 3)
          }
        >
          Prev
        </button>
        <h2>{pageNumber / 3}</h2>
        <button onClick={() => setPageNumber((prev) => prev + 3)}>Next</button>
      </div>
    </div>
  );
};
