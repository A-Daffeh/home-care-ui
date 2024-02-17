import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function Contact() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        console.log({
          email: data.get('email'),
          password: data.get('password'), // Ensure this is meant to be here as it wasn't included in the text fields.
          fullName: data.get('fullName'),
          phone: data.get('phone'),
          message: data.get('message'), // Assuming you want to collect a message from the textarea
        });
      };

    return (
        <Grid container component="main"  justifyContent="center" sx={{ height: '100vh' }}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              We are ready to hear from you!
            </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
             margin="normal"
             required
             fullWidth
             id="fullName"
             label="Full Name"
             name="fullName"
             autoComplete="fullName"
             autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
            />
            <TextField 
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            type="tel"
            id="phone"
            autoComplete="tel"
            />
            {/* Corrected textarea integration using TextField with multiline */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="comments"
              label="Comments"
              multiline
              rows={10} // You can adjust the number of rows
            
              id="comments"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    );
}

export default Contact;
