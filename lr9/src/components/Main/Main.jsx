import React from 'react'
import cls from './main.module.css'
import img1 from '../../image/f3.png'
import img2 from '../../image/f4.png'
import img3 from '../../image/f5.png'
import MainBlock from '../MainBlock/MainBlock'


const Main = () => {

    const itemsArray = [[img1,'Первый блок'],[img2, 'Второй блок'],[img3, 'Третий блок']]

    return (
        <div className={cls.container}>
            <div className={cls.main}>
                <div className={cls.container}>
                    <h2 className={cls.main_title}>Что Вам необходимо?</h2>
                    <div className={cls.main_block}> 
                        {itemsArray.map((item) => 
                            <MainBlock
                                text = {'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                                headerText = {item[1]}
                                imgSrc = {item[0]}
                        />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;