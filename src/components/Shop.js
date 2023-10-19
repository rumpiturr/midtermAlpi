import { useState } from 'react';

function Shop() {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Description:', description);
    setName('');
    setDescription('');
  };

  return (
    <div className="shop-form">
      <h2>New Shop</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Shop;