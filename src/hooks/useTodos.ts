import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";

function useTodos(queryObj) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const query = useQuery({
    queryKey: ["posts", queryObj],
    queryFn: async () => {
      try {
        let todos = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _start: (queryObj.page - 1) * queryObj.pageSize,
              _limit: queryObj.pageSize,
            },
          }
        
        );
        setPosts(todos.data);
        return todos.data;
      } catch (err) {
        setError(err.message);
      }
    },
    keepPreviousData:true
  });

  const { isLoading } = query;

  return { posts, error, isLoading };
}

export default useTodos;

//   return axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => setPosts(res.data))
//     .catch((error) => setError(error));
