import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../../redux'
import { Link } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box,Container,Button} from "@mui/material"
const Contacts = () => {
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(
            deleteContact(id)
        )
    }

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: { 
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    margin: "50px 0" 
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
    return (
    < Container maxWidth="md" style={{marginTop: "40px"}}>
    <Box style={{display: "flex", justifyContent: "flex-end"}}>
    <Link to="/add"><Button variant="outlined" >Add Contact</Button></Link>
    </Box>
    <TableContainer component={Paper} style={{marginTop: "20px"}}>
      <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Number</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
      {contacts.map((contact, index) => (
            <StyledTableRow 
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={contact.id} 
            >
              <StyledTableCell  component="th" scope="row">
                {index+1}
              </StyledTableCell >
              <StyledTableCell >{contact.name}</StyledTableCell >
              <StyledTableCell >{contact.email}</StyledTableCell >
              <StyledTableCell >{contact.number}</StyledTableCell >
              <StyledTableCell >
                <Link to={`/edit/${index}`}>
                  <Button variant="contained" color="primary"  style={{fontSize: "12px", marginRight: "10px"}}>Edit</Button>
                </Link>
                <Button variant="contained" onClick={() => handleDelete(contact.id)} color="secondary" style={{fontSize: "12px"}}>Delete Contact</Button>
              </StyledTableCell >
            </StyledTableRow >
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    )
}

export default Contacts
