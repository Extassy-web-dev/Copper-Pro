import './Sales.scss'

function Sales({sale}) {
    return (
        <div className="best-sales__elem">
            <img className='poster' src={sale.img} alt="" />
            <img className='heart' src={"../../heart.png"} alt="" />
            <div className="text">
                <p>{sale.title}</p>
                <p>{sale.price}</p>
            </div>
        </div>
    );
}

export default Sales;