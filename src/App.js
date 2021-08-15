import React, { useState, useCallback } from 'react';
import Count from './Components/Count';

function App() {
  const [count, setCount] = useState(0);
  const handleAddQuantity = useCallback(() => {
    setCount(count + 1);
  }, [count])

  return (
    <Count quantity={count} onClick={handleAddQuantity} />
  );
}

export default App;
