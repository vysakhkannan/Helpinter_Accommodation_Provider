import axios from 'axios'

export default class APIService {

    static getAccommodation(){
        return(
            axios({
                method: 'get',
                url : `https://helpinter.herokuapp.com/accommodation_provider/accommodation/`,
                headers: {
                    'Content-Type': 'appication/json',          
                },
              })
        )


    }
  
    
}