import useAuth from "./useAuth";
import authStore from "./store";

const LoginStatus = () => {
  const { currentUser, login, logout } = authStore();
  // const { value, dispatch } = useAuth();
  if (currentUser)
    return (
      <>
        <div>
          <span className="mx-2">{currentUser}</span>
          <a onClick={logout} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={login} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
