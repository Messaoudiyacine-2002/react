import React, {UseState, UseEffect, UseParams} from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { NavLink } from 'react-router-dom';


const product = () => {

    const {id} = UseParams();
    const [product, setProduct] = UseState([]);
    const [loading, setLoading] = UseState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    UseEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();


    }, []);
    const Loading = () => {
        return(
            <>
              Loading ...
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
            <div className='col-md-6'>
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}</p>
                <h3 className='display-6 fw-bold my-4'> $ {product.price}</h3>
                <p className='lead'>{product.description}</p>
                <button className='btn btn-outline-dark px-4 py-2' onClick={() =>addProduct(product)}>Add to cart</button>
                <NavLink to='/cart' className='btn btn-dark'>Go to cart </NavLink>           
            </div>
            </>
        )
    }


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {loading ? <Loading/> : <ShowProduct/> }
                </div>
            </div>
            

        </div>
    )
}

export default product;