import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { meApiSlice } from "./feature/auth/authApiSlice";

const App = () => {
  // useDispatch

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("loginUser")) {
      dispatch(meApiSlice());
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={Router} />

      <ToastContainer
        position="top-center"
        style={{ zIndex: "99999999" }}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
