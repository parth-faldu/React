import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//fetch the data
export const fetchPosts = async () => {
  const res = await api.get("/posts?_start=0&_limit=3");
  return res.status == 200 ? res.data : [];
};

//fetch data individual

export const fetchIndvPosts = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status == 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};
