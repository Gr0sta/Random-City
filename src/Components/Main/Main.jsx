import s from './main.module.css'
import {loadCityData} from '../../loadCityData'
import { useEffect, useState } from 'react'
import BtnRandomCity from './BtnRandomCity/BtnRandomCity'
import RenderCity from './RenderCity/RenderCity'
import FilterCity from './FilterCity/FilterCity'

export default function Main (){
    const [cityData, setCityData] = useState([ ])
    const [randomCity, setRandomCity] = useState()
    const [countryList, setCountryList] = useState([])
    const [populationList, setPopulationList] = useState([])

    const [filterCountry, setFilterCountry] = useState('')
    const [filterPopulation, setFilterPopulation] = useState([5000,35676000])
    

    useEffect(()=>{
        loadCityData().then((data)=>{
            setCityData(data)
            if (data.length>0){
                setRandomCity(getRandomCity(data))
                getCountryList(data)
                getPopulationList(data)
            }
        });
    },[])


    function getRandomCity(cityData){
        const filteredCities = cityData.filter(city => 
            (filterCountry === '' || city[3] === filterCountry) && 
            city[4] >= filterPopulation[0] && 
            city[4] <= filterPopulation[1]
        );
        if (filteredCities.length === 0) return null;
        return filteredCities[Math.floor(Math.random() * filteredCities.length)];
    }

    function createRandomCity (cityData){
        setRandomCity(getRandomCity(cityData))
    }

    function getCountryList (cityData){
        const countrySet = new Set();

        cityData.forEach((country, index) => {
            if (country[index] !== country[0]){
                countrySet.add(country[3])    
            }
        });
        setCountryList([...countrySet])
    }

    function getPopulationList (cityData) {
        const populationSet = new Set();
        cityData.forEach((population, index) => {
            if (population[index] !== population[0]){
                populationSet.add(population[4])
            }
        });
        setPopulationList([...populationSet])
    }

    function hundleFilterCountry (filterCountry) {
        setFilterCountry(filterCountry)
    }

    function hundleFilterPopulation (filterPopulation) {
        setFilterPopulation(filterPopulation)
    }

    function getMinMax (arr){
        return [Math.min(...arr), Math.max(...arr)];
    }

    return<>
    <main className={s.main}>
        <div className={s.container}>
            <BtnRandomCity
                cityData = {cityData}
                createRandomCity = {createRandomCity}
            />
            <RenderCity
                cityData = {cityData}
                randomCity = {randomCity}
            />
            <FilterCity
                countryList={countryList}
                populationList ={populationList}
                hundleFilterCountry = {hundleFilterCountry}
                hundleFilterPopulation = {hundleFilterPopulation}
            />
        </div>
    </main>
    </>
}   