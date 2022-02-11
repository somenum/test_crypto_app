// core
import React, {FC, useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchCoins} from "../../app/reducers/ActionCreators";

//components
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";

// UI
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import {TableBody, TextField} from "@mui/material";

const TableMain: FC = () => {
    const dispatch = useAppDispatch()
    const {coins, isLoading, error} = useAppSelector(state => state.coinReducer)

    useEffect(() => {
        dispatch(fetchCoins())
    }, [])
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const filteredCoins = coins.filter(coin => (
        coin.name.toLowerCase().includes(search.toLowerCase())
    ))
    return (
        <>
            {isLoading ? <h1>Loading...</h1> :
                <>
                    <TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleChange} />
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 700}} aria-label="customized table">
                            <TableHeader />
                            <TableBody>
                                {filteredCoins.map((coin) => {
                                    return (
                                        <TableData key={coin.id} name={coin.name} price={coin.current_price}
                                                   lowestPrice={coin.low_24h} highestPrice={coin.high_24h}
                                                   priceChange={coin.price_change_24h}
                                                   priceChangePercent={coin.price_change_percentage_24h}
                                        />
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            }
            {error && <h1>{error}</h1>}
        </>
    )
}

export default TableMain;
