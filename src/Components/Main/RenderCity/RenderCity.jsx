import s from './RenderCity.module.css'


export default function RenderCity ({cityData, randomCity}){
    return <div className={s.container}>
        {Array.isArray(cityData) && cityData.length > 0 ? (
                randomCity && Array.isArray(randomCity) ? (
                    <div className={s.cityTextCover}>
                        <p className={s.city}>{randomCity[0]}</p> 
                        <p className={s.country}>{randomCity[3]}</p> 
                        <p className={s.population}>{randomCity[4]}</p> 
                    </div>
                ) : (
                    <p>Нет подходящих городов по фильтрам.</p> 
                )
            ) : (
                <p>Загрузка...</p>
            )}
    </div>
}