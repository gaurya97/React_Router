import { useState,useEffect } from "react";
import { UseRequestData } from "../CustomeHooks/UseRequestData";
import { idText } from "typescript";
import Card from "./Card";
import "../styles.css";
// import { UseOnlineStatus } from "../CustomeHooks/UseOnlineStatus";

const About = () => {
  console.log('component render');
  const [visible, setVisible] = useState(false);
  const data = UseRequestData();
  // const online =UseOnlineStatus()

  const [online , setOnline] = useState(null);

  
  console.log(data)
 




//  if(data){
//   // [info]=data.data.cards[0].card.card.gridElements.infoWithStyle;
// //  console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
// //  console.log(data)
//  data.map((Element)=>{
//   const {id,name,cuisines,avgRatingString,areaName,cloudinaryImageId
//    } = Element.info;
//    console.log(Element.info.id);
//  })
//  }
//  else{
//   console.log('data is not available');
//  }
if(!data){
  return<><span>loading..</span></>
}
return (
    <div className="flex">
      {data.map((Element)=>{
      const {id,name,cuisines,avgRatingString,areaName,cloudinaryImageId
       } = Element.info;
      //  console.log(id,name,cuisines.join(","),avgRatingString,areaName,cloudinaryImageId)
      return <Card key={id} id ={id} name ={name} cuisines={cuisines.join(",")} avgRatingString={avgRatingString} areaName={areaName} cloudinaryImageId={cloudinaryImageId}   />
    
     })} 
     
    </div>
  ) 
};
export default About;
