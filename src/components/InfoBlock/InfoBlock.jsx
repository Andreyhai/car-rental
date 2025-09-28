import React from "react";
import styles from "./InfoBlock.module.scss";
import car from "../../assets/icons/car.png";
import location from "../../assets/icons/location.png";
import wallet from "../../assets/icons/wallet.png";


const InfoBlock = () => {
  
    const blocks = [
        {
            icon: car,
            title: "Availability",
            text: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
        }, 
        {
            icon: location,
            title: "Comfort",
            text: "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
        }, 
        {
            icon: wallet,
            title: "Savings",
            text: "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
        }, ]
  
    return (
    <section className={styles.infoBlock}>
      <div className={styles.container}>
        {blocks.map((block, idx) => (
          <div key={idx} className={styles.block}>
            {block.icon && <img src={block.icon} alt="" className={styles.icon} />}
            {block.title && <h3 className={styles.title}>{block.title}</h3>}
            {block.text && <p className={styles.text}>{block.text}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoBlock;
