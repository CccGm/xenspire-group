import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Dummy_Payroll } from "../utils/dummy";

export const Payroll = () => {
  const [array, serArray] = React.useState(Dummy_Payroll);

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#F9FAFB",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#F9FAFB",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTableHead = styled(TableHead)`
    & .MuiTableCell-root {
      background-color: #f9fafb;
    }
  `;

  const StyledTableContainer = styled(TableContainer)`
    border-radius: 1rem;
    max-height: 500px;
    ::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <div className="py-16 px-40 w-full">
      <div className="ml-10 mb-5 justify-center flex">
        <text className="text-app-green text-3xl font-bold">Payroll</text>
      </div>

      {/* table */}
      <StyledTableContainer sx={{ borderWidth: 1, borderColor: "#D1D1D1" }}>
        <Table aria-label="customized table" stickyHeader>
          <StyledTableHead>
            <TableRow>
              <TableCell
                style={{ fontWeight: "bold", color: "#475467", width: 300 }}>
                Type
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#475467" }}>
                Amount
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#475467" }}>
                Last Update
              </TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody sx={{ backgroundColor: "#ffffff" }}>
            {array.map((row, index) => (
              <StyledTableRow key={index} sx={{ backgroundColor: "#ffffff" }}>
                <TableCell sx={{ backgroundColor: "#ffffff" }}>
                  {row.type}
                </TableCell>
                <TableCell align="center" sx={{ backgroundColor: "#ffffff" }}>
                  $ {row.amount}
                </TableCell>
                <TableCell align="center" sx={{ backgroundColor: "#ffffff" }}>
                  {row.lastUpdate}
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
};
