import React, { useState } from "react";
import styles from "./Hero.module.scss";
import selectArrow from "../../assets/selectArrow.png";

const DropDown = ({ title, items = [], onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleSelect = (item) => {
        setSelected(item);
        setIsOpen(false);
        if (onSelect) onSelect(item);
    };

    return (
        <div className={styles.dropdown}>
            <button
                className={styles.header}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{selected || title}</span>
                {isOpen ? <img src={selectArrow} /> : <img src={selectArrow} style={{ transform: "rotate(180deg)" }} />}
            </button>

            {isOpen && (
                <ul className={styles.list}>
                    {items.map((item, idx) => (
                        <li
                            key={idx}
                            className={styles.item}
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const DateInput = ({ title, onSelect }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onSelect) onSelect(e.target.value);
  };

  return (
    <div className={styles.dateInput}>
      <label className={styles.label}>{title}</label>
      <div className={styles.wrapper}>
        <input
          type="date"
          value={value}
          onChange={handleChange}
          className={styles.input}
        />
        {/* <img src={selectArrow} alt="arrow" className={styles.arrow} /> */}
      </div>
    </div>
  );
};

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Experience the road like never before</h1>
                    <p className={styles.description}>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
                    <button className={styles.button}>View all cars</button>
                </div>
                <div className={styles.form}>
                    <h2 className={styles.formTitle}>Book your car</h2>
                    <DropDown
                        title="Car type"
                        items={["BMW", "Audi", "Mercedes"]}
                        onSelect={(val) => console.log("Выбран:", val)}
                    />
                    <DropDown
                        title="Place of rental"
                        items={["BMW", "Audi", "Mercedes"]}
                        onSelect={(val) => console.log("Выбран:", val)}
                    />
                    <DropDown
                        title="Place of return"
                        items={["BMW", "Audi", "Mercedes"]}
                        onSelect={(val) => console.log("Выбран:", val)}
                    />
                    <DateInput title="Rental date" onSelect={(date) => console.log(date)} />
                    <DateInput title="Return date" onSelect={(date) => console.log(date)} />

                    <button className={styles.formButton}>Book now</button>
                </div>

            </div>
        </section>
    );
};

export default Hero;
