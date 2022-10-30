import React from 'react'
import './GuideItem.css'
import smilefish01 from './img/smilefish/smilefish01.jpg'
import smilefish02 from './img/smilefish/smilefish02.jpg'
import smilefish03 from './img/smilefish/smilefish03.jpg'
import barbados01 from './img/barbados/barbados01.jpg'
import barbados02 from './img/barbados/barbados02.jpg'
import barbados03 from './img/barbados/barbados03.jpg'
import catcoldnoodles01 from './img/catcoldnoodles/catcoldnoodles01.jpg'
import catcoldnoodles02 from './img/catcoldnoodles/catcoldnoodles02.jpg'
import catcoldnoodles03 from './img/catcoldnoodles/catcoldnoodles03.jpg'
import cattlesteak01 from './img/cattlesteak/cattlesteak01.jpg'
import cattlesteak02 from './img/cattlesteak/cattlesteak02.jpg'
import cattlesteak03 from './img/cattlesteak/cattlesteak03.jpg'
import AhZhong01 from './img/AhZhong/AhZhong01.jpg'
import AhZhong02 from './img/AhZhong/AhZhong02.jpg'
import AhZhong03 from './img/AhZhong/AhZhong03.jpg'
import xiantao01 from './img/xiantao/xiantao01.jpg'
import xiantao02 from './img/xiantao/xiantao02.jpg'
import xiantao03 from './img/xiantao/xiantao03.jpg'
var xiantaoImg = [xiantao01, xiantao02, xiantao03, "xiantao"]
var AhZhongImg = [AhZhong01, AhZhong02, AhZhong03, "AhZhong"]
var cattlesteakImg = [cattlesteak01, cattlesteak02, cattlesteak03, "cattlesteak"]
var catcoldnoodlesImg = [catcoldnoodles01, catcoldnoodles02, catcoldnoodles03, "catcoldnoodles"]
var barbadosImg = [barbados01, barbados02, barbados03, "barbados"]
var smilefishImg = [smilefish01, smilefish02, smilefish03, "smilefish"]

function GuideItem({ item, itemImg, itemState, setItemState, setChosenItemImg }) {
    var phone = window.matchMedia("(max-width: 720px)");

    function openItem() {
        if (phone.matches){
            setTimeout(() => {
                window.scrollTo({ top: 260, behavior: "smooth" });
            }, 300);
        }
        else{
            setTimeout(() => {
                window.scrollTo({ top: 400, behavior: "smooth" });
            }, 300);
        }
          

        if (itemState === "nonDisplay")
            setItemState("itemContainer")
        else if (itemState === "itemContainer")
            setItemState("itemContainerChange")
        else if (itemState === "itemContainerChange")
            setItemState("itemContainer")

        if (item === "smilefish")
            setChosenItemImg(smilefishImg)
        if (item === "barbados")
            setChosenItemImg(barbadosImg)
        if (item === "catcoldnoodles")
            setChosenItemImg(catcoldnoodlesImg)
        if (item === "cattlesteak")
            setChosenItemImg(cattlesteakImg)
        if (item === "AhZhong")
            setChosenItemImg(AhZhongImg)
        if (item === "xiantao")
            setChosenItemImg(xiantaoImg)

    }

    return (
        <div className='itemBlock' onClick={() => openItem()}>
            <img className='itemImg' src={itemImg} alt={itemImg} />
        </div>
    )
}

export default GuideItem