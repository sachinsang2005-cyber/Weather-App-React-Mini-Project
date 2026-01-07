import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// icons
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';







export default function Infobox({result}){

    let cold_URL ="https://plus.unsplash.com/premium_photo-1736704204510-ec64857d0069?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxjb2xkJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let sunny_URL ="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let rainy_URL ="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJhaW55fGVufDB8fDB8fHww";
    
    return (
        <> 
            <Card sx={{ maxWidth: 345, marginTop: '20px'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={result.humidity > 50 ? rainy_URL : (result.temperature > 20 ? sunny_URL : cold_URL)}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {<LocationPinIcon/>}
                            {result.city}, {result.country}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {result.temperature > 20 ? <SunnyIcon sx={{ color: 'orange' }}/> : (result.humidity > 50 ? <ThunderstormIcon sx={{ color: 'blue' }}/> : <AcUnitIcon sx={{ color: 'lightblue' }}/>)}
                        </Typography>
                        <Typography variant="div" sx={{ color: 'text.secondary' }}>
                            <div>country: {result.country}</div>
                            <div>temperature: {result.temperature}&deg;C</div>
                            <div>humidity: {result.humidity}</div>
                            <div>max_temperature: {result.max_temperature}&deg;C</div>
                            <div>min_temperature: {result.min_temperature}&deg;C</div>
                            <div>weather: {result.weather}</div>

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}    