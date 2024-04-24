import React from "react";
import {
  Button,
  InputAdornment,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { DummyData } from "../utils/dummy";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigation = useNavigate();
  const [search, setSearch] = React.useState("");
  const [array, serArray] = React.useState(DummyData);
  const [oneOf, setOneof] = React.useState("");

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
    <div className="py-16 px-10 w-full">
      <div className="ml-10 mb-5">
        <TextField
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Candidates"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          className="w-72 bg-app-ligeen"
        />
      </div>
      {/* table */}
      <div className="mt-3  border border-app-border rounded-md max-h-96 overflow-y-auto">
        {/* <TableContainer style={{ maxHeight: 150 }}> */}
        <Table aria-label="customized table">
          <TableHead
            sx={{
              backgroundColor: "#53783B",
            }}>
            <TableRow>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#ffffff" }}>
                Name
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#ffffff" }}>
                Email
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#ffffff" }}>
                TimeSheet
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#ffffff" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {array.map((row) => (
              <StyledTableRow key={row.name}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.timesheet}</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor:
                      row.status === "Pending" ? "#FFFFFF" : "#F9FAFB",
                  }}>
                  <a onClick={() => navigation("/approval")}>
                    Approve TimeSheet
                  </a>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        {/* </TableContainer> */}
      </div>
      <div className="mt-10 ml-10">
        <Select
          size="small"
          required
          displayEmpty
          value={oneOf}
          onChange={(e) => setOneof(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#667085" }}>TimeSheet Name</text>;
            }
            return selected;
          }}
          className="w-72">
          {DummyData.map((data) => (
            <MenuItem key={data.id} value={data.name}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
        <Button
          style={{ color: "white", borderColor: "#7F56D9" }}
          variant="contained"
          sx={{
            marginLeft: 5,
            backgroundColor: "#7B964A",
            "&:hover": {
              backgroundColor: "#7B964A",
            },
          }}>
          Download
        </Button>
      </div>
    </div>
  );
};
