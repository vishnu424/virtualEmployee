import { Typography, Box } from "@mui/material";

function Footer() {
  const footerStyle = {
    backgroundColor: "#3f51b5",
    color: "#fff",
    padding: "16px",
    position: "fixed",
    bottom: 0,
    width: "100%",
  };

  return (
    <Box sx={footerStyle}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} My Awesome Website
      </Typography>
    </Box>
  );
}

export default Footer;
