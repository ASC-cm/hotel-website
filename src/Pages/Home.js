// import React, { useEffect, useState } from 'react';
// import axios from '../services/api';
// import ProductCard from '../components/ProductCard';

// function HomePage() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('/products').then(response => setProducts(response.data));
//   }, []);

//   return (
//     <div className="homepage">
//       <h1>Welcome to the Supermarket</h1>
//       <div className="product-grid">
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import SearchBar from '../Components/Searchbar';
import Main from '../Components/Main';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <Main />
    </div>
  );
}

export default Home;

