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
import Stepper from "./components/LandingPage/Stepper";
import { createContext, useState } from "react";
import Step from "./components/RegistrationPage/Step";

export const FormContext = createContext();

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<LandingPage />}>

//       <Route path="/registration" element={<Registration />} />
//     </Route>
//   )
// );
function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider
      value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
    >
      <div className="w-screen h-screen flex flex-col items-center justify-start">
        <Stepper />
        <Step />
      </div>
    </FormContext.Provider>
  );
}

// const Root = () => {
//   return (
//     <>
//       <LandingPage />
//     </>
//   );
// };

export default App;
