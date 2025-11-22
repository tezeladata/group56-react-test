import Comp1 from "./components/Comp1";

const App = () => {
  return (
    <main>
      <Comp1 signedIn={Math.random() > 0.5}/>
    </main>
  )
};

export default App;