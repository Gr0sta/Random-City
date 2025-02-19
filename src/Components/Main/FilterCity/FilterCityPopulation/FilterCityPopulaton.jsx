import { useEffect, useState } from 'react';
import s from './filterCityPopulation.module.css'
import { Slider, Box } from '@mui/material'

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

    return <div>

        <Box sx ={{ display: "flex", justifyContent:'space-between'}}>

        <Slider
            getAriaLabel={() => 'Temperature'}
            step={10000}
            min = {getMinMax(populationList)[0]}
            max = {getMinMax(populationList)[1]}
            valueLabelDisplay="auto"
            style={{width:'300px'}}
            onChange={handleSlider}
            value={sliderValue}
        />
        </Box>
    </div>
}