import s from './RenderCity.module.css'


export default function RenderCity ({cityData, randomCity}){
    return <div className={s.container}>
        <table className={s.table}>
            <thead className={s.thead}>
                <tr className={s.theadTr}>
                    <td className={s.theadTd}>Город</td>
                    <td className={s.theadTd}>Страна</td>
                    <td className={s.theadTd}>Население</td>
                </tr>
            </thead>
            <tbody className={s.tbody}>
            {Array.isArray(cityData) && cityData.length > 0 ? (
                randomCity && Array.isArray(randomCity) ? (
                    <tr className={s.tbodyTr}>
                        <td className={s.tbodyTrCity}>{randomCity[0]}</td> 
                        <td className={s.tbodyTrCountry}>{randomCity[3]}</td> 
                        <td className={s.tbodyTrPopulation}>{randomCity[4]}</td> 
                    </tr>
                ) : (
                    <tr className={s.tbodyTrNotFoundFilter}>
                        <td className={s.tbodyTdNotFoundFilter} colSpan={3}><p className={s.notFoundFilter}>Нет подходящих городов по фильтрам.</p></td>
                    </tr> 
                )
            ) : (
                <tr className={s.tbodyTrLoad}>
                    <td className={s.tbodyTdLoad} colSpan={3}>
                        <p className={s.load}>Загрузка...</p>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
}