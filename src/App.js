import React from 'react';
import data from './data';
import Product from './components/Product';

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">Dewsanda Natural Products</a>
        </div>
        <div>
            <a href="/html">Cart</a></div>
        <div> <a href="/html">Sign In</a></div>
    </header>
    <main>
      <div>
       <div className="row center">
         {
           data.products.map((product)=>(
             <Product key={product.id} product={product}></Product>                         
  ))
         }
      </div>
      </div>
    </main>
    <footer className="row center">
        All right reserved
    </footer>
</div>
  );
}

export default App;
