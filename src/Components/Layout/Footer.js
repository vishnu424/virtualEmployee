import { Typography, Box } from "@mui/material";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#3f51b5",
    color: "#fff",
    padding: "16px",
    boxSizing: "border-box",
    width: "100%",
    marginTop: "5rem",
  };

  return (
    <Box sx={footerStyle}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} Virtual Employee
      </Typography>
    </Box>
  );
};

export default Footer;
