import axios from 'axios'

const AXIOS = axios.create({
  baseURL: `/api`,
  timeout: 1000
});


export default {
    credit(amount) {
        return AXIOS.post(`/account/credit/` + amount);
    },
    debit(amount) {
        return AXIOS.post(`/account/debit/` + amount);
    },
    getHistory() {
        return AXIOS.get(`/account/history`);
    }
}


