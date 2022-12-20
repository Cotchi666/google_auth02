import { Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
    console.log("home ");
  };
  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      SUN
      <span onClick={home} style={{ color: theme.palette.primary.main }}>
        Flix
      </span>
    </Typography>
  );
};

export default Logo;
