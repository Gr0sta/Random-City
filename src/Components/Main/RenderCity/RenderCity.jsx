import s from './RenderCity.module.css'


export default function RenderCity ({cityData, randomCity}){
    return <div className={s.renderCityCover}>
        {(cityData.length>0 ? 
            <p>{randomCity}</p> :
            <p>Загрузка...</p>
        )}
    </div>
}