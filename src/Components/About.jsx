import { useState } from "react";
const About = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div className="Navbar">
        <p>hii i from about</p>
      </div>
    </div>
  );
};
export default About;
