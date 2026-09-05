import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { useState ,  useEffect } from 'react';
import  weatherBg from "./codioful-formerly-gradienta-OzfD79w8ptA-unsplash.jpg";
import logoSun from "./sun.png";
import Divider from '@mui/material/Divider';
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function CardWeather (){
    const [Weather , setWeather]=useState({});
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=31.105004&lon=30.974673&appid=${apiKey}&units=metric&lang=ar`;
   
useEffect(()=>{
async function getWeather(){
    try{
const response = await fetch(url);
const data = await response.json();
setWeather(data);
    }catch(error){
console.log(error);
}
}
getWeather();
},
[]
);
    const card = (
  <React.Fragment>
    <CardContent >
     
      <Typography gutterBottom sx={{ color: 'white', fontSize: 40 ,fontFamily:'Tajawal', textAlign:'center' , position:'relative' , bottom:20}}>
         <span style={{ fontSize: '1em', alignItems:'right'}}> 📌  </span>
       {  Weather?.name } <Divider orientation='horizontla' flexItem sx={{borderColor:'rgba(255,255,255,0.6)'}}/>
       
      </Typography>
              
 <Box sx = {{ position:'relative'  , left:90 ,top:120 , borderRadius:'50%' , background:'radial-gradient(circle , rgba(255,255,255,0.05) 30% ,transparent 60% )'   , display:'flex'  , justifyContent:'center'}} >
 <Box sx={{backgroundImage:`url(${logoSun})`, backgroundSize:'contain'  ,backgroundRepeat:'no-repeat', width:200 , height:100 ,alignItems:'center' , display:'flex' , justifyContent:'cneter' , position:'relative' , top:10 , left:30
}}></Box>
  </Box>

      <Typography sx={{ color:'white' , fontSize:30, textAlign:'left', position:'relative' , bottom:100}}>  {new Date(Weather?.dt * 1000).toLocaleDateString('ar-EG',{
        weekday:'long',
        month:'long',
        year:'numeric',
        day:'numeric'
      })}
      </Typography>
     
      <Typography variant="h5" component="div" sx={{color:'white' , fontSize:60 , fontStyle:'italic' ,textAlign:'left', position:'relative' , bottom:70}}>
         {Math.round (Weather?.main?.temp)} 
          <span style={{ fontSize: '1em', verticalAlign: 'super' }}>°</span>
      </Typography>
      <Typography sx={{fontSize:26 , color:'white' , textAlign:'left' , position:'relative' , bottom:30 }}>{Weather?.weather?.[0]?.description}
        <Typography >
        {contain(Weather?.weather?.[0].main)} 
        </Typography>
      </Typography>
     <Box sx={{display:'flex' , justifyContent:'space-between' , backgroundColor:'rgba(255,255,255,0.09)' , borderRadius:'11px 12px 35px  35px' , padding:'22px'}}>
      <Typography sx={{ color: 'white',
        fontSize :22  }}>
        {"درجة الرطوبة : " + Weather?.main?.humidity}
   </Typography>
   <Divider orientation='vertical' flexItem sx={{borderColor:'rgba(255,255,255,0.6)'}}/>
   <Typography sx={{color:'white', fontSize:22 }}>
    {"سرعة الرياح " + Weather?.wind?.speed }
   </Typography>
   </Box>
  </CardContent>
    
  </React.Fragment> 
);
function contain(condition ){
 if (condition === "Clear"){
  return  "يوم مشرق وبديع"
 }else if(condition === "Rain"){
  return "يوم ممطر مسحوب بعواصف تلجية "
 }else if (condition === "Clouds"){
  return "يوم مش باينله معالم يوم القيامة "
}else{
  return "يوم زي اي يوم كل ايام ربنا حلوة "
}
}
contain(Weather?.weather?.[0]?.main);
     return (
    <Box sx={{ minWidth: 400  }}>
        
      <Card variant="outlined" sx={{backgroundImage:`url(${weatherBg})`, boxShadow:'0px 8px 20px rgba(0,0,0,0.9)' , borderRadius:'50px', transition:'transform 0.3s ease' , '&:hover':{transform:'scale(1.05)'}, }}>{card}</Card>

      </Box>
    
  ); 
}