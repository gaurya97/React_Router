import { useState } from "react";
import { UseRequestData } from "../CustomeHooks/UseRequestData";
import { UseOnlineStatus } from "../CustomeHooks/UseOnlineStatus";
const About = () => {
  console.log('component render');
  const [visible, setVisible] = useState(false);
  const data = UseRequestData();
  const online =UseOnlineStatus()
  console.log('online',online)
 if(data && online){
  console.log(data)
 }
 else{
  console.log('data is not available');
 }
  return (
    <div>
      <div className="Navbar">
        <p>hii i from about</p>
      </div>
    </div>
  );
};
export default About;
