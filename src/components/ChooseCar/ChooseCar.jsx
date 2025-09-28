import styles from './ChooseCar.module.scss';

const ChooseCar = () => {
    return (
        <section className={styles.chooseCar}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Choose the car that suits you</h2>
                    <p className={styles.text}>
                        View All
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 5L19 12L12 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </p>
                </header>
            </div>
        </section>
    );
};

export default ChooseCar;