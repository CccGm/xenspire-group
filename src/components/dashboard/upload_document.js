import React from "react";
import {
  Button,
  TableHead,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { UploadFileOutlined } from "@mui/icons-material";
import pdf from "../../assets/images/pdf-icon.png";
import jpg from "../../assets/images/jpf-icon.png";
import mp4 from "../../assets/images/mp4-icon.png";
import fig from "../../assets/images/fig-icon.png";
import docx from "../../assets/images/docx-icon.png";

export const Upload_Document = ({ next }) => {
  const [resume, setResume] = React.useState("abc");
  const [certificate, setCretificate] = React.useState("");
  const [proof, setProf] = React.useState("abc");
  const [tax, setTax] = React.useState("abc");
  const [agreement, setAgreement] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Upload Documnet");
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#F9FAFB",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <form className="mx-20" onSubmit={handleClick}>
        <div className="flex justify-center">
          <text
            style={{
              color: "#53783B",
              fontWeight: "bold",
              fontSize: 28,
            }}>
            Upload your Documents
          </text>
        </div>
        <div className="mt-3  border border-app-border rounded-md ">
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", color: "#475467" }}>
                  Document Name
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bold", color: "#475467" }}>
                  Upload File
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bold", color: "#475467" }}>
                  Updated Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* pdf */}
              <StyledTableRow key="pdf">
                <TableCell component="th" scope="row">
                  <div className="grid grid-flow-col justify-start">
                    <img src={pdf} alt="pdf logo" />
                    <div className="grid grid-flow-row ml-5">
                      <text style={{ color: "#101828" }}>Resume</text>
                      <text style={{ color: "#475467" }}>200 KB</text>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button
                    style={{
                      color: "#53783B",
                      borderColor: "#53783B",
                      backgroundColor: "#E3F9F9",
                    }}
                    variant="outlined"
                    startIcon={<UploadFileOutlined />}>
                    Upload
                  </Button>
                </TableCell>
                <TableCell align="center" style={{ color: "#475467" }}>
                  {resume ? "Uploaded" : "Pending"}
                </TableCell>
              </StyledTableRow>
              {/* jpg */}
              <StyledTableRow key="jpg">
                <TableCell component="th" scope="row">
                  <div className="grid grid-flow-col justify-start">
                    <img src={jpg} alt="jpg logo" />
                    <div className="grid grid-flow-row ml-5">
                      <text style={{ color: "#101828" }}>Certificates</text>
                      <text style={{ color: "#475467" }}>720 KB</text>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button
                    style={{
                      color: "#53783B",
                      borderColor: "#53783B",
                      backgroundColor: "#E3F9F9",
                    }}
                    variant="outlined"
                    startIcon={<UploadFileOutlined />}>
                    Upload
                  </Button>
                </TableCell>
                <TableCell align="center" style={{ color: "#475467" }}>
                  {certificate ? "Uploaded" : "Pending"}
                </TableCell>
              </StyledTableRow>
              {/* mp4 */}
              <StyledTableRow key="mp4">
                <TableCell component="th" scope="row">
                  <div className="grid grid-flow-col justify-start">
                    <img src={mp4} alt="mp4 logo" />
                    <div className="grid grid-flow-row ml-5">
                      <text style={{ color: "#101828" }}>
                        Proof of Identification
                      </text>
                      <text style={{ color: "#475467" }}>16 MB</text>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button
                    style={{
                      color: "#53783B",
                      borderColor: "#53783B",
                      backgroundColor: "#E3F9F9",
                    }}
                    variant="outlined"
                    startIcon={<UploadFileOutlined />}>
                    Upload
                  </Button>
                </TableCell>
                <TableCell align="center" style={{ color: "#475467" }}>
                  {proof ? "Uploaded" : "Pending"}
                </TableCell>
              </StyledTableRow>
              {/* fig */}
              <StyledTableRow key="fig">
                <TableCell component="th" scope="row">
                  <div className="grid grid-flow-col justify-start">
                    <img src={fig} alt="fig logo" />
                    <div className="grid grid-flow-row ml-5">
                      <text style={{ color: "#101828" }}>Tax Document</text>
                      <text style={{ color: "#475467" }}>4.2 MB</text>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button
                    style={{
                      color: "#53783B",
                      borderColor: "#53783B",
                      backgroundColor: "#E3F9F9",
                    }}
                    variant="outlined"
                    startIcon={<UploadFileOutlined />}>
                    Upload
                  </Button>
                </TableCell>
                <TableCell align="center" style={{ color: "#475467" }}>
                  {tax ? "Uploaded" : "Pending"}
                </TableCell>
              </StyledTableRow>
              {/* docx */}
              <StyledTableRow key="docx">
                <TableCell component="th" scope="row">
                  <div className="grid grid-flow-col justify-start">
                    <img src={docx} alt="docx logo" />
                    <div className="grid grid-flow-row ml-5">
                      <text style={{ color: "#101828" }}>Agreement</text>
                      <text style={{ color: "#475467" }}>400 KB</text>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button
                    style={{
                      color: "#53783B",
                      borderColor: "#53783B",
                      backgroundColor: "#E3F9F9",
                    }}
                    variant="outlined"
                    startIcon={<UploadFileOutlined />}>
                    Upload
                  </Button>
                </TableCell>
                <TableCell align="center" style={{ color: "#475467" }}>
                  {agreement ? "Uploaded" : "Pending"}
                </TableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-5 justify-end flex">
          <Button
            style={{ color: "white", borderColor: "#7F56D9" }}
            variant="contained"
            sx={{
              backgroundColor: "#7B964A",
              "&:hover": {
                backgroundColor: "#7B964A",
              },
            }}
            type="submit">
            Save
          </Button>
          <Button
            style={{ color: "white", borderColor: "#7F56D9" }}
            variant="contained"
            sx={{
              marginLeft: 5,
              backgroundColor: "#7B964A",
              "&:hover": {
                backgroundColor: "#7B964A",
              },
            }}
            onClick={next}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};
