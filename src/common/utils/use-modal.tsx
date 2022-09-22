import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalContext = React.createContext({});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export function ModalProvider(props: any) {
  const [open, setOpen] = React.useState(false);
  const [actions, setActions] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [body, setBody] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const context = React.useMemo(
    () => ({
      newModal: (title: any, body: any, actions: any) => {
        setTitle(title);
        setBody(body);
        setActions(actions);
        setOpen(true);
      },
    }),
    [title, body, actions]
  );

  return (
    <ModalContext.Provider value={context}>
      {props.children}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>
          {title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>{actions}</DialogActions>
      </Dialog>
    </ModalContext.Provider>
  );
}

export function useModal() {
  return React.useContext(ModalContext);
}
