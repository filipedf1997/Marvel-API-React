import axios from 'axios'
import CryptoJS from "crypto-js"

const API_COMICS = (idComic, characters) => {
    let privateKey = "8e169d105883f2bac6a0f10b6f2eb6f3a9746610"
    let publicKey = "8855fac156caa289d6098896ed8d1eae"
    let md5Hash = CryptoJS.MD5(1+privateKey+publicKey).toString()
    let url = ""
    if(idComic && characters){
        //Busca por personagens de um quadrinho específico
        url = `https://gateway.marvel.com:443/v1/public/comics/${idComic}/characters?ts=1&apikey=${publicKey}&hash=${md5Hash}`
    } else if (idComic){
        //Busca por um quadrinho específico
        url = `https://gateway.marvel.com:443/v1/public/comics/${idComic}?ts=1&apikey=${publicKey}&hash=${md5Hash}` 
    } else {
        //Busca pelos quadrinhos
        url = `https://gateway.marvel.com:443/v1/public/comics?format=digest&limit=40&ts=1&apikey=${publicKey}&hash=${md5Hash}`
    }

    return axios.get(url)
        .then((resposta) => {
            return resposta.data.data.results
        })
}

export default API_COMICS