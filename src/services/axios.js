import axios from 'axios'

const urlRegister = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default urlRegister