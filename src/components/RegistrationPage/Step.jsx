// Step.js
import React, { useContext } from "react";
import { FormContext } from "../../App";
import Success from "./Success";
import Basic from "./Basic";
import Workspace from "./Workspace";
function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <Basic />;
      break;
    case 1:
      stepContent = <Workspace />;
      break;
    case 2:
      stepContent = <Success />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
