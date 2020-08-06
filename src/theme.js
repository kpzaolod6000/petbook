import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#333333",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F48FB1",
      contrastText: "fff",
    },
  },
});
export default theme;
