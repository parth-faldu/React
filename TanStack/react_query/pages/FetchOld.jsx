import { useEffect, useState } from "react";
import { fetchPosts } from "../src/api/api";

export const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPostsData = async () => {
    try {
      const resdata = await fetchPosts();
      setPosts(resdata);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setLoading(false);
      return [];
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  if (isLoading) return <p>Loading ... </p>;
  if (isError) return <p>something went wrong !!</p>;

  return (
    <div>
      <ul className="section-accordion">
        {posts?.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <li key={id}>
              <p>{title}</p>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
