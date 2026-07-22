import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Navbar from "./Navbar.tsx";
import NotFound from "../pages/NotFound.tsx";
import About from "../pages/About.tsx";
import PersonalTraining from "../pages/PersonalTraining.tsx";
import SoftwareDevelopment from "../pages/SoftwareDevelopment.tsx";
import Projects from "../pages/Projects.tsx";
import Contact from "../pages/Contact.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "personal-training",
        element: <PersonalTraining />,
      },
      {
        path: "software-development",
        element: <SoftwareDevelopment />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
