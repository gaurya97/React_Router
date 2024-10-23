import React, { useEffect, useState } from 'react'

export const UseRequestData = () => {
const [list , setList]=useState(null);
    useEffect(()=>{
getData();
    },[])

const getData =async ()=>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json =await data.json();
    setList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   
}

return list;
   
}
