import { useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = true;

  if (isAuth) {
    return children;
  } else {
    navigate("/login");
    return null;
  }
};
