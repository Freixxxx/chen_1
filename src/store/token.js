export default{
    state: {
        //若localSorage存在token，将值赋给Vuex.state.token
        token: localStorage.getItem('token') ? localStorage.getItem('token') : null
    },
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        },
        logout(state) {
            localStorage.removeItem('token')
            state.token = null
        }
    }
}