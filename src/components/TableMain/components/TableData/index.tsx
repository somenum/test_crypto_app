import React, {FC} from 'react';
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

interface TableDataType {
    price: number,
    name: string,
    openday: number
}

const TableData: FC<TableDataType> = (props ) => {

    const {price, name, openday} = props

    const priceIncrease = () => {
        const currentPrice = price
        const openDayPrice = openday
        let priceIncreaseUSD = currentPrice - openDayPrice
        let priceIncreasePercent = 100 * currentPrice / (currentPrice + openDayPrice)
        return (
            `${priceIncreasePercent} (${priceIncreaseUSD})`
        )
    }
    return (
        <StyledTableRow key={name}>
            <StyledTableCell component="th" scope="row">
                {name}
            </StyledTableCell>
            <StyledTableCell align="right">{price}</StyledTableCell>
            <StyledTableCell align="right">{openday}</StyledTableCell>
            <StyledTableCell align="right">{priceIncrease()}</StyledTableCell>
        </StyledTableRow>
    )
}

export default TableData;
