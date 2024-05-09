import React, { useState } from 'react';
import cls from './PizzaCard.module.css';
import pizza from '../../assets/img/peperoni_pizza.webp';
import cart from '../../assets/img/cart.png';

const PizzaCard = () => {
    const [pizzaCount, setPizzaCount] = useState(1);

    const handleClickIncreasePizzaCount = () => {
        setPizzaCount(pizzaCount + 1);
    };

    const handleClickDecreasePizzaCount = () => {
        if (pizzaCount > 0)
            setPizzaCount(pizzaCount - 1);
    };

    const handleClickMakeOrder = () => {
        pizzaCount ===0 
        ? alert(`Вы ничего не заказали`)
        : alert(`Количество заказанного товара: ${pizzaCount}`)
    }

    return (
        <div className={cls.pizzaCard}>
            
                <div>
                    <img
                        className={cls.pizzaPicture}
                        src={pizza}
                        alt='peperoni'
                    />
                    <div className={cls.PizzaMark}>Хит сезона</div>
                </div>

                <div className={cls.mainPizzaBlock}>
                    <div className={cls.pizzaTitle}>Пепперони</div>
                    <div className={cls.pizzaDescription}>
                        Ничего лишнего! 
                        Томатный соус, колбаски, Пепперони и Мацарелла
                    </div>
                
                    <select className={cls.pizzaSelect}>
                        <option
                            disabled
                            selected
                        >
                            Диаметр
                        </option>
                        <option>15 см</option>
                        <option>25 см</option>
                        <option>30 см</option>
                        <option>40 см</option>
                    </select>

                    <div className={cls.pizzaPrice}>от 550 ₽</div>

                    <div className={cls.pizzaOrderSection}>
                        <button
                            className={cls.count}
                            onClick={handleClickDecreasePizzaCount}
                        >
                            -
                        </button>
                        <div className={cls.counter}>{pizzaCount}</div>
                        <button
                            className={cls.count}
                            onClick={handleClickIncreasePizzaCount}
                        >
                            +
                        </button>
                        <img
                            src={cart}
                            alt='cart'
                            className={cls.cartImage}
                            onClick={handleClickMakeOrder}
                        />
                    </div>
                </div>
        </div>
    );
};

export default PizzaCard;
