import React, { useState, useEffect, useCallback } from 'react';

// import 'styles.css';
import { Container } from './styles';

function Todo() {
  const [item, updateItem] = useState('');
  const [items, setItems] = useState([]);

  const handleAddNewItem = useCallback ((e) => {
    e.preventDefault();
    setItems([...items, item]);
    updateItem('');
  }, [item, items]);

  useEffect(() => {
    console.log('disparou no momento em que foi renderizado o componente')
  }, []);

  return (
    <Container border='blue'>
      <h1>Cadastrar tecnologia</h1>
      <div className='block'>
        <input 
          type="text"
          placeholder="Enter your technology"
          onChange={e => updateItem(e.target.value)}
          value={item}
        />
        <button type="button" onClick={handleAddNewItem}>Send</button>
      </div>
      <div>
        <h1>Lista com as tecnologias</h1>
        {items.map(tech => (
          <p key={tech}>{tech}</p>
        ))}
      </div>
    </Container>
  );
}

export default Todo;