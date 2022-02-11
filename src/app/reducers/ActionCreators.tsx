// core
import axios from "axios";
import {ICoins} from "./CoinSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCoins = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICoins>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Can't load coins")
        }
    }
)