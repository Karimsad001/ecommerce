import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let params = useParams();
    const [detailedProduct, setDetailedProduct] = useState({});
    let apiDetailUrl = 'https://fakestoreapi.com/products';
    useEffect(() => {
        fetch(`${apiDetailUrl}/${params.productId}`)
        .then((res) => res.json())
        .then((data) => setDetailedProduct(data));
    })
  return (
    <div style={{height: 'calc(100vh - 80px)'}}>
      <h1 className='d-flex justify-content-center mt-4'>Product {params.productId} Details</h1>
      <div className='container'>
        <div className='row mt-4'>
            <div className='col-md-6'>
                <img src={detailedProduct.image} alt={detailedProduct.title} style={{ height: '520px', width: '100%'}}/>
            </div>
            <div className='col-md-6'>
                <h2>{detailedProduct.title} <span style={{fontSize: '15px'}}>({detailedProduct.category})</span></h2>
                <p>{detailedProduct.description}</p>
                <div className='d-flex justify-content-between'>
                {detailedProduct.rating && (
                <span>Rating: {detailedProduct.rating.rate} ({detailedProduct.rating.count} reviews)</span>
              )}
                    <span>{detailedProduct.price}$</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
