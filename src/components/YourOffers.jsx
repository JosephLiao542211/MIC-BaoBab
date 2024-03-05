import React from "react";
import './components.css'; 

function YourOffers(){
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const addItem = () => {
    if (text.trim() !== '') {
      setItems([...items, text]);
      setText('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
    return (
        <div>
            <h2>Dynamic List</h2>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Enter an item"
            />
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => removeItem(index)}>Remove</button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default YourOffers;