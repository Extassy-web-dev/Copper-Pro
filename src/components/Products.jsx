import './Products.scss'

function Product({product}) {
    return ( 
        <div className="elem" style={{background:`url(${product.img})`, backgroundRepeat: 'no-repeat'}}>
            <p>{product.title}</p>
        </div>
     );
}

export default Product;