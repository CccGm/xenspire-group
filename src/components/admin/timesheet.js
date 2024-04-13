import React from "react";
import {
  Button,
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { CreateTimeSheet } from "./createTimeSheet";

export const TimeSheet = () => {
  const Document_Data = [
    {
      name: "timesheet1",
      from: "2021-08-15",
      tofrom: "2023-01-10",
      status: "Open",
    },
    {
      name: "timesheet2",
      from: "2024-05-18",
      tofrom: "2024-10-15",
      status: "Pending",
    },
    {
      name: "timesheet3",
      from: "2020-04-10",
      tofrom: "2022-04-10",
      status: "Uploaded",
    },
    {
      name: "timesheet4",
      from: "2023-02-26",
      tofrom: "2024-04-08",
      status: "Pending",
    },
    {
      name: "timesheet5",
      from: "2022-02-25",
      tofrom: "2023-07-05",
      status: "Uploaded",
    },
  ];
  const [create, setCreate] = React.useState(false);
  const [array, serArray] = React.useState(Document_Data);

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

  const Add_Data = (data) => {
    setCreate(false);

    let add_Data = {
      name: data?.name,
      from: data?.from,
      tofrom: data?.toFrom,
      status: data?.aplication.length > 2 ? "Pending" : "Open",
    };

    serArray((old) => [...old, add_Data]);
  };

  return (
    <div className="mx-32 pt-10 pb-20">
      <div className="flex justify-center">
        <text
          style={{
            color: "#53783B",
            fontWeight: "bold",
            fontSize: 28,
          }}>
          TimeSheets
        </text>
      </div>
      {create ? (
        <CreateTimeSheet add_Data={Add_Data} />
      ) : (
        <>
          <div className="my-3 justify-end flex">
            <a
              href="/approval"
              style={{
                borderWidth: 1,
                color: "white",
                backgroundColor: "#53783B",
                padding: 5,
                borderRadius: 6,
              }}>
              Go to Approval
            </a>

            <Button
              style={{ color: "white", borderColor: "#7F56D9" }}
              variant="contained"
              sx={{
                backgroundColor: "#53783B",
                "&:hover": {
                  backgroundColor: "#53783B",
                },
                textTransform: "none",
                marginLeft: 5,
              }}
              onClick={() => setCreate(true)}>
              Create New
            </Button>
          </div>

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
                    From
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold", color: "#ffffff" }}>
                    From
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold", color: "#ffffff" }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {array.map((row) => (
                  <StyledTableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.from}</TableCell>
                    <TableCell align="center">{row.tofrom}</TableCell>
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
