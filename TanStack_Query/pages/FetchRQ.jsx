import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, fetchPosts, updatePost } from "../src/api/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const queryClient = useQueryClient();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    placeholderData: keepPreviousData,
  });

  //!mutation function to delete the post
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNumber], (curElem) => {
        return curElem?.filter((post) => post.id !== id);
      });
    },
  });

  //!mutation function to update the post
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (apiData, postId) => {
      queryClient.setQueryData(["posts", pageNumber], (postData) => {
        return postData?.map((curPost) => {
          return curPost.id === postId
            ? { ...curPost, title: apiData.data.title }
            : curPost;
        });
      });
    },
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
            <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
            <button onClick={() => updateMutation.mutate(id)}>Update</button>
          </li>
        ))}
        <div className="pagination-section container">
          <button
            onClick={() => setPageNumber((prev) => prev - 3)}
            disabled={pageNumber == 0 ? true : false}
          >
            Prev
          </button>
          <h2>{pageNumber / 3 + 1}</h2>
          <button onClick={() => setPageNumber((prev) => prev + 3)}>
            Next
          </button>
        </div>
      </ul>
    </div>
  );
};
