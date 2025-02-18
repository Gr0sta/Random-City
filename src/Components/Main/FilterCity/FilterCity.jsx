import s from './filter.City.module.css'
import FilterCityCountry from './FilterCityCountry/FilterCityCountry'
import FilterCityPopulation from './FilterCityPopulation/FilterCityPopulaton.jsx'

export default function FilterCity (){
    return <div className={s.filterCover}>
        <FilterCityCountry/>
        <FilterCityPopulation/>
    </div>
}