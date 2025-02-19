import { useState } from 'react';
import s from './filterCityPopulation.module.css'
import { Slider, Box } from '@mui/material'

export default function FilterCityPopulation ({populationList}){
    

    function getMinMax (arr){
        return [Math.min(...arr), Math.max(...arr)];
    }
    return <div>

        <Box sx ={{ display: "flex", justifyContent:'space-between'}}>

        <Slider
            getAriaLabel={() => 'Temperature'}
            step={1000}
            min = {getMinMax(populationList)[0]}
            max = {getMinMax(populationList)[1]}
            valueLabelDisplay="auto"
            style={{width:'300px'}}
            value={getMinMax(populationList)}
            value={getMinMax(populationList)}
        />
        </Box>
    </div>
}