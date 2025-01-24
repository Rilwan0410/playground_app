import useTasks from "./useTasks";
import taskStore from "./store";
const TaskList = () => {
  const { tasks, addTask, removeTask } = taskStore();
  // const { value, dispatch } = useTasks();
  return (
    <>
      <button onClick={addTask} className="btn btn-primary my-3">
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => removeTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
