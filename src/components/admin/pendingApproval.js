import React from "react";
import {
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
  FormLabel,
  Button,
  TableContainer,
  TextField,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import pdf from "../../assets/images/pdf-icon.png";
import avtar from "../../assets/images/Avatar.png";
import { Dummy_Approval, Dummy_Pending } from "../utils/dummy";
import { useNavigate } from "react-router-dom";

export const PendingApproval = () => {
  const navigation = useNavigate();
  const [data, setData] = React.useState(Dummy_Pending);
  const [searchData, setSearchData] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [name, setName] = React.useState("");
  const [search, setSearch] = React.useState("");

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#ffffff",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#ffffff",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const statusSelect = ["approved", "reject"];

  const StyledTableHead = styled(TableHead)`
    & .MuiTableCell-root {
      background-color: #f9fafb;
    }
  `;

  const StyledTableContainer = styled(TableContainer)`
    border-radius: 1rem;
    max-height: 400px;
    ::-webkit-scrollbar {
      display: none;
    }
  `;

  const statusChagehandler = (e, index) => {
    const newData = [...data];
    newData[index].status = e;
    setData(newData);
  };

  const searchHandle = () => {
    const newData = data.find((d) => d.timesheetName === search);
    setSearchData(newData ? [newData] : data);
  };

  React.useEffect(() => {
    searchHandle();
  }, [search]);

  const DownloadFile = () => {
    // const pdfUrl = URL.createObjectURL(require("../../assets/GIL Letter.pdf"));
    const pdfUrl = require("../../assets/Dummy_Pdf.pdf");
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "newPdf.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const returnFileSize = (number) => {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  };

  return (
    <div className="mx-20 pt-10 pb-20 w-full">
      <div className="flex justify-center">
        <text
          style={{
            color: "#53783B",
            fontWeight: "bold",
            fontSize: 28,
          }}>
          Employee Pending
        </text>
      </div>
      <div className="my-8 grid grid-flow-col justify-between">
        <Autocomplete
          freeSolo
          size="small"
          options={data.map((option) => option.timesheetName)}
          value={search}
          onChange={(event, newValue) => {
            setSearch(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select Approval" />
          )}
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
          {Dummy_Approval.map((data) => (
            <MenuItem key={data.timesheetName} value={data.timesheetName}>
              {data.timesheetName}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="grid grid-flow-col">
        <div className="grid grid-flow-row">
          {/* table */}
          <StyledTableContainer sx={{ borderWidth: 1, borderColor: "#D1D1D1" }}>
            <Table aria-label="customized table" stickyHeader>
              <StyledTableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell style={{ fontWeight: "bold", color: "#475467" }}>
                    Name
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold", color: "#475467" }}>
                    Date
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold", color: "#475467" }}>
                    Hours
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "bold", color: "#475467" }}>
                    Status
                  </TableCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {searchData.map((row, index) => (
                  <StyledTableRow key={index} role="checkbox">
                    <TableCell
                      padding="checkbox"
                      onClick={(event) => handleClick(event, index)}>
                      <Checkbox color="primary" checked={isSelected(index)} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.timesheetName}
                    </TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.workingHours}</TableCell>
                    <TableCell align="center">
                      <Autocomplete
                        freeSolo
                        size="small"
                        options={statusSelect.map((option) => option)}
                        value={row.status}
                        onChange={(event, newValue) => {
                          statusChagehandler(newValue, index);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Select Approval"
                          />
                        )}
                      />
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
          {/* view documents */}
          <div className="mt-5 p-4">
            <div className="grid grid-flow-row">
              <text>View Documents </text>
              <FormLabel>Download receipt for January 2022.</FormLabel>
            </div>
            <div>
              <div className="grid grid-flow-col justify-between border border-app-simpleBorder rounded-md p-2 m-5">
                <div className="grid grid-flow-col">
                  <img src={pdf} alt="pdf logo" />
                  <div className="grid grid-flow-row ml-5">
                    <text style={{ color: "#101828" }}>Dummy_Pdf</text>
                    <text style={{ color: "#475467" }}>366 KB</text>
                  </div>
                </div>
                <div className="items-center flex">
                  <Button
                    variant="outlined"
                    style={{ color: "#344054", borderColor: "#D0D5DD" }}
                    onClick={DownloadFile}>
                    Download
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#53783B",
                      color: "#ffffff",
                      marginLeft: 15,
                    }}
                    onClick={() => {
                      navigation("/pdfview", { state: "" });
                    }}>
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pending Approval */}
        <div>
          <div className="grid grid-flow-row pl-16">
            <text className="text-app-green font-bold my-5 text-xl text-center">
              Pending Approval
            </text>
            {Dummy_Approval.map((data, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-flow-col border border-app-gray p-2 mx-3 mb-2 rounded-md">
                  <div className="grid grid-flow-col justify-start gap-5 pl-5">
                    <img src={avtar} alt="avtar" />
                    <div className="grid grid-flow-row">
                      <text>{data.timesheetName}</text>
                      <text>{data.status}</text>
                    </div>
                  </div>
                  <Checkbox />
                </div>
              );
            })}

            <div className="justify-center flex mt-10">
              <Button
                variant="contained"
                style={{ color: "#ffffff", background: "#53783B" }}>
                Bulk Approvals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
