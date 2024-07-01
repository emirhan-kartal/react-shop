import React from "react";
import { Container, Grid, Typography, Link, Box } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                color: "white",
                py: 6,
                mt: "auto",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Company
                        </Typography>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                About Us
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Careers
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Blog
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Contact Us
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Support
                        </Typography>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Help Center
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Safety Center
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Community Guidelines
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Privacy & Terms
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Products
                        </Typography>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                New Arrivals
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Best Sellers
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Trending
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Sales
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Facebook
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Instagram
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                Twitter
                            </Link>
                        </Box>
                        <Box>
                            <Link href="#" color="inherit" underline="none">
                                YouTube
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0.5} justifyContent="center" mt={4}>
                    <Grid item>
                        <img
                            src="/assets/visa.svg"
                            alt="Visa"
                            height={32}
                            width={48}
                        />
                    </Grid>
                    <Grid item>
                        <img
                            src="/assets/mastercard-alt.svg"
                            alt="MasterCard"
                            height={32}
                            width={48}
                        />
                    </Grid>

                    <Grid item>
                        <img
                            src="/assets/paypal.svg"
                            alt="PayPal"
                            height={32}
                            width={48}
                        />
                    </Grid>
                    <Grid item>
                        <img
                            src="/assets/maestro-alt.svg"
                            alt="Maestro"
                            height={32}
                            width={48}
                        />
                    </Grid>
                    <Grid item>
                        <img src="/assets/apple-pay.svg" alt="Apple Pay" height={32} width={48}/>
                    </Grid>
                </Grid>
                <Box mt={4} textAlign="center">
                    <Typography variant="body2" color="inherit">
                        &copy; {new Date().getFullYear()} Your Company. All
                        rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
