import s from './filter.City.module.css'
import FilterCityCountry from './FilterCityCountry/FilterCityCountry'
import FilterCityPopulation from './FilterCityPopulation/FilterCityPopulaton'

export default function FilterCity ({countryList}){
    return <div className={s.filterCover}>
        <FilterCityCountry countryList = {countryList} />
        <FilterCityPopulation/>
    </div>
}