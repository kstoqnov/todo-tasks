import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { spacing } = useTheme();

  return (
    <Box flexGrow={1}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              marginRight: spacing(2),
            }}
          >
            <Menu />
          </IconButton>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
            }}
            to="/"
          >
            <Typography variant="h6" flexGrow={1}>
              Task App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

Navbar.displayName = "Navbar";
