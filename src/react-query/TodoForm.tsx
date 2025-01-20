import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);
  const mutation = useMutation({
    mutationFn: async (todo) => {
      let res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        todo
      );
      return res.data;
    },
    onSuccess: (savedTodo, newTodo) => {
      // To Refetch the data from the back after a mutation there are two approaches:
      // APPROACH 1 - Invalidate the cache:
      // queryClient.invalidateQueries({
      //   queryKey:['todos']
      // })

      // APPROACH 2 - Updating the data in the cache:
      queryClient.setQueryData(["todos"], (todos) => {
        return [savedTodo, ...(todos || [])];
      });
    },
  });

  return (
    <form
      className="row mb-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current.value && ref.current)
          mutation.mutate({
            id: 0,
            title: ref.current?.value,
            userId: 1,
            completed: false,
          });
      }}
    >
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
