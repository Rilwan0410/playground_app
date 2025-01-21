import { useRef } from "react";
import useAddTodo from "../hooks/useAddTodo";

const TodoForm = () => {
  const { mutation, isLoading } = useAddTodo();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {mutation.error && (
        <div className="alert alert-danger">{mutation.error.message}</div>
      )}
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
          ref.current.value = "";
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary">
            {isLoading ? "Loading..." : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
