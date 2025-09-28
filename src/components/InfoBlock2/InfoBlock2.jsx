import styles from './InfoBlock2.module.scss'
import imageSrc from '../../assets/info2.png'

const Point = ({ count, title, text }) => {
    return (
        <div className={styles.point} key={count}>
            <div className={styles.header}>
                <span className={styles.count}>{count}</span>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

const points = [
    {
        count: 1,
        title: "Erat at semper",
        text: "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum dui ornare praesent. Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero at nulla nibh quis. Quis neque donec est scelerisque lectus bibendum. Ut a a donec ante in venenatis. Risus tortor adipiscing eget enim."
    }, {
        count: 2,
        title: "Urna nec vivamus risus duis arcu",
        text: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper"
    }, {
        count: 3,
        title: "Lobortis euismod imperdiet tempus",
        text: "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi"
    }, {
        count: 4,
        title: "Cras nulla aliquet nam eleifend amet et",
        text: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero"
    }
]

const InfoBlock2 = () => {
    return (
        <section className={styles.infoBlock}>
            <div className={styles.container}>
                <div><img src={imageSrc} alt="image" /></div>
                <div>
                    {points.map(point => (
                        <Point 
                        count={point.count} 
                        title={point.title} 
                        text={point.text} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default InfoBlock2