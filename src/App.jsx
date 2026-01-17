import Comp from "./components/Comp";
import {ErrorBoundary} from "react-error-boundary"
import FallbackUI from "./components/FallbackUI";

const App = () => {
  const logError = (error, errorInfo) => {
    console.log(error);
    console.log(errorInfo);
  }

  return (
    <>
      <ErrorBoundary FallbackComponent={FallbackUI} onError={logError}>
        <Comp compName="1" /> 
        <Comp compName="2" /> 
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={FallbackUI} onError={logError}>
        <Comp compName="3" /> 
      </ErrorBoundary>

      <Comp compName="4" /> 
    </>
  )
};

export default App;