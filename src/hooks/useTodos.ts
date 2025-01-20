import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

function useTodos() {
//   const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        // setTodos(res.data);
        return res.data;
      } catch (err) {
        setError(err.message);
      }
    },
  });

  const { data, isLoading } = query;

  return { data, error, isLoading };
}

export default useTodos;
