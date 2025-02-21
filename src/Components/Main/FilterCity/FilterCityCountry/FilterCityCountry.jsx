import { useState } from 'react'
import s from './filterCityCountry.module.css'

export default function FilterCityCountry ({countryList, hundleFilterCountry}) {
    const [countryInput, setCountryInput] = useState('')

    function countryInputHandler (event){
        setCountryInput(event.target.value)
        hundleFilterCountry(event.target.value)
    }

    return <div className={s.filterCountryCover}>
        <label className={s.filterCountryLabel} htmlFor="countryInput">Страны</label>
        <input className={s.filterCountryInput}
               id='countryInput'
               type="text"
               placeholder='Название страны' 
               list='data'
               value={countryInput} 
               onChange={countryInputHandler}/>

        <datalist id='data'>
            {countryList.map((country, index) => {
                return <option key={index}> {country} </option>
            })}
        </datalist>
    </div>
}