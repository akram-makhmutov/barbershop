import styles from './Choose.module.scss'
import BookOnline from '../BookOnline/BookOnline.tsx'
import choose from '../../../global/assets/images/choose.svg'

const Choose = () => {
    return (
        <div className={styles.chooseContainer} style={{backgroundImage: `url(${choose})`}}>
            <div className={styles.textPosition}>
                <div className={styles.whyChooseUs}>
                    <div className={styles.choose}>
                        <div className={styles.headerChoose}>Why choose us?</div>
                        <div className={styles.paragraphChoose}>
                            In addition, there 5 more reasons why men <br/> prefer Manhattan Barbershop N.Y.C:
                        </div>
                        <div className={styles.listChoose}>
                            <ul>
                                <li>Always welcoming environment</li>
                                <li>Our masters focus on the quality</li>
                                <li>We value both the time <br/> and the money of our clients</li>
                                <li>We work only with high-quality, <br/> hypoallergenic premium products</li>
                                <li>All surfaces and tools are cleaned, <br/> disinfected before and after using</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.rectangle}>
                        <div className={styles.workingHours}>WORKING HOURS</div>
                        <div className={styles.schedule}>
                            <ul>
                                <li>SUNDAY 10 AM – 5 PM</li>
                                <li>MONDAY 9 AM – 7PM</li>
                                <li>TUESDAY 8AM – 8PM</li>
                                <li>WEDNESDAY 8AM – 8PM</li>
                                <li>THURSDAY 8AM – 8PM</li>
                                <li>FRIDAY 8AM – 7PM</li>
                                <li>SATURDAY 9AM – 6PM</li>
                            </ul>
                        </div>
                        <BookOnline/>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Choose;