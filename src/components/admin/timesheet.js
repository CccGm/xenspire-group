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
import { DummyData, get_Data } from "../utils/dummy";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const TimeSheet = () => {
  const [create, setCreate] = React.useState(false);
  const [array, serArray] = React.useState(DummyData);
  const navigation = useNavigate();

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
    handleSubmit(add_Data);
  };

  const handleSubmit = async ({ add_Data }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/addtimesheet/",
        { add_Data }
      );

      if (response.status === 200) {
        console.log("addtimesheet save successfully");
      } else {
        console.log("addtimesheet save failed");
      }
    } catch (error) {
      console.error("addtimesheet save error:", error.message);
    }
  };

  React.useState(() => {
    get_Data();
  }, []);

  return (
    <div className="mx-32 pt-10 pb-20 w-full">
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
            <Button
              style={{ color: "white", borderColor: "#7F56D9" }}
              variant="contained"
              sx={{
                backgroundColor: "#53783B",
                "&:hover": {
                  backgroundColor: "#53783B",
                },
                textTransform: "none",
              }}
              onClick={() => navigation("/approval")}>
              Go to Approval
            </Button>

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
              onClick={() => navigation("/home")}>
              Home
            </Button>

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
          <div className="mt-3  border border-app-border rounded-md max-h-96 overflow-y-auto">
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
