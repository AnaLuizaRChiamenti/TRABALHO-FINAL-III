import { Grid } from "@mui/material";
import React from "react";

const Login: React.FC = () => {
    return (
        <Grid container height="100vh">
            <Grid
                item
                md={7}
                sm={4}
                xs={false}
                sx={{
                    backgroundImage: "url(https://source.unsplash.com/random)", // alterar o background
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repete",
                }}
            >
                {" "}
                <h1>aaa</h1>
            </Grid>
            <Grid item md={5} sm={8} xs={12}>
                <h1>aaa</h1>
            </Grid>
        </Grid>
    );
};

export default Login;
