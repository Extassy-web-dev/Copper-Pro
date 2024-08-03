function ThinkUs({item}) {
    return ( 
        <div className="think-us__elem">
                    <img src={item.avatar} alt="" />
                    <img src={item.union} alt="" />
                    <p>{item.name}</p>
                    <p><i>{item.descr}</i></p>
                    <p>{item.date}</p>
                  </div>
     );
}

export default ThinkUs;