import { useState } from 'react';

function Product() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [priceError, setPriceError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidNumber(quantity)) {
        setQuantityError('Please enter a number.');
        return;
      } else {
        setQuantityError('');
      }
    
      if (!isValidNumber(price)) {
        setPriceError('Please enter a number.');
        return;
      } else {
        setPriceError('');
      }
 
    console.log('Name:', name);
    console.log('Description:', description);
    console.log('Category:', category);
    console.log('Quantity:', quantity);
    console.log('Price:', price);
    setName('');
    setDescription('');
    setCategory('');
    setQuantity('');
    setPrice('');
  };

  // Found this one online to check a valid number.
  const isValidNumber = (value) => {
    return !isNaN(value) && value !== '';
  };

  return (
    <div className='shop-form'>
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
           />
          {quantityError && <p className="error">{quantityError}</p>}
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {priceError && <p className="error">{priceError}</p>}
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

export default Product;