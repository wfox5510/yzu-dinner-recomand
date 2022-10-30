import React, { useState,useEffect } from 'react'
import './GuideBox.css'
import GuideItem from './GuideItem'
import ChosenItem from './ChosenItem'
import smilefish from './img/itemBlock/smilefish.jpg'
import catcoldnoodles from './img/itemBlock/catcoldnoodles.jpg'
import barbados from './img/itemBlock/barbados.jpg'
import cattlesteak from './img/itemBlock/cattlesteak.jpg'
import AhZhong from './img/itemBlock/AhZhong.jpg'
import xiantao from './img/itemBlock/xiantao.jpg'
function GuideBox({itemState,setItemState}) {
    const [chosenItemImg, setChosenItemImg] = useState("")
    useEffect(()=>{
        console.log(itemState)
    },[itemState])
    
    return (
        <div className='guideBox'>
            <ChosenItem itemState={itemState} chosenItemImg={chosenItemImg}></ChosenItem>
            <div className='contentBlock'>
                <GuideItem item={"smilefish"} itemImg={smilefish} itemState={itemState} setItemState={setItemState} setChosenItemImg={setChosenItemImg}></GuideItem>
                <GuideItem item={"catcoldnoodles"} itemImg={catcoldnoodles} itemState={itemState} setItemState={setItemState} setChosenItemImg={setChosenItemImg}></GuideItem>
                <GuideItem item={"barbados"} itemImg={barbados} itemState={itemState} setItemState={setItemState} setChosenItemImg={setChosenItemImg}></GuideItem>
                <GuideItem item={"cattlesteak"} itemImg={cattlesteak} itemState={itemState} setItemState={setItemState} setChosenItemImg={setChosenItemImg}></GuideItem>
                <GuideItem item={"AhZhong"} itemImg={AhZhong} itemState={itemState} setItemState={setItemState} setChosenItemImg={setChosenItemImg}></GuideItem>
                <GuideItem item={"xiantao"} itemImg={xiantao} itemState={itemState} setItemState={setItemState} setChosenItemImg={setChosenItemImg}></GuideItem>
            </div>
        </div>
    )
}

export default GuideBox