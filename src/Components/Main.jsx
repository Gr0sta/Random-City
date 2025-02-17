import { useEffect, useState } from 'react'
import s from '../Styles/main.module.css'
import { loadCountryData } from '../loadCountryData';


export default function Main (){

    const[cityList, setCityList]= useState([]);
    const[randomCity, setRandomCity] = useState(null)
    const[cityNameList, setCityNameList] = useState([])
    

    function getRandomCity(){
        return cityList[Math.floor(Math.random()*cityList.length)];
    }
    
    function btnHandle(){
        if (cityList.length > 0){
            setRandomCity(getRandomCity())
        }
    }

    function getCountyList(cityList) {
        const uniqueCountries = [];
        const countrySet = new Set();
    
        cityList.forEach(city => {
            if (Array.isArray(city) && city.length > 3) { // Проверяем, что city — массив и у него есть 4-й элемент
                const country = city[3]; // Берем страну из 3-го индекса
                if (country && !countrySet.has(country)) {
                    countrySet.add(country);
                    uniqueCountries.push(country);
                }
            }
        })
            setCityNameList(uniqueCountries)
            console.log(cityNameList)
        }


    useEffect(()=>{
        loadCountryData().then((data) => {
            setCityList(data)
            if (data.length > 0) {
                setRandomCity(data[Math.floor(Math.random() * data.length)]);
                getCountyList(data);
            }
    });
    },[])

    useEffect(() => {
        console.log("Состояние cityNameList обновилось:", cityNameList);
    }, [cityNameList]); // Теперь отслеживаем изменения списка стран

    return<>
    <div className={s.contaienr}>
    <button onClick={btnHandle} >Генерировать случайный город</button>
    {cityList.length > 0 ?
    <div>
        <p>Город: {randomCity[0]}</p>
        <p>Страна: {randomCity[3]}</p>
        <p>Население: {randomCity[4]}</p>
    </div>
    :
    <p>Загрузка...</p>}
     <h2>Список стран:</h2>
            {cityNameList.length > 0 ? (
                <ul>
                    {cityNameList.map((country, index) => (
                        <li key={index}>{country}</li>
                    ))}
                </ul>
            ) : (
                <p>Загрузка списка стран...</p>
            )}
    </div>
    </>
}