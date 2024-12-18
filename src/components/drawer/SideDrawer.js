import React from "react";
import Drawer from "@mui/material/Drawer";
import "./muiDrawer.css";
import { Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { useRouter } from "next/router";

const theme = createTheme();

const navItems = [
  {
    text: "Home",
    href: "#",
  },
  {
    text: "About Me",
    href: "#about",
  },
  {
    text: "Skills",
    href: "#skills",
  },
  {
    text: "Work",
    href: "#work",
  },
  {
    text: "Experience",
    href: "#experience",
  },
];

const SideDrawer = ({ open, onClose }) => {
  //   const router = useRouter();

  const handleNavigation = () => {
    onClose();
  };

  return (
    <div>
      <Drawer open={open} onClose={onClose} classes={{ paper: "custom-paper" }}>
        <Box role="presentation">
          <Box className="flex flex-col px-5 pt-6">
            <Box className="flex justify-center">
              {/* <Typography variant="h5" className="py-7">
                Website Name
              </Typography> */}
              <p className="text-3xl text-[#00d070] max-[550px]:text-2xl max-[400px]:text-xl py-7">
                {`<S`}
                <span className="text-white">{`amee`}</span>
                {`/> `}
              </p>
            </Box>

            <Box className="flex flex-col">
              {navItems.map((item, index) => (
                <div key={index}>
                  <hr className="border-green-800 w-[100%]" />
                  <a href={item.href} onClick={handleNavigation}>
                    <Typography
                      variant="body1"
                      className="py-4 text-[#fff] text-lg font-normal"
                    >
                      {item.text}
                    </Typography>
                  </a>
                </div>
              ))}
            </Box>
          </Box>
          <ThemeProvider theme={theme}></ThemeProvider>
        </Box>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
