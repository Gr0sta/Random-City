import s from './main.module.css'
import {loadCityData} from '../../loadCityData'
import { useEffect, useState } from 'react'
import BtnRandomCity from './BtnRandomCity/BtnRandomCity'
import RenderCity from './RenderCity/RenderCity'

export default function Main (){
    const [cityData, setCityData] = useState([])
    const [randomCity, setRandomCity] = useState()
    const [countryList, setCountryList] = useState([])


    useEffect(()=>{
        loadCityData().then((data)=>{
            setCityData(data)
            if (data.length>0){
                setRandomCity(getRandomCity(data))
                getCountryList(data)
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
        <p>{countryList}</p>
    </main>
    </>
}