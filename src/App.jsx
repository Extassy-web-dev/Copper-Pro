import './App.scss'
import Discount from './components/Discounts'
import NewsElem from './components/News'
import Product from './components/Products'
import Sales from './components/Sales'
import ThinkUs from './components/ThinkUs'
import Layout from './Layout/Layout'
import  WhyUsElem from './components/WhyUs'
function App() {

  const products = [
    {
      id: 1,
      title: "Для эфирных масел",
      img: "../img1.png"
    },
    {
      id: 2,
      title: "Для гидролатов",
      img: "../img2.png"
    },
    {
      id: 3,
      title: "Медная посуда",
      img: "../img3.png"
    },
    {
      id: 4,
      title: "Аксессуары из меди",
      img: "../img4.png"
    },
    {
      id: 5,
      title: "Индивидуальный заказ",
      img: "../img5.png"
    },
    {
      id: 6,
      title: "Скидки и предложения",
      img: "../img6.png"
    },
  ]

  const sales = [
    {
      id: 1,
      title: "Медный чайник с фарфоровой ручкой",
      price: "1 953 грн",
      img: "../img1.png"
    },
    {
      id: 2,
      title: "Медный чайник с фарфоровой ручкой",
      price: "1 953 грн",
      img: "../img2.png"
    },
    {
      id: 3,
      title: "Медный чайник с фарфоровой ручкой",
      price: "1 953 грн",
      img: "../img3.png"
    },
  ]

  const news = [

    {
      id: 2,
      title: "Медный чайник с фарфоровой ручкой",
      price: "1 953 грн",
      img: "../img2.png"
    },
    {
      id: 3,
      title: "Медный чайник с фарфоровой ручкой",
      price: "1 953 грн",
      img: "../img3.png"
    },
  ]

  const discounts = [
    {
      id: 1,
      title: "Медный чайник с фарфоровой ручкой",
      orig_price: "1 953 грн",
      price: "1 953 грн",
      img: "../img1.png"
    },
    {
      id: 2,
      title: "Медный чайник с фарфоровой ручкой",
      orig_price: "1 953 грн",
      price: "1 953 грн",
      img: "../img2.png"
    },
    {
      id: 3,
      title: "Медный чайник с фарфоровой ручкой",
      orig_price: "1 953 грн",
      price: "1 953 грн",
      img: "../img3.png"
    },
  ]

  const thinkUsElem = [
    {
      id: 1,
      avatar: "../avatar.png",
      union: "../Union.svg",
      name: "Иван Иванов",
      descr: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. ",
      date: "20.10.21"
    },
    {
      id: 2,
      avatar: "../avatar.png",
      union: "../Union.svg",
      name: "Иван Иванов",
      descr: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. ",
      date: "20.10.21"
    },
    {
      id: 3,
      avatar: "../avatar.png",
      union: "../Union.svg",
      name: "Иван Иванов",
      descr: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. ",
      date: "20.10.21"
    },
  ]

  const whyUsData = [
    {
      id: 1,
      img: "../autent.png",
      name: "Аутентичность",
      descr: "Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.",
      more: "Читать больше"
    },
    {
      id: 2,
      img: "../autent.png",
      name: "Изысканность",
      descr: "Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....",
      more: "Читать больше"
    },
    {
      id: 3,
      img: "../autent.png",
      name: "Честная оплата",
      descr: "Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c....",
      more: "Читать больше"
    },
    {
      id: 4,
      img: "../autent.png",
      name: "Большой ассортимент",
      descr: "У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования...",
      more: "Читать больше"
    },
    {
      id: 5,
      img: "../autent.png",
      name: "Доставка по всему миру",
      descr: "Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.",
      more: "Читать больше"
    },
    {
      id: 6,
      img: "../autent.png",
      name: "Гарантия качества",
      descr: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. ",
      more: "Читать больше"
    },
    {
      id: 7,
      img: "../autent.png",
      name: "Удобство в использовании",
      descr: "Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной...",
      more: "Читать больше"
    },
    {
      id: 8,
      img: "../autent.png",
      name: "Забота об окружающей среде",
      descr: "От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту....",
      more: "Читать больше"
    },
  ]
  return (
    <>
      <Layout>
        <div className="main">
          <section className="our-products">
            <div className="container">
              <div className="our-products__box">
                <h1>Наша продукция</h1>

                <div className="our-products__elems">
                  {products.map(item => <Product key={item.id} product={item} />)}
                </div>
              </div>
            </div>
          </section>

          <section className="best-sales">
            <img className='left' src={"../arr-left.png"} alt="" />
            <div className="container">
              <div className="best-sales__box">
                <h1>Лучшие продажи</h1>

                <div className="best-sales__elems">
                  {sales.map(item => <Sales key={item.id} sale={item} />)}
                </div>

                <img src={'../pagination.png'} alt="" />
                <button>Перейти в каталог</button>
              </div>
            </div>
            <img className='right' src={"../arr-right.png"} alt="" />
          </section>


          <section className="news">
            <img className='left' src={"../arr-left.png"} alt="" />

            <div className="container">
              <div className="news__box">
                <h1>новинки</h1>

                <div className="news__elems">
                  <div className="news__elem-sale">
                    <img src={"../img1.png"} alt="" />
                    <img className='heart' src={"../../heart.png"} alt="" />
                    <img className='sale' src={"../sale.png"} alt="" />
                    <div className="text">
                      <p className='title'>Медный чайник с фарфоровой ручкой</p>
                      <div className="prices">
                        <p>1 953 грн</p>
                        <p>1 953 грн</p>
                      </div>
                    </div>
                  </div>
                  {news.map(item => <NewsElem key={item.id} news={item} />)}
                </div>
                <img src={"../pagination.png"} alt="" />
                <button>Перейти в каталог</button>
              </div>
            </div>
            <img className='right' src={"../arr-right.png"} alt="" />

          </section>

          <section className="bg">

          </section>

          <section className="we-rec">
            <img className='left' src={"../arr-left.png"} alt="" />
            <div className="container">
              <div className="best-sales__box">
                <h1>Мы рекомендуем</h1>

                <div className="best-sales__elems">
                  {sales.map(item => <Sales key={item.id} sale={item} />)}
                </div>

                <img src={'../pagination.png'} alt="" />
                <button>Перейти в каталог</button>
              </div>
            </div>
            <img className='right' src={"../arr-right.png"} alt="" />
          </section>

          <section className="rec">
          <img className='left' src={"../arr-left.png"} alt="" />
            <div className="container">
              <div className="rec__box">
                  <h1>Скидки</h1>
                  <div className="rec__elems">
                  {discounts.map(item => <Discount key={item.id} discount={item}/>)}
                  </div>
                  <img src={'../pagination.png'} alt="" />
                  <button>Перейти в каталог</button>
              </div>
            </div>
            <img className='right' src={"../arr-right.png"} alt="" />
          </section>

          <section className="think-us">
          <img className='left' src={"../arr-left.png"} alt="" />

            <div className="container">
              <div className="think-us__box">
                <h1>Что думают о нас</h1>

                <div className="think-us__elems">
                  {thinkUsElem.map(item => <ThinkUs key={item.id} item={item}/>)}
                </div>

                <img src="../pagination.png" alt="" />
              </div>
            </div>
            <img className='right' src={"../arr-right.png"} alt="" />

          </section>

          <section className="why-us">
            <div className="container">
              <h1>Почему выбирают нас</h1>
              <div className="why-us__box">
                {whyUsData.map(item => <WhyUsElem key={item.id} item={item}/>)}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default App
