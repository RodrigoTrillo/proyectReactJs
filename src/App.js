
import './App.css';
import './components/NavBar.css';
import React, { useState } from 'react';
import Button from './components/Button';
import NavBar from "./components/NavBar";




const products = [
  {
    id: 1,
    name: 'Teclado 1',
    price: 100,
    description: 'description',
    imageUrl: 'https://images.rappi.pe/products/783d5683-42e5-4ffe-a2e1-042351c986f2.jpg?d=200x200&e=webp'
  },
  {
    id: 2,
    name: 'Teclado 2',
    price: 200,
    description: 'description',
    imageUrl: 'https://www.computerssalejalapa.com/web/image/product.template/3884/image_256/%5BXTK-530S%5D%20Teclado%20%2B%20Mouse%20Gaming%20Xtech%20Antec?unique=ed95bf7'
  },
  {
    id: 3,
    name: 'Teclado 3',
    price: 300,
    description: 'description',
    imageUrl: 'https://images.rappi.pe/products/1656889363783_1656889227578.jpg?d=200x200&e=webp'
  },
]





function App() {
  const onHandleClick = () => {
    console.log('was clicked')
   /*  const [clicks, setCliks] = useState(0);
    const [time , setTime] useState(0); */
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timestamp = `${day}/${month}/${year}:${hour}:${minutes}:${seconds}:`
    console.log(timestamp)
  }

  const onHandlerAddProduct = () => {
    console.log('add product')
  }
  return (
    
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <p className='mainTitle'>
          Perifericos Cba
        </p>
        <Button onClick={onHandleClick} text='Click me' />
        <div className='products'>
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <img className='product-image' src={product.imageUrl} alt={product.name} />
              <p>${product.price}</p>
              <Button onClick={onHandlerAddProduct} text='Add to Cart' />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;