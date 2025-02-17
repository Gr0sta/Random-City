import s from './btnRandomCity.module.css'

export default function BtnRandomCity ({ cityData, createRandomCity }){
    return <div className={s.btnCover}>
        <button className={s.btn} onClick={()=>createRandomCity(cityData)} >Сгенерировать случайный город</button>
    </div>
}