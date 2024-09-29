import React from "react";
import { styled } from "@mui/material/styles";
import "./Table.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, time, weekDays, events, venue, instructor) {
  return { id, time, weekDays, events, venue, instructor };
}

const rows = [
  createData(
    "1",
    "4pm - 7pm",
    "Monday",
    "Cyber security",
    "computer lab F04",
    "Webster Ifedha",
  ),
  createData(
    "2",
    "5pm - 8pm",
    "Tuesday",
    "UI/UX",
    "computer lab F04",
    "Manase Gunga",
  ),
  createData(
    "3",
    "6pm - 9pm",
    "Wednesday",
    "Web development",
    "computer lab F04",
    "Carolyne Githenduka",
  ),
  createData(
    "4",
    "4pm - 7pm",
    "Thursday",
    "Mobile apps development",
    "computer lab F04",
    "Stanley Amunze",
  ),
  createData(
    "5",
    "3pm - 6pm",
    "Friday",
    "Cloud engineering",
    "computer lab F04",
    " Paul Karanja",
  ),
  createData(
    "6",
    "1pm - 4pm",
    "Saturday",
    "Power Platform",
    "computer lab F04",
    "Evyonn Mbithe",
  ),
];

function CustomTable() {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell align="left">Days of the Week</StyledTableCell>
            <StyledTableCell align="left">Event(s)</StyledTableCell>
            <StyledTableCell align="left">Venue</StyledTableCell>
            <StyledTableCell align="left">
              Instructor/Supervisor
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="column">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.time}</StyledTableCell>
              <StyledTableCell align="left">{row.weekDays}</StyledTableCell>
              <StyledTableCell align="left">{row.events}</StyledTableCell>
              <StyledTableCell align="left">{row.venue}</StyledTableCell>
              <StyledTableCell align="left">{row.instructor}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
