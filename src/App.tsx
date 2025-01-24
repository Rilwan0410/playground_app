import NavBar from "./state-management/NavBar";
import { TaskList } from "./state-management/tasks";
import { LoginStatus } from "./state-management/auth";
import { Counter } from "./state-management/counter";
import { TaskProvider } from "./state-management/tasks";
import { CounterProvider } from "./state-management/counter";
import { AuthProvider } from "./state-management/auth";

function App() {
  return (
    <TaskProvider>
      <CounterProvider>
        <AuthProvider>
          <NavBar />
          <LoginStatus />
          <TaskList />
          <Counter />
        </AuthProvider>
      </CounterProvider>
    </TaskProvider>
  );
}

export default App;
