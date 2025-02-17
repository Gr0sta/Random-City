import s from '../Styles/main.module.css'


export default function Main (){
    


    return<>
    <div className={s.contaienr}>
        <FilterCountry></FilterCountry>
        <RenderCountry></RenderCountry>
        <RenderCountryList></RenderCountryList>
        {/* <div className={s.selectCountry}></div>
        <div className={s.filter}></div>
        <div className={s.renderCountry}></div>
        <div className={s.renderCountryList}></div> */}
    </div>
    </>
}