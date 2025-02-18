import s from './filterCityCountry.module.css'

export default function FilterCityCountry ({countryList}) {
    return <div className={s}>
        <input type="text" list='data'/>
        <datalist id='data'>
            {countryList.map(country => {
                return <option> {country} </option>
            })}
        </datalist>
    </div>
}