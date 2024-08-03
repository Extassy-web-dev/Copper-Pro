import './WhyUs.scss'

function WhyUsElem({item}) {
    return (
    <div className="why-us__elem">
        <img src={item.img} alt="" />
        <p>{item.name}</p>
        <p>{item.descr}</p>
        <p>{item.more}</p>
    </div>
    );
}

export default WhyUsElem;