import { HemisphereDisplay } from "./components/HemisphereDisplay";
import { LongitudeLatitudeDisplay } from "./components/LongitudeLatitudeDisplay";

const App = () => {
  return (
    <>
      <main>
        <h1>Geo Locator</h1>
        <LongitudeLatitudeDisplay />
        <HemisphereDisplay />
      </main>
    </>
  )
};

export default App;