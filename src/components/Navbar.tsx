"use client";
import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Stack
      component="header"
      direction="row-reverse"
      sx={{
        width: "100%",
        py: 8,
        px:16,
        backgroundColor: "secondary.dark",
        position: "sticky",
        top: 0,
      }}
    >
      <Link href="about">
        <Button color="warning" variant="outlined">Sobre</Button>
      </Link>
    </Stack>
  );
};
