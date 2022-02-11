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
    lowestPrice: number,
    highestPrice: number,
    priceChange:  number,
    priceChangePercent: number
}

const TableData: FC<TableDataType> = (props ) => {

    const {price, name, highestPrice, lowestPrice, priceChange, priceChangePercent} = props

    return (
        <StyledTableRow key={name}>
            <StyledTableCell component="th" scope="row">
                {name}
            </StyledTableCell>
            <StyledTableCell align="left">$ {price}</StyledTableCell>
            <StyledTableCell align="left">$ {highestPrice}</StyledTableCell>
            <StyledTableCell align="left">$ {lowestPrice}</StyledTableCell>
            <StyledTableCell align="left">{`${priceChangePercent}% ($ ${priceChange})`}</StyledTableCell>
        </StyledTableRow>
    )
}

export default TableData;
