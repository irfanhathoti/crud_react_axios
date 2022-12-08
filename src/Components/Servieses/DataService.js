import axios from 'axios';



const DataUrl =  "http://localhost:8000/posts";

class DataService {
    getDataService(){
        return axios.get(DataUrl)
    }
    createData(data){
        return axios.post(DataUrl,data)
    }
    deleteData(id){
        return axios.delete(DataUrl +'/'+ id)
    }
    getDataId(id){
        return axios.get(DataUrl + '/' + id )
    }
}

export default new DataService()