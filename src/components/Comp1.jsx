import { useEffect, useState } from "react";

const Comp1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count
  })

  return (
    <button onClick={() => setCount(prev => prev + 1)}>+1</button>
  )
};

export default Comp1