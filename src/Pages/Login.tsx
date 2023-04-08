/* eslint-disable prettier/prettier */
import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

import checkImage from "../Images/checkImage.png";

const Login: React.FC = () => {
    return (
        <Grid container height="100vh" width="100vw">
            <Grid
                item
                md={7}
                sm={12}
                xs={false}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    component="img"
                    alt="Desenho-menina-marcando-um-botao-check"
                    src={checkImage}
                    width="70%"
                />
            </Grid>
            <Grid
                item
                md={5}
                sm={12}
                xs={12}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Box // colocar uma ondinha azul no fundo
                    component="section"
                    marginY={8}
                    marginX={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    width="75%"
                >
                    <Avatar sx={{ bgcolor: "#4c80fc" }}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography variant="h4" margin={2}>
                        Faça seu login
                    </Typography>

                    <Box component="form">
                        <TextField
                            margin="normal"
                            type="email"
                            id="email"
                            label="Email"
                            fullWidth
                        />
                        <TextField
                            margin="normal"
                            type="senha"
                            id="senha"
                            label="Senha"
                            fullWidth
                        />
                        <FormControlLabel
                            sx={{ alignSelf: "start" }}
                            control={<Checkbox />}
                            label="Permanecer conectado"
                        />

                        <Button variant="contained" type="submit" fullWidth sx={{ mb: 2, mt: 3 }}>
                            Login
                        </Button>

                        <Grid container justifyContent="space-around">
                            <Grid item md={5} sm={8} xs={4}>
                                <Link href="/" variant="body2">
                                    Esqueceu a senha?
                                </Link>
                            </Grid>
                            <Grid item md={5} sm={8} xs={8}>
                                <Link href="/" variant="body2">
                                    Não tem uma conta? Cadastre-se
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Typography variant="body2" color="text.secondary" marginTop={5}>
                        Copyright &copy;   
                        <Link href="/" target="_blank">
                            Your Website {" "}   
                        </Link>
                        2023.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;
