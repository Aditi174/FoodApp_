import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navContent">
      <div className="search">
        <h1 className="logo">
          F<span>oo</span>D CL<span>u</span>B
        </h1>
        <div className="height"></div>
        <div className="field">
          <TextField
            placeholder="Search food..."
            size="small"
            sx={{
              width: "50%",
              marginBottom: "8px",
              color: "white",
              borderRadius: "10px",
              border: "1px solid white",
              "& .MuiInputBase-input::placeholder": {
                color: "white",
                margin: "4px",
              },
              "@media (max-width: 768px)": {
                width: "61%",
              },
              "@media (max-width: 500px)": {
                width: "100%",
              },
            }}
          />
        </div>
      </div>
      <div className="height"></div>
      <ul className="navItems">
        <li>
          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                background: "orange",
                "@media (max-width: 768px)": {
                  padding: "3px 42px",
                  fontSize: "0.95rem",
                },
                "@media (max-width: 500px)": {
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                },
              }}
            >
              ALL
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/Breakfast">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                background: "orange",
                "@media (max-width: 768px)": {
                  padding: "3px 55px",
                  fontSize: "0.95rem",
                },
                "@media (max-width: 500px)": {
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                },
              }}
            >
              BREAKFAST
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/Lunch">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                background: "orange",
                "@media (max-width: 768px)": {
                  padding: "3px 55px",
                  fontSize: "0.95rem",
                },
                "@media (max-width: 500px)": {
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                },
              }}
            >
              Lunch
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/Dinner">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                background: "orange",
                "@media (max-width: 768px)": {
                  padding: "3px 55px",
                  fontSize: "0.95rem",
                },
                "@media (max-width: 500px)": {
                  padding: "6px 12px",
                  fontSize: "0.75rem",
                },
              }}
            >
              Dinner
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
