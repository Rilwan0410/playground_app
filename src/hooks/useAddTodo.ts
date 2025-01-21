import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function useAddTodo() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (todo) => {
      let res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        todo
      );
      return res.data;
    },
    onMutate: (newTodo) => {
      queryClient.setQueryData(["todos"], (todos) => {
        return [newTodo, ...(todos || [])];
      });
    },
    onSuccess: (savedTodo, newTodo) => {
      //   // To Refetch the data from the back after a mutation there are two approaches:
      //   // APPROACH 1 - Invalidate the cache:
      //   // queryClient.invalidateQueries({
      //   //   queryKey:['todos']
      //   // })
      //   // APPROACH 2 - Updating the data in the cache:
      queryClient.setQueryData(["todos"], (todos) => {});
    },
  });
  const { isLoading } = mutation;

  return { mutation, isLoading };
}

export default useAddTodo;
