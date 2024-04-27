import React from "react";
import {
  Button,
  Dialog,
  DialogContentText,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Dummy_Benifits } from "../utils/dummy";
import check from "../../assets/images/check-icon.png";
import { CloseOutlined, UploadFileOutlined } from "@mui/icons-material";

export const Benifit = () => {
  const [array, serArray] = React.useState(Dummy_Benifits);
  const [dialoge, setDialoge] = React.useState(false);
  const [dialogeData, setDialogeData] = React.useState();

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
    max-height: 480px;
    ::-webkit-scrollbar {
      display: none;
    }
  `;

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

  const onCloseDialoge = () => {
    setDialoge(false);
  };

  return (
    <div className="py-16 px-10 w-full">
      <div className="ml-10 mb-5 justify-center flex">
        <text className="text-app-green text-3xl font-bold">Benefits</text>
      </div>
      {/* table */}

      <StyledTableContainer sx={{ borderWidth: 1, borderColor: "#D1D1D1" }}>
        <Table aria-label="customized table" stickyHeader>
          <StyledTableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#475467" }}>
                Benefits
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#475467" }}>
                Status
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#475467" }}>
                Effective Date
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#475467" }}>
                Cost
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#475467" }}></TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody sx={{ backgroundColor: "#ffffff" }}>
            {array.map((row, index) => (
              <StyledTableRow key={index} sx={{ backgroundColor: "#ffffff" }}>
                <TableCell align="center" sx={{ backgroundColor: "#ffffff" }}>
                  {row.benifits}
                </TableCell>
                <TableCell align="center" sx={{ backgroundColor: "#ffffff" }}>
                  {row.status}
                </TableCell>
                <TableCell align="center" sx={{ backgroundColor: "#ffffff" }}>
                  {row.effectiveDate}
                </TableCell>
                <TableCell align="center" sx={{ backgroundColor: "#ffffff" }}>
                  $ {row.cost}
                </TableCell>
                <TableCell align="center" sx={{ backgroundColor: "#ffffff" }}>
                  <Button
                    style={{ color: "white", borderColor: "#7F56D9" }}
                    variant="contained"
                    sx={{
                      backgroundColor: "#7B964A ",
                      "&:hover": {
                        backgroundColor: "#7B964A",
                      },
                    }}
                    onClick={() => {
                      setDialoge(true);
                      setDialogeData(row);
                    }}>
                    Update
                  </Button>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      {/* Dialog */}

      <Dialog
        open={dialoge}
        onClose={onCloseDialoge}
        aria-labelledby="responsive-dialog-title">
        <div className="flex justify-center pt-5">
          <img src={check} alt="dialog icon" width={50} />
        </div>
        <div className="justify-center  text-center p-5">
          <DialogContentText
            sx={{ color: "black", fontWeight: "600", fontSize: 20 }}>
            {dialogeData?.benifits || ""}
          </DialogContentText>
          <DialogContentText>
            This blog post has been published. Team members <br /> will be able
            to edit this post and republish changes.
          </DialogContentText>
        </div>
        <div className="p-5">
          <div className="grid grid-flow-col justify-between">
            <lable>Avail This benefit ($5 for Month)</lable>
            <Switch defaultChecked color="success" />
          </div>
          <div className="grid grid-flow-col justify-between py-3">
            <lable>
              Earn Amount upto <br />
              ($200)
            </lable>

            <FormControl size="small" sx={{ width: 130 }}>
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="grid grid-flow-col justify-between py-3">
            <lable>
              Upload Relevant Proof
              <br /> Documents
            </lable>
            <Button
              component="label"
              variant="outlined"
              tabIndex={-1}
              style={{
                color: "#344054",
                borderColor: "#D0D5DD",
              }}
              startIcon={<UploadFileOutlined />}>
              Upload Photo
              <VisuallyHiddenInput
                type="file"
                accept="image/png, image/jpeg,image/jpg"
              />
            </Button>
          </div>
        </div>
        <div className="absolute right-3 top-3">
          <IconButton onClick={onCloseDialoge}>
            <CloseOutlined />
          </IconButton>
        </div>
      </Dialog>
    </div>
  );
};
