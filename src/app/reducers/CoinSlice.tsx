import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCoins} from "./ActionCreators";

export interface ICoins {
    name: string,
    id: string,
    low_24h: number,
    high_24h: number,
    current_price: number,
    price_change_24h: number,
    price_change_percentage_24h: number
}

interface CoinState {
    coins: ICoins[];
    isLoading: boolean;
    error: string;
}

const initialState: CoinState = {
    coins: [],
    isLoading: false,
    error: '',
}

export const coinSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCoins.fulfilled.type]: (state, action: PayloadAction<ICoins[]>) => {
            state.isLoading = false;
            state.error = ''
            state.coins = action.payload;
        },
        [fetchCoins.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCoins.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default coinSlice.reducer;
