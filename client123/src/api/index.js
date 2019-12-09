import axios from 'axios';

export async function getzuoa() {
    let getzuos=await axios.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html")
    return getzuos.data.data
}
export  function getroua(MasterID){
 
    return  axios.get(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${MasterID}`)

}

export async function getdetail(SerialID){
    let detaill=await axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${SerialID}`)
    return detaill.data.data
}
export async function getCity(){
    let city = await axios.get("https://baojia.chelun.com/v1-city-alllist.html")
    return city.data.data
}
export async function getCitycar(carId,cityId){
    let cityCar=await axios.get(`https://baojia.chelun.com/v2-dealer-alllist.html?carId=${cityId}&cityId=${carId}`)
    return cityCar.data.data
}

export async function getCitycard(cityId){
    let cityCar=await axios.get(`https://baojia.chelun.com/v1-city-alllist.html?provinceid=${cityId}`)
    return cityCar.data.data
}

