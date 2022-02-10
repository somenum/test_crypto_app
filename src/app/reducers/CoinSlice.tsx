import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ICoins {
    id: number;
    name: string;
    openday: number,
    price: number
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
    reducers: {
        coinsFetching (state) {
            state.isLoading = true;
        },
        coinsFetchingSuccess (state, action: PayloadAction<ICoins[]>) {
            state.isLoading = false;
            state.error = '';
            state.coins = action.payload;
        },
        coinsFetchingError (state,  action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default coinSlice.reducer;
