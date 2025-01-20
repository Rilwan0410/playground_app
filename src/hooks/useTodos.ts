import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";

function useTodos(queryObj) {
  //   const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const query = useInfiniteQuery({
    queryKey: ["posts", queryObj],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        let todos = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _start: (pageParam - 1) * queryObj.pageSize,
              _limit: queryObj.pageSize,
            },
          }
        );
        return todos.data;
      } catch (err) {
        setError(err.message);
      }
    },
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  const { isLoading, fetchNextPage, data: posts, isFetchingNextPage } = query;

  // console.log(query)
  //   console.log(query.data)

  return { posts, error, isLoading, fetchNextPage, isFetchingNextPage };
}

export default useTodos;

//   return axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => setPosts(res.data))
//     .catch((error) => setError(error));
