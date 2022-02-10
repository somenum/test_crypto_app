// core
import {AppDispatch} from "../store";
import axios from "axios";
import {ICoins, coinSlice} from "./CoinSlice";

export const fetchCoins = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(coinSlice.actions.coinsFetching())
        const response = await axios.get<ICoins[]>('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
        dispatch(coinSlice.actions.coinsFetchingSuccess(response.data))
    } catch (e) {
        dispatch(coinSlice.actions.coinsFetchingError(e.message))
    }
}
