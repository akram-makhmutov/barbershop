import styles from './Choose.module.scss'
import choose from '../../../global/assets/images/choose.svg'

export const Choose = () => {
    return (
        <div className={styles.choose}>
            <img src={choose} alt="choose"/>
            <div className={styles.headerChoose}>Why choose us?</div>
            <div className={styles.paragraphChoose}>
                In addition, there 5 more reasons why men prefer Manhattan Barbershop N.Y.C:
            </div>
            <div className={styles.listChoose}>
                <ul>
                    <li>Always welcoming environment</li>
                    <li>Our masters focus on the quality</li>
                    <li>We value both the time and the money of our clients</li>
                    <li>We work only with high-quality, hypoallergenic premium products</li>
                    <li>All surfaces and tools are cleaned, disinfected before and after using</li>
                </ul>
            </div>

        </div>
)
    ;
}