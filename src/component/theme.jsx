import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
//revamp the material ui component here so that I can use it with the latest version of firebase

export default createMuiTheme({
  palette: {
    primary: {
      // main: "#000",
      main: "#0065fe",
      contrastText: "#fff",
    },
    secondary: {
      main: "#03142F",
    },
  },
  typography: {
    fontFamily: "Gilroy-Medium, sans-serif",
    // fontFamily: "Poppins, sans-serif",
    button: {
      // textTransform: "capitalize",
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
  },
});
