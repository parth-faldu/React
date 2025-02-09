import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { fetchIndvPosts } from "../../api/api";

export const FetchIndv = () => {
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post",id],
    queryFn: () => fetchIndvPosts(id),
  });
  if (isPending) return <p>Loading ... </p>;
  if (isError)
    return <p>Error : {error.message || "something went wrong !!"}</p>;

  return (
    <div>
      <div className="section-accordion">
        <h1>Post ID Number - {id}</h1>
        <div>
          <p>ID : {data.id}</p>
          <p>Title : {data.title}</p>
          <p>Body : {data.body}</p>
        </div>
        <NavLink to="/rq">
          <button>Go Back</button>
        </NavLink>
      </div>
    </div>
  );
};
