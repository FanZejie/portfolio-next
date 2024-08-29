import Image from "next/image";
import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <Image src={item.image} alt="" width={200} height={200} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="link__box">
      <div  className="work__button" onClick={() => {
        if (item.link) {
          window.open(item.link, "_blank");
        }else{
          alert('Demo Coming Soon')
        }
        
      }}>
        View
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </div>

      <div  className="work__button" onClick={() => {
        if (item.link) {
          window.open(item.githubLink, "_blank");
        }else{
          alert('Demo Coming Soon')
        }
        
      }}>
        github
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </div>
      </div>
      
      
    </div>
  );
};

export default WorkItems;
