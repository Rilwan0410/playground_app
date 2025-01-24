import counterStore from "./counter/store";
// import useTasks from "./tasks/useTasks";
import authStore from "./auth/store";
import taskStore from "./tasks/store";

const NavBar = () => {
  const { tasks } = taskStore();
  const { counter } = counterStore();
  const { currentUser } = authStore();
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <span className="badge text-bg-secondary">
        Task Count: {tasks.length}
      </span>
      <span className="badge text-bg-secondary">
        current user: {currentUser}
      </span>
    </nav>
  );
};

export default NavBar;
