import users from './common/data'
import { getMothod, postMethod, putMethod, deleteMethod } from './common/rest'


const login = function (params) {
    const { userName, passWord } = params
    if (!userName || !passWord) return false

    let payload = {
        url: '/account/login',
        payload: {
            userName: userName,
            password: passWord
        }
    }

    let user = users.find((x) => x.userName === userName && x.passWord === passWord)
    if (user) {
        // Set user to LocalStorage
        localStorage.setItem('user_login', user)
        
        return true
    }

    return false
}

export default {
    login
}

