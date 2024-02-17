import { AppBar, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import { Container } from "react-bootstrap";

const Admin = () => {
    const [contacts, setContacts] = useState([]);

    
    return (
        <Container>
            <List>
                {
                    contacts.map((contact, index) => {
                        <ListItem key={index} divider>
                            <ListItemText primary={"Full Name"} secondary={"Email"} />
                        </ListItem>
                    })
                }
            </List>
        </Container>
    )
}

export default Admin