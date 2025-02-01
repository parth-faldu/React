import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../src/api/api";
import { NavLink } from "react-router-dom";

export const FetchRQ = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post"],
    queryFn: fetchPosts,
    // staleTime: 5000,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
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
    </div>
  );
};
