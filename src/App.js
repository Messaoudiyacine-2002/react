import './App.css';
import Navbar from './compoment/navbar';
import Home from './compoment/Home';
import { Routes , Route } from 'react-router-dom';
import Products from './compoment/Products';
import Product from './compoment/Product'; 
function App () {

    return (
        <>
        <Navbar/>
        <Routes>
            <Route exact path="/"component={Home} />
            <Route exact path="/products"component={Products} />
            <Route exact path="/products/:id"component={Product} />
        <Home/>
        </Routes>
        </>
    )
}

export default App;