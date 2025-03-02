import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import logo2 from "../assets/react.svg";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
      <img src={logo2} alt="logo" height={25} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
