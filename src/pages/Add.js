import React, { useState } from 'react'
import { addContact } from '../redux'
import { useDispatch, useSelector } from 'react-redux'
import {Link,useNavigate} from "react-router-dom"
import {Container,Box,Paper,TextField,Button} from '@mui/material';
 

const Add = () => {
    const contacts = useSelector(state => state.contacts)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleData = (e) => {
        dispatch(addContact({
            id: Date.now(),
            name: name,
            email: email,
            number: number,
        }))
        navigate("/")
    }
    const validate = (e) => {
        e.preventDefault()
        const checkingIfEmailNotExist = contacts.every(contact => email !== contact.email)
        const checkingIfNumberNotExist = contacts.every(contact => number !== contact.number)
        if (checkingIfEmailNotExist && checkingIfNumberNotExist) {
            handleData()
        }
        else {
            if (!checkingIfEmailNotExist && !checkingIfNumberNotExist) {
                alert("Email and Number already exist")

            }
            else if (!checkingIfEmailNotExist) {
                alert("Email already exist")
            }
            else {
                alert("Number already exist")
            }
        }
    }
    return (
        <>

        <Container maxWidth="md" style={{minHeight: "90vh",display: "flex", alignItems: "center",justifyContent: "center",flexDirection : "column"}}>
        <h1>Add Contact</h1>
        <Paper elevation={3} sx={{ width: "100%" ,padding: "20px"}} >
           <Box
             sx={{
               width: "100%",
               maxWidth: 800,
               margin: "auto"
             }}
          >
            <form onSubmit={validate}>
              <TextField fullWidth required label="Name" type="text" id="fullWidth"  style={{marginTop: "10px"}} value={name} onChange={(e) => setName(e.target.value)}/>
              <TextField fullWidth required label="Email" type="email"id="fullWidth"  style={{marginTop: "10px"}} value={email} onChange={(e) => setEmail(e.target.value)}/>
              <TextField fullWidth required label="Number" type="number" id="fullWidth"  style={{marginTop: "10px"}} value={number} onChange={(e) => setNumber(e.target.value)}/>
              <Button style={{marginTop: "10px",width: "100%", maxWidth: 800,padding: "10px"}} variant="contained" type="submit">Add Contact</Button>
            </form>
            </Box>
        </Paper>
        <Box style={{display: "flex", justifyContent: "flex-end",width: "100%",marginTop: "20px"}}>
          <Link to="/">
            <Button color="secondary" variant="outlined">Go Back</Button>
          </Link>
        </Box>
        </Container>
        </>
    )
}

export default Add
