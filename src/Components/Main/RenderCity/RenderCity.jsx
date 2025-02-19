import s from './RenderCity.module.css'


export default function RenderCity ({cityData, randomCity}){
    return <div className={s.renderCityCover}>
        {cityData.length > 0 ? (
                randomCity ? (
                    <div>
                        <p>{randomCity[0]}</p> 
                        <p>{randomCity[3]}</p> 
                        <p>{randomCity[4]}</p> 
                    </div>
                ) : (
                    <p>Нет подходящих городов по фильтрам.</p> 
                )
            ) : (
                <p>Загрузка...</p>
            )}
    </div>
}