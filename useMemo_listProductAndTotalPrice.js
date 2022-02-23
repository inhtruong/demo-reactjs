import './App.css';
import { useState, useMemo, useRef } from 'react'

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([...products, { 
      name,
      price: parseInt(price)
    }])
    // submit xong reset form
    setName('')
    setPrice('')

    // auto focus vao o input name
    nameRef.current.focus()
  }

  // const total = products.reduce((total, product) => {
  //   console.log("Tính toán lại ...");
  //   return total + product.price
  // }, 0)

  const total = useMemo(() => {
    const result = products.reduce((total, product) => {
                  console.log("Tính toán lại ...");
                  return total + product.price
                }, 0)
    return result;
  }, [products])

  return (
    <div className="App">
      <input 
        ref={nameRef}
        value={name}
        placeholder="Enter name ..."
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input 
        value={price}
        placeholder="Enter price ..."
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}> {product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;