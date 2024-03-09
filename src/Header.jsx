import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material/";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
  flex: 1
});

const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <StyledTypography >
          Mayur Kamble
        </StyledTypography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;