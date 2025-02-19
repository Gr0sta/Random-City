import s from './main.module.css'
import {loadCityData} from '../../loadCityData'
import { useEffect, useState } from 'react'
import BtnRandomCity from './BtnRandomCity/BtnRandomCity'
import RenderCity from './RenderCity/RenderCity'
import FilterCity from './FilterCity/FilterCity'

export default function Main (){
    const [cityData, setCityData] = useState([])
    const [randomCity, setRandomCity] = useState()
    const [countryList, setCountryList] = useState([])
    const [populationList, setPopulationList] = useState([])


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
        return cityData[Math.floor(Math.random()*cityData.length)]
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

    return<>
    <main className={s.main}>
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
        />
    </main>
    </>
}