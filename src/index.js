import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Shop from './components/Shop';
import Product from './components/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<div className='container'>
  <Shop />
  <Product />
</div>
</>
);

