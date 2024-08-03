import './Discount.scss'

function Discount({discount}) {
    return ( <div className="rec__elem-sale">
        <img src={discount.img} alt="" />
        <img className='heart' src={"../../heart.png"} alt="" />
        <img className='sale' src={"../sale.png"} alt="" />
        <div className="text">
          <p className='title'>{discount.title}</p>
          <div className="prices">
            <p>{discount.orig_price}</p>
            <p>{discount.price}</p>
          </div>
        </div>
      </div> 
      );
}

export default Discount;