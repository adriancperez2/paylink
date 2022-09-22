import * as React from "react";
import Toast from "react-bootstrap/Toast";
import Button from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Icon from "../common/icons/Icon";
import { ContentCopy, QrCode } from "@mui/icons-material";
import { useToast } from "../common/utils/use-toast";
import { useModal } from "../common/utils/use-modal";
import { QRCodeSVG } from "qrcode.react";

const Payment = (props: any) => {
  // @ts-ignore
  const { send } = useToast();
  // @ts-ignore
  const { newModal } = useModal();

  const handleShowModal = (evt: React.FormEvent) => {
    evt.stopPropagation();

    newModal(
      <Stack direction="row" spacing={2} alignItems="center">
        <img
          src={props.img}
          width="40"
          height="40"
          className="mx-2"
          alt={props.label + " logo"}
        />
        <Typography>{props.label}</Typography>
      </Stack>,
      <Stack direction="row" justifyContent="center">
        <QRCodeSVG value={props.value} size={200} />
      </Stack>,
      <Stack direction="row" alignContent="center" width="100%">
        <Button variant="contained" fullWidth>
          <ContentCopy color="inherit" />
        </Button>
      </Stack>
    );
  };

  const copy = (evt: React.FormEvent) => {
    let value = props.value;
    navigator.clipboard.writeText(value);
    send("Copied!");
    /* once the text is copied to the clipboard the toast is shown */
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={copy}
      sx={{
        "& .MuiButton-startIcon": {
          position: "absolute",
          left: "1.2rem",
        },
        "& .MuiButton-endIcon": {
          position: "absolute",
          right: "1rem",
        },
        padding: "0.75rem",
        borderRadius: "3rem",
      }}
      startIcon={<Icon name={props.id} />}
      endIcon={
        <Stack direction="row" spacing={1}>
          <IconButton onClick={copy}>
            <ContentCopy />
          </IconButton>
          <IconButton onClick={handleShowModal}>
            <QrCode />
          </IconButton>
        </Stack>
      }
    >
      <Box width="80%">
        <Typography>{props.label}</Typography>
      </Box>
    </Button>
  );

  //       <Modal.Body className="d-flex justify-content-center py-4 pb-0">
  //         <div className="qr-container p-2">
  //           <QRCodeSVG value={props.value} size={200} />
  //         </div>
  //       </Modal.Body>
  //       <Button
  //         variant="primary"
  //         className="btn btn-primary mx-5 my-5 mt-5"
  //         onClick={copy}
  //       >
  //         <i className="bx bx-copy mx-2"></i>
  //         Copy
  //       </Button>
  //     </Modal>
  //   </div>
  // );
};

export default Payment;
