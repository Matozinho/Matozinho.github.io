import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  spacing: (factor: number) => factor / 10 + 'rem',
  palette: {
    mode: "dark",
  },
});
