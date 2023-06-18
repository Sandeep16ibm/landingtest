import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Registration from "./components/RegistrationPage/Registration";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LandingPage />}>
        <Route path="Registration" element={<Registration />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
