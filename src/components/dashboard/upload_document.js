import React from "react";
import {
  Button,
  TableHead,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { UploadFileOutlined } from "@mui/icons-material";
import pdf from "../../assets/images/pdf-icon.png";
import jpg from "../../assets/images/jpf-icon.png";
import mp4 from "../../assets/images/mp4-icon.png";
import fig from "../../assets/images/fig-icon.png";
import docx from "../../assets/images/docx-icon.png";
import axios from "axios";

export const Upload_Document = ({ next }) => {
  const [resume, setResume] = React.useState();
  const [certificate, setCretificate] = React.useState();
  const [proof, setProf] = React.useState();
  const [tax, setTax] = React.useState();
  const [agreement, setAgreement] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("certificate", certificate);
    formData.append("proof", proof);
    formData.append("tax", tax);
    formData.append("agreement", agreement);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/document/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("user document save successfully");
      } else {
        console.log("document save failed");
      }
    } catch (error) {
      console.error("document save error:", error.message);
    }
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

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const StyledTableHead = styled(TableHead)`
    & .MuiTableCell-root {
      background-color: #53783b;
    }
  `;

  const StyledTableContainer = styled(TableContainer)`
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    max-height: 400px;
  `;

  return (
    <div>
      <form className="mx-20" onSubmit={handleSubmit}>
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
        {/* table */}
        <StyledTableContainer sx={{ borderWidth: 1 }}>
          <Table aria-label="customized table" stickyHeader>
            <StyledTableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold", color: "#ffffff" }}>
                  Document Name
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bold", color: "#ffffff" }}>
                  Upload File
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "bold", color: "#ffffff" }}>
                  Updated Status
                </TableCell>
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {/* pdf */}
              <StyledTableRow key="pdf">
                <TableCell component="th" scope="row">
                  <div className="grid grid-flow-col justify-start">
                    <img src={pdf} alt="pdf logo" />
                    <div className="grid grid-flow-row ml-5">
                      <text style={{ color: "#101828" }}>
                        {resume ? resume.name : "Resume"}
                      </text>
                      <text style={{ color: "#475467" }}>
                        {resume ? resume.size : "0"} KB
                      </text>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button
                    component="label"
                    style={{
                      color: "#53783B",
                      borderColor: "#53783B",
                      backgroundColor: "#E3F9F9",
                    }}
                    variant="outlined"
                    startIcon={<UploadFileOutlined />}>
                    Upload
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(e) => setResume(e.target.files[0])}
                    />
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
                      <text style={{ color: "#101828" }}>
                        {certificate ? certificate.name : "Certificates"}
                      </text>
                      <text style={{ color: "#475467" }}>
                        {certificate ? certificate.size : "0"} KB
                      </text>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button
                    component="label"
                    style={{
                      color: "#53783B",
                      borderColor: "#53783B",
                      backgroundColor: "#E3F9F9",
                    }}
                    variant="outlined"
                    startIcon={<UploadFileOutlined />}>
                    Upload
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(e) => setCretificate(e.target.files[0])}
                    />
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
                        {proof ? proof.name : "Proof of Identification"}
                      </text>
                      <text style={{ color: "#475467" }}>
                        {proof ? proof.size : "0"} KB
                      </text>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button
                    component="label"
                    style={{
                      color: "#53783B",
                      borderColor: "#53783B",
                      backgroundColor: "#E3F9F9",
                    }}
                    variant="outlined"
                    startIcon={<UploadFileOutlined />}>
                    Upload
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(e) => setProf(e.target.files[0])}
                    />
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
                      <text style={{ color: "#101828" }}>
                        {tax ? tax.name : "Tax Document"}
                      </text>
                      <text style={{ color: "#475467" }}>
                        {tax ? tax.size : "0"} KB
                      </text>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button
                    component="label"
                    style={{
                      color: "#53783B",
                      borderColor: "#53783B",
                      backgroundColor: "#E3F9F9",
                    }}
                    variant="outlined"
                    startIcon={<UploadFileOutlined />}>
                    Upload
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(e) => setTax(e.target.files[0])}
                    />
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
                      <text style={{ color: "#101828" }}>
                        {agreement ? agreement.name : "Agreement"}
                      </text>
                      <text style={{ color: "#475467" }}>
                        {agreement ? agreement.size : "0"} KB
                      </text>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Button
                    component="label"
                    style={{
                      color: "#53783B",
                      borderColor: "#53783B",
                      backgroundColor: "#E3F9F9",
                    }}
                    variant="outlined"
                    startIcon={<UploadFileOutlined />}>
                    Upload
                    <VisuallyHiddenInput
                      type="file"
                      onChange={(e) => setAgreement(e.target.files[0])}
                    />
                  </Button>
                </TableCell>
                <TableCell align="center" style={{ color: "#475467" }}>
                  {agreement ? "Uploaded" : "Pending"}
                </TableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </StyledTableContainer>
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
