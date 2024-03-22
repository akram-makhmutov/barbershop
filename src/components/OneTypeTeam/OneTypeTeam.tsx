import { useState, useEffect } from 'react';
import styles from './OneTypeTeam.module.scss';
import More from '../More/More.tsx';

interface Props {
    image: string;
    list: { name: string, text: string }[];
}

const OneTypeTeam = ({ image, list }: Props) => {
    const [city, setCity] = useState<string | null>(null);

    useEffect(() => {
        const apiUrl = 'https://randomuser.me/api';

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка сети или сервера');
                }
                return response.json();
            })
            .then(data => {
                const fetchedCity = data.results[0].location.city;
                console.log('Получен город:', fetchedCity);
                setCity(fetchedCity);
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    }, []); // Пустой массив зависимостей гарантирует, что эффект будет выполняться только один раз

    return (
        <div>
            <img src={image} alt="image" />
            <div className={styles.oneTypeTeam}>
                {list && list.map((item, index) => (
                    <div key={index} className={styles.oneTypeTeamText}>{item.name}
                        {city && <More text={city} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OneTypeTeam;
