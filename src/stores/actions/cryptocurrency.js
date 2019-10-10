import { toast } from 'react-toastify'
import { LOADING, SUCCESS }  from '../constants';
import { getdetails } from '../utils/cryptocurrencyAPI';

export const success = (data) => ({
  type: SUCCESS,
  payload: data
})

export const loading = () => ({
  type: LOADING,
})



export const getAllCryptocurrencyDetails = (start) => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await getdetails(start)
    dispatch(success(response.data))
    
  } catch (error) {   
     toast.error("try again, an error occured")
  }
}
