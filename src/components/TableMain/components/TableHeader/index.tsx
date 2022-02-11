import React, {FC} from 'react';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const TableHeader:FC = () => {
    return (
        <TableHead>
            <TableRow>
                <StyledTableCell>Coin name</StyledTableCell>
                <StyledTableCell align="left">Current price (USD)</StyledTableCell>
                <StyledTableCell align="left">Highest Price (USD)</StyledTableCell>
                <StyledTableCell align="left">Lowest Price (USD)</StyledTableCell>
                <StyledTableCell align="left">Price Change</StyledTableCell>
            </TableRow>
        </TableHead>
    )
}

export default TableHeader;
