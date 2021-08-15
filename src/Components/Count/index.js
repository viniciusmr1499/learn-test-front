import React from 'react';

function Count({ quantity, onClick }) {
  return (
    <div>
      <p>You clicked {quantity} times</p>
      <button data-testid="count-id" onClick={onClick}>
        Click me
      </button>
    </div>
  );
}

export default Count;