import React, { useEffect, useState } from 'react'
import './ChosenItem.css'
import imgBtn from './img/imgBtn.svg'
import StoreIntro from './StoreIntro'
import GoogleMap from './GoogleMap'
function ChosenItem({item, itemState, chosenItemImg }) {
    const [imgOrder, setImgOrder] = useState(0)
    const [storePos, setStorePos] = useState({lat:0,lng:0,})
    useEffect(()=>{
        if(chosenItemImg[3] == "xiantao") setStorePos({lat:24.966094434652543,lng:121.26814353648594})
        if(chosenItemImg[3] == "AhZhong") setStorePos({lat:24.96691572958997,lng:121.262484099394})
        if(chosenItemImg[3] == "cattlesteak") setStorePos({lat:24.967273156025094,lng:121.26327425661873})
        if(chosenItemImg[3] == "catcoldnoodles") setStorePos({lat:24.967077593674187,lng:121.26349407037867})
        if(chosenItemImg[3] == "barbados") setStorePos({lat:24.96697083817794,lng:121.26274951249704})
        if(chosenItemImg[3] == "smilefish") setStorePos({lat:24.966768084014827,lng:121.26385239764576})
    },[chosenItemImg])

    useEffect(()=>{
        setImgOrder(0)
    },[itemState])
    function handleOnClick(change) {
        setImgOrder(function (perv) { 
            if (perv === 2 && change === 1)
                return 0
            if (perv === 0 && change === -1)
                return 2
            return perv + change
        })
    }
    return (
        <div className={itemState}>
            <div className='imgBlock'><img className='chosenItemImg' src={chosenItemImg[imgOrder]} alt="chosenItemImg" /></div>
            <GoogleMap storePos={storePos}></GoogleMap>
            <img src={imgBtn} className='leftImgBtn' alt='leftImgBtn' onClick={() => handleOnClick(1)} />
            <img src={imgBtn} className='rightImgBtn' alt='rightImgBtn' onClick={() => handleOnClick(-1)} />
            <StoreIntro itemState={itemState} storeName={chosenItemImg[3]}></StoreIntro>
        </div>
    )
}

export default ChosenItem