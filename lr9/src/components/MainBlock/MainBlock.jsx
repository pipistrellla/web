import React from 'react'
import cls from './MainBlock.module.css'

const MainBlock = (props) => {

    const {imgSrc, text, headerText} = props

    return (
    <div className= {cls.blocks}>
        <img src={imgSrc} className={cls.img} alt="pic"/>
        <h3>{headerText}</h3>
        <p>{text}</p>
    </div>
    
    )
}

export default MainBlock;