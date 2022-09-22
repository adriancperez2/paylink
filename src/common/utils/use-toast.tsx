import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const ToastContext = React.createContext({});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Severity = "error" | "warning" | "info" | "success";

type SnackbarOrigen = {
  vertical: "bottom" | "top";
  horizontal: "left" | "center" | "right";
};

export const ToastProvider = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState<Severity>("success");
  const [position, setPosition] = React.useState<SnackbarOrigen>({
    vertical: "bottom",
    horizontal: "right",
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const context = React.useMemo(
    () => ({
      send: (
        message: string,
        severity?: Severity,
        position?: SnackbarOrigen
      ) => {
        setMessage(message);
        if (severity) {
          setSeverity(severity);
        }
        if (position) {
          setPosition(position);
        }
        setOpen(true);
      },
    }),
    [open, message]
  );

  return (
    <ToastContext.Provider value={context}>
      {props.children}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={position}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export function useToast() {
  return React.useContext(ToastContext);
}
