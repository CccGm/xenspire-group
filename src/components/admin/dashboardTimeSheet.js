import React from "react";
import {
  Button,
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { CreateTimeSheet } from "./createTimeSheet";
import { CloudUploadOutlined, Search } from "@mui/icons-material";

export const DashboardTimeSheet = () => {
  const Document_Data = [
    {
      name: "timesheet1",
      from: "2021-08-15",
      tofrom: "2023-01-10",
      status: "Approved",
      hour: 8,
    },
    {
      name: "timesheet2",
      from: "2024-05-18",
      tofrom: "2024-10-15",
      status: "Rejected",
      hour: 10,
    },
    {
      name: "timesheet3",
      from: "2020-04-10",
      tofrom: "2022-04-10",
      status: "Approved",
      hour: 9,
    },
    {
      name: "timesheet4",
      from: "2023-02-26",
      tofrom: "2024-04-08",
      status: "Rejected",
      hour: 6,
    },
    {
      name: "timesheet5",
      from: "2022-02-25",
      tofrom: "2023-07-05",
      status: "Rejected",
      hour: 8,
    },
  ];
  const [timeSheet, setTimeSheet] = React.useState("");
  const [array, serArray] = React.useState(Document_Data);
  const [submittion, setSubmission] = React.useState(false);

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
    <div className="mx-32 pt-10 pb-20">
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
      <div className="my-8 grid grid-flow-col justify-around">
        <FormLabel sx={{ color: "#344054" }}>Select TimeSheet</FormLabel>
        <Select
          size="small"
          displayEmpty
          value={timeSheet}
          onChange={(e) => setTimeSheet(e.target.value)}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <text style={{ color: "#53783B" }}>Select TimeSheet</text>;
            }
            return selected;
          }}
          sx={{
            color: "#53783B",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(123, 150, 74, 1)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(123, 150, 74, 1)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(123, 150, 74, 1)",
            },
            ".MuiSvgIcon-root ": {
              color: "#7B964A",
            },
          }}
          className="w-72">
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>

      {submittion ? (
        <>
          {/* table submit */}
          <div className="mt-3  border border-app-border rounded-md ">
            <Table aria-label="customized table">
              <TableHead sx={{ backgroundColor: "#53783B" }}>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Date Range
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Date
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Hours
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Status
                  </TableCell>
                  <TableCell> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {array.map((row) => (
                  <StyledTableRow key={row.name}>
                    <TableCell>
                      {row.from} to {row.tofrom}
                    </TableCell>
                    <TableCell>{row.from}</TableCell>

                    <TableCell align="center">{row.hour}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                      {row.status == "Rejected" ? (
                        <Button
                          size="small"
                          variant="contained"
                          style={{
                            color: "#ffffff",
                            backgroundColor: "#53783B",
                          }}>
                          Resubmit
                        </Button>
                      ) : (
                        ""
                      )}
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-6 flex justify-center">
            <Button
              variant="contained"
              onClick={() => setSubmission(false)}
              style={{ color: "#ffffff", backgroundColor: "#53783B" }}>
              Submit
            </Button>
          </div>
        </>
      ) : (
        <>
          {/* table  approval */}
          <div className="mt-3  border border-app-border rounded-md ">
            <Table aria-label="customized table">
              <TableHead sx={{ backgroundColor: "#53783B" }}>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Date Range
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Date
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Hours
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {array.map((row) => (
                  <StyledTableRow key={row.name}>
                    <TableCell>
                      {row.from} to {row.tofrom}
                    </TableCell>
                    <TableCell>{row.from}</TableCell>

                    <TableCell align="center">{row.hour}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-6 grid grid-flow-col justify-around">
            <Button
              variant="outlined"
              onClick={() => setSubmission(true)}
              style={{ color: "#344054", borderColor: "#53783B" }}
              startIcon={
                <CloudUploadOutlined fontSize="large" color="primary" />
              }>
              Proof of Submission
            </Button>
            <Button
              variant="contained"
              style={{ color: "#ffffff", backgroundColor: "#53783B" }}>
              Submit for Approval
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
