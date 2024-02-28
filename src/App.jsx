import { useEffect, useState } from "react";

import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return !isLoading ? (
    <div className="w-full bg-red-50 min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          TODO:
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
