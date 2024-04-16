import React from "react";
import {
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Search } from "@mui/icons-material";
import { PendingApproval } from "./pendingApproval";

export const Approval = () => {
  const Document_Data = [
    {
      id: 1,
      name: "timesheet1",
      from: "2021-08-15",
      tofrom: "2023-01-10",
      status: "Open",
      hour: 8,
    },
    {
      id: 2,
      name: "timesheet2",
      from: "2024-05-18",
      tofrom: "2024-10-15",
      status: "Pending",
      hour: 8,
    },
    {
      id: 3,
      name: "timesheet3",
      from: "2020-04-10",
      tofrom: "2022-04-10",
      status: "Uploaded",
      hour: 6,
    },
    {
      id: 4,
      name: "timesheet4",
      from: "2023-02-26",
      tofrom: "2024-04-08",
      status: "Pending",
      hour: 4,
    },
    {
      id: 5,
      name: "timesheet5",
      from: "2022-02-25",
      tofrom: "2023-07-05",
      status: "Uploaded",
      hour: 4,
    },
    {
      id: 6,
      name: "timesheet6",
      from: "2024-05-18",
      tofrom: "2024-10-15",
      status: "Pending",
      hour: 8,
    },
  ];
  const [name, setName] = React.useState("");
  const [search, setSearch] = React.useState("");
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

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

  return (
    <div className="mx-20 pt-10 pb-20">
      <div className="flex justify-center">
        <text
          style={{
            color: "#53783B",
            fontWeight: "bold",
            fontSize: 28,
          }}>
          Employee Approval
        </text>
      </div>
      <div className="my-8 grid grid-flow-col justify-between">
        <TextField
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Employee for Approval"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          className="w-72"
        />
        <Select
          size="small"
          required
          displayEmpty
          value={name}
          onChange={(e) => setName(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <text style={{ color: "#667085" }}>
                  Select Pending Approval
                </text>
              );
            }
            return selected;
          }}
          className="w-72">
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <a
        href="/admin/dashboard"
        style={{
          borderWidth: 1,
          color: "white",
          backgroundColor: "#53783B",
          padding: 5,
          borderRadius: 6,
          marginTop: 10,
        }}>
        Go to Dashboard
      </a>

      {search ? (
        <PendingApproval data={Document_Data} />
      ) : (
        <>
          {/* table */}
          <div className="mt-3  border border-app-border rounded-md ">
            <Table aria-label="customized table">
              <TableHead sx={{ backgroundColor: "#53783B" }}>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Name
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Timesheet Period
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Document_Data.map((row) => (
                  <StyledTableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {row.from} to {row.tofrom}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        backgroundColor:
                          row.status === "Pending" ? "#FFFFFF" : "#F9FAFB",
                      }}>
                      {row.status}
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
};
