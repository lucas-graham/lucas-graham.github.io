import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Navbar from "./Navbar.tsx";
import NotFound from "../pages/NotFound.tsx";
import About from "../pages/About.tsx";
import PersonalTraining from "../pages/PersonalTraining.tsx";
import SoftwareDevelopment from "../pages/SoftwareDevelopment.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // Matches exactly '/'
        element: <Home />,
      },
      {
        path: "about", // Matches '/about'
        element: <About />,
      },
      {
        path: "personal-training", // Dynamic parameter match
        element: <PersonalTraining />,
      },
      {
        path: "software-development", // Dynamic parameter match
        element: <SoftwareDevelopment />,
      },
    ],
  },
]);
