"use client";
import { Navbar } from "@components/Navbar";
import { theme } from "@config/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider theme={theme}>
        <body id="__next">
          <CssBaseline />
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}