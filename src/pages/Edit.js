import React,{useState} from 'react'
import { useNavigate,useParams,Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {Container,Box,Paper,TextField,Button} from '@mui/material';

import {editContact} from "../redux"
const Edit = () => {
    const { id } = useParams()
    let navigate = useNavigate();
    const contacts = useSelector(state => state.contacts)
    const contactToEdit = contacts[id]
    console.log('contactToEdit', contactToEdit)
    const [name, setName] = useState(contactToEdit && contactToEdit.name)
    const [email, setEmail] = useState( contactToEdit && contactToEdit.email)
    const [number, setNumber] = useState(contactToEdit && contactToEdit.number)
    const dispatch = useDispatch()
    const handleEdit = () => {
        const editedContact = {
            name,
            email,
            number,
            id: contactToEdit.id
        }
        const copyingContact = [...contacts]
        copyingContact[id] = editedContact
        dispatch(editContact(copyingContact))
        navigate("/")
    }
     const validate = (e) => {
        e.preventDefault()
        const contactsWithOutCurrentContact = contacts.filter( contact => contact.id !== contactToEdit.id)

        const checkingIfEmailNotExist = contactsWithOutCurrentContact.every(contact => email !== contact.email)
        const checkingIfNumberNotExist = contactsWithOutCurrentContact.every(contact => number !== contact.number)
        if (checkingIfEmailNotExist && checkingIfNumberNotExist) {
            handleEdit()
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
        contactToEdit ? 
         <Container maxWidth="md" style={{minHeight: "90vh",display: "flex", alignItems: "center",justifyContent: "center",flexDirection : "column"}}>
          <h1>Edit Contact</h1>
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
              <Button style={{marginTop: "10px",width: "100%", maxWidth: 800,padding: "10px"}} variant="contained" type="submit">Edit Contact</Button>
            </form>
            </Box>
        </Paper>
        <Box style={{display: "flex", justifyContent: "flex-end",width: "100%",marginTop: "20px"}}>
          <Link to="/">
            <Button color="secondary" variant="outlined">Go Back</Button>
          </Link>
        </Box>
        </Container>
        : <p>The contact doesn't exist</p>
        
    )
}

export default Edit
