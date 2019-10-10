import axios from 'axios';

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=USD&limit=10'



export const getdetails = (start=1) => axios(`${baseUrl}&start=${start}`, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json; charset=UTF-8',
        'X-CMC_PRO_API_KEY': 'dd07ef25-df9d-4dea-bff4-9cc9289b7088',
      },
})
