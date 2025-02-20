import s from './filter.City.module.css'
import FilterCityCountry from './FilterCityCountry/FilterCityCountry'
import FilterCityPopulation from './FilterCityPopulation/FilterCityPopulaton'

export default function FilterCity ({countryList, populationList, hundleFilterCountry , hundleFilterPopulation}){
    return <div className={s.filterCover}>
        <p className={s.filterTitle}>Фильтры</p>
        <FilterCityCountry 
            countryList = {countryList} 
            hundleFilterCountry = {hundleFilterCountry}
        />
        <FilterCityPopulation 
            populationList = {populationList} 
            hundleFilterPopulation = {hundleFilterPopulation}    
        />
    </div>
}