/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const loggedInUser = sessionStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default Protected;
