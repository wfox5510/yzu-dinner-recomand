import React, { useEffect } from 'react'
import './StoreIntro.css'
const intro = [
    { name: "微笑的魚", intro: "提供簡單的早午餐和最好的服務,鬆餅專賣店,一次可以選擇兩種口味,飲品讓人眼睛一亮" },
    { name: "貓寶涼麵", intro: "進去就是玩貓,涼麵加上大蒜跟荷包蛋令人上癮,晚上幾乎客滿,貓咪很可愛" },
    { name: "巴貝多", intro: "善良的老闆娘,便宜好吃的早餐為窮苦大學生帶來一線生機,中午剩下的餐點會有買一送一非常划算" },   
    { name: "放牛班", intro: "歷史悠久的百元牛排館,飲料和濃湯一百元喝到飽,熱情得老闆娘帶給你一天好心情" },
    { name: "阿忠鹹酥雞", intro: "最可愛老闆娘沒有之一,套餐價格對錢包友善,讓你在月底也能半夜跟室友開小灶" },
    { name: "仙桃總鋪", intro: "元智校內學餐,70元便當雞排跟臉一樣大,一個便當可以抵兩餐,元智良心" },
]

var introOrder = 0

function StroeIntro({itemState, storeName }) {
   
    useEffect(() => {
        console.log(storeName)
        if (storeName === "smilefish")
            introOrder = 0
        if (storeName === "catcoldnoodles")
            introOrder = 1
        if (storeName === "barbados")
            introOrder = 2
        if (storeName === "cattlesteak")
            introOrder = 3
        if (storeName === "AhZhong")
            introOrder = 4
        if (storeName === "xiantao")
            introOrder = 5
    }, [itemState])

    return (
        <div className='introBox' onClick={() => { console.log(storeName) }}>
            <h2 className='introHead'>{intro[introOrder].name}</h2>
            <p className='introContent'>{intro[introOrder].intro}</p>
        </div>
    )
}

export default StroeIntro