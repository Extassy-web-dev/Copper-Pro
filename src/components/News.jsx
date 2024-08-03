import './News.scss'

function NewsElem({ news }) {
  return (
    <div className="news__elem">
      <img src={news.img} alt="" />
      <img className='heart' src={"../../heart.png"} alt="" />
      <div className="text">
        <p>{news.title}</p>
        <p>{news.price}</p>
      </div>
    </div>
  );
}

export default NewsElem;