import Info from "./components/Info.jsx"

const App = () => {
  return (
    <main>
      <Info />

      <Info>
        hello world!
      </Info>

      <Info>
        <div>
          <p>info 3</p>
          <h2>h2 for info 3</h2>
        </div>
      </Info>
    </main>
  )
};

export default App;