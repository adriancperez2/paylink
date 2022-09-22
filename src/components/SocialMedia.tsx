import * as MuiIcons from "@mui/icons-material";

const SocialMedia = (props: any) => {
  return (
    <a href={props.href} target="_blank" className="ms-2 me-2">
      <Ic iconName={props.type} color="info" />
    </a>
  );
};

const Ic = ({
  iconName,
  ...props
}: {
  iconName: string;
  color?:
    | "inherit"
    | "action"
    | "disabled"
    | "error"
    | "warning"
    | "info"
    | "success"
    | "primary"
    | "secondary";
}) => {
  const Icon = MuiIcons[iconName as keyof typeof MuiIcons];
  return <Icon {...props} />;
};

export default SocialMedia;
