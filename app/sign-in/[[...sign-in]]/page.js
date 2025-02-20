import { SignIn, SignUp } from "@clerk/nextjs";
import { AppBar, Toolbar, Typography, Button, Link, Box, Container, Grid } from "@mui/material";

export default function SignUpPage() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #a3c2f7 30%, #f9a9b6 90%)', // Lightened gradient
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Flashcard SaaS
                    </Typography>
                    <Button color="inherit">
                        <Link href="/login" underline="none" color="inherit">
                            Login
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/signup" underline="none" color="inherit">
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid container sx={{ flex: 1 }} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Container>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 3.5,
                                borderRadius: 2,
                                backgroundColor: 'rgba(255, 255, 255, 0.95)', // Slightly transparent white background
                                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)', // Enhanced shadow
                                maxWidth: '100%', // Ensure it fits within the container
                                mx: 'auto', // Center horizontally
                                width: '100%',
                                minHeight: '60vh', // Ensure enough space for centering
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="h4" sx={{color: '#3f51b5', textAlign: 'center' }}>
                                Welcome Back!
                            </Typography>
                            <Box
                                sx={{
                                    padding: 4,
                                    borderRadius: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent', // No background color
                                    boxShadow: 'none', // No shadow
                                    width: '100%',
                                    maxWidth: 400, // Ensure it doesn’t stretch too much
                                }}
                            >
                                <SignIn />
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
}
