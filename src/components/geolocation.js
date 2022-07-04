import axios from 'axios'

axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        
            console.log(data.country_name)
            console.log(data.country_calling_code)
        });