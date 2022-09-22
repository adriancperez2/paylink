import { Box } from "@mui/material";

interface IconProps {
  name: "facebook" | "qvapay" | string; // TODO: complete type
}

export default function Icon(props: IconProps) {
  return (
    <img
      src={`./images/payments/${props.name}.svg`}
      alt={props.name + " logo"}
      width="40rem"
      height="40rem"
      {...props}
    />
  );
}
