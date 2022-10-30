import React, { useState, useEffect } from 'react'
import GuideBox from './GuideBox'
import banner from './img/banner.png'
import burger from './img/burgerMenu.png'
import './HomePage.css'
//RWD //CSS //

function HomePage() {
    const [itemState, setItemState] = useState("nonDisplay")

    return (
        <div className="container">
            <div className="header">
                <nav className='hamburgerMenu'>
                    <label htmlFor="switch"><img className='menuIcon' src={burger} /></label>
                    <input type="checkbox" id="switch"></input>
                    <ul className="menu">
                        <li><a href="##">最新消息</a></li>
                        <li><a href="##">線上訂餐</a></li>
                        <li><a href="##">登入會員</a></li>
                        <li><a href="##">聯絡我們</a></li>
                    </ul>
                </nav>
                <img className='banner' src={banner} alt="banner.png" />
                <nav className='contactInfo'>
                    <button className='infoBtn'>最新消息(未完成)</button>
                    <button className='infoBtn'>線上訂餐(未完成)</button>
                    <button className='infoBtn'>登入會員(未完成)</button>
                    <button className='infoBtn'>聯絡我們</button>
                </nav>

            </div>
            <GuideBox itemState={itemState} setItemState={setItemState}></GuideBox>
            <div className="bottom"></div>
        </div>
    )
}

export default HomePage