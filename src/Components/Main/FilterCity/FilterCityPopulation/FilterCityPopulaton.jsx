import { useEffect, useState } from 'react';
import s from './filterCityPopulation.module.css'
import { Slider } from '@mui/material'

export default function FilterCityPopulation ({populationList, hundleFilterPopulation}){
    const [sliderValue, setSliderValue] = useState(getMinMax(populationList))


    function getMinMax (arr){
        return [Math.min(...arr), Math.max(...arr)];
    }

    function handleSlider (event, newValue){
        setSliderValue(newValue);
        hundleFilterPopulation(newValue)
    }

    useEffect(()=>{
        setSliderValue(getMinMax(populationList))
    },[populationList])

    return <div className={s.filterPopulationCover} >
        <p className={s.TitlePopulation}>Популяция</p>
        <div className={s.sliderPopulationCover}>
            <p className={s.sliderTitleFromPopulation}>От</p>
            <Slider
                className={s.sliderPopulation}
                getAriaLabel={() => 'Temperature'}
                step={10000}
                min = {getMinMax(populationList)[0]}
                max = {getMinMax(populationList)[1]}
                valueLabelDisplay="auto"
                style={{width:'300px'}}
                onChange={handleSlider}
                value={sliderValue}
                sx={{
                    color: "#333",
                    height: 0, 
                    "& .MuiSlider-thumb": {
                      width: 12,
                      height: 20, 
                      borderRadius: 6,
                      backgroundColor: "#555",
                      "&:hover": {
                        boxShadow: "0px 0px 0px 8px rgba(255, 87, 34, 0.16)",
                      },
                    },
                    "& .MuiSlider-track": {
                      height: 6, 
                    },
                    "& .MuiSlider-rail": {
                      height: 6, 
                      backgroundColor: "#222",
                    },
                  }}
            />
            <p className={s.sliderTitleToPopulation}>До</p>
        </div>
    </div>
}