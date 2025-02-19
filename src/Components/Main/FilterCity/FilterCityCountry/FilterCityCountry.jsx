import { useState } from 'react'
import s from './filterCityCountry.module.css'

export default function FilterCityCountry ({countryList}) {
    const [countryInput, setCountryInput] = useState('')

    function countryInputHandler (event){
        setCountryInput(event.target.value)
    }

    return <div className={s}>
        <input type="text" list='data' value={countryInput} onChange={countryInputHandler} />
        <datalist id='data'>
            {countryList.map(country => {
                return <option> {country} </option>
            })}
        </datalist>
        {countryList.includes(countryInput) ? <p>{countryInput}</p>:<p>"Такой страны нету"</p>}
    </div>
}