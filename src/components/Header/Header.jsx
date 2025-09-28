import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phoneIcon.png";

const Header = () => {
    const location = useLocation();

    const links = [
        { name: "Home", to: "/" },
        { name: "Vehicles", to: "/vehicles" },
        { name: "Details", to: "/details" },
        { name: "About Us", to: "/about" },
        { name: "Contact Us", to: "/contact" },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Логотип */}
                <div className={styles.logo}>
                    <Link to="/" aria-label="Car Rental Home">
                        <img src={logo} alt="Car Rental Logo" />
                    </Link>
                </div>

                {/* Навигация */}
                <nav className={styles.nav} aria-label="Главная навигация">
                    <ul className={styles.navList}>
                        {links.map(link => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    className={location.pathname === link.to ? styles.active : ""}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Контакты */}
                <div className={styles.actions}>
                    <img src={phone} className={styles.phoneIcon} alt="Телефон" />
                    <div className={styles.contact}>
                        <span className={styles.contactTitle}>Need help?</span>
                        <a href="tel:+9962471680" className={styles.phoneNumber}>
                            +996 247-1680
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
