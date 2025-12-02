import { useState } from "react";

const allNames = ["bachi bediandze", "david", "soso rtveliashvili", "saba sabanshvili", "datuna sisauri", "biba", "giorgi jioshvili", "mate chubinidze"]

const Comp1 = () => {
  const [selectedArr, setSelectedArr] = useState([])

  const addName = (el) => {
    if (!selectedArr.includes(el)){
      setSelectedArr(prev => [el, ...prev])
    }
  }

  const deleteName = (el) => {
    setSelectedArr(prev => [...prev].filter(username => username !== el))
  }

  return (
    <section>
      <div>
        <h1>Selected names</h1>

        <ul>
          {
            selectedArr.map((el, i) => (
              <li key={i}>
                {el}
                <button onClick={() => deleteName(el)}>remove name</button>
              </li>
            ))
          }
        </ul>

        <button onClick={() => setSelectedArr(prev => [])}>Reset</button>
      </div>

      <hr />

      <div>
        <ul>
          {allNames.map((el, i) => (
            <li key={i}>
              {el}
              <button onClick={() => addName(el)}>add name</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
};

export default Comp1;