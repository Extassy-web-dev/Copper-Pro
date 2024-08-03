import './Layout.scss'

function Layout({ children }) {
    return (
        <>
            <section className="top">
                <img className='left-arr' src={"../../arr-left-white.png"} alt="" />
                <header id='header'>
                    <div className="container">
                        <div className="box">
                            <div className="left-center">
                                <div className="left">
                                    <a href="/"><img src={"../../logo.png"} alt="" /></a>
                                </div>
                                <div className="center">
                                    <nav className='nav-center'>
                                        <a className='active' href="#">Каталог</a>
                                        <a href="#">Новости</a>
                                        <a href="#">Доставка</a>
                                        <a href="#">О нас</a>
                                        <a href="#">Контакты</a>
                                    </nav>
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <img src={"../../Group 11.png"} alt="" />
                                </div>
                                <div>
                                    <img src={"../../Group 15.png"} alt="" />
                                </div>

                                <div>
                                    <img src={"../../Group 11.png"} alt="" />
                                </div>

                            </div>
                        </div>

                    </div>
                </header>

                <div className="container">
                    <div className="hit">
                        <h1>Хит продаж</h1>
                        <div className="line"></div>
                        <h2>Дистиллятор для эфирных масел </h2>
                        <div className="text">
                            <span>Цена</span>
                            <span>4 906 грн</span>
                        </div>

                        <button>Купить</button>

                        <img src={"../../slider.png"} alt="" />
                    </div>
                </div>
                <img className='right-arr' src={"../../arr-right-white.png"} alt="" />
            </section>
            {children}
            <footer>
                <div className="container">
                    <div className="box">
                        <div className="left">
                            <img src={"../../logo.png"} alt="" />
                            <p>© 2021 “Copper Pro” 
                            Все права защищенны</p>
                            <a href="#">Политика конфиденциальности</a>
                        </div>
                        <div className="right">
                            <div className="column">
                                <label>Навигация</label>
                                <a href="#">Каталог</a>
                                <a href="#">Новости</a>
                                <a href="#">Доставка</a>
                                <a href="#">О нас</a>
                                <a href="#">Контакты</a>
                            </div>
                            <div className="column">
                                <label>Каталог</label>
                                <a href="#">Для эфирных масел</a>
                                <a href="#">Для гидролатов</a>
                                <a href="#">Медная посуда</a>
                                <a href="#">Аксессуары из меди</a>
                                <a href="#">Индивидуальный заказ</a>
                                <a href="#">Скидки и предложения</a>
                            </div>
                            <div className="column">
                                <label>Контакты</label>
                                <p>Бажана 8-Б, Киев, 
                                02132 Украина</p>
                                <p>+38 (096) 990 67 56</p>
                                <p>a.alambik@gmail.com</p>
                                <img src={"../../media.png"} alt="" />
                            </div>
                        </div>
                    </div>
                    <a href="#header"><img className='up' src={"../../up.png"} alt=""/></a>
                </div>
            </footer>
        </>
    )
}

export default Layout;