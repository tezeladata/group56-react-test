import Info from "./components/Info.jsx"

const App = () => {
  const logInfo = () => {
    return (
      <p>David Tezelashvili</p>
    )
  }

  return (
    <main>
      <Info logInfo={logInfo}/>
    </main>
  )
};

export default App;