import React, { useState } from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import CountUp from "react-countup";
import { useCountUp } from "react-countup";

const theme = createTheme();

export default function GG1() {
    const countUpRef = React.useRef(null);
    const [l, setL] = useState(0);
    const [lq, setLq] = useState(0);
    const [w, setW] = useState(0);
    const [wq, setWq] = useState(0);
    const [p, setP] = useState(0);


    const [gammaLemda, setGammaLemda] = useState(0);
    const [gammaVariance, setGammaVariance] = useState(0);
    const [normalLemda, setNormalLemda] = useState(0);
    const [normalVariance, setNormalVariance] = useState(0);

    const [showResult, setShowResult] = useState(false);

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("please enter");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // const ia = data.get("lemda");
        const gammaLemda = parseInt(data.get("gammaLemda"));
        const gammaVariance = parseInt(data.get("gammaVariance"));
        const normalLemda = parseInt(data.get("normalLemda"));
        const normalVariance = parseInt(data.get("normalVariance"));

        console.log('gammaLemda', gammaLemda, 'gammaVariance', gammaVariance, 'normalLemda', normalLemda, 'normalVariance', normalVariance)

        if (
            data.get("gammaLemda") === "" ||
            data.get("gammaVariance") === "" ||
            data.get("normalLemda") === "" ||
            data.get("normalVariance") === ""
        ) {
            alert("Please enter required values");
        } else {
            setShowResult(true);

        }

        var lemda = 1 / gammaLemda;
        var mue = 1 / normalLemda;
        var ro = normalLemda / gammaLemda;

        var CSquareA = gammaVariance / ((1 / lemda) ** 2);
        var CSquareS = normalVariance / ((1 / mue) ** 2);

        var listInQueue = ((ro ** 2) * (1 + CSquareS) * (CSquareA + ((ro ** 2) * CSquareS))) / (2 * (1 - ro) * (1 + ((ro ** 2) * CSquareS)));

        var waitInQueue = listInQueue / lemda;

        var waitInSystem = waitInQueue + (1 / mue);

        var listInSystem = lemda * waitInSystem;

        var serverUtilization = ro * 100;



        setLq(listInQueue);
        setWq(waitInQueue);
        setW(waitInSystem);
        setL(listInSystem);
        setP(serverUtilization)

    }
    // };

    // const handleArrivalChange = (event) => {
    //     setArrivalRate(event.target.value);
    //     if (event.target.value === "No units") {
    //         setLemda(0);
    //     } else if (event.target.value === "Day") {
    //         if (arrivalRate === "Hour") {
    //             setLemda(lemda * 24);
    //         } else if (arrivalRate === "Minute") {
    //             setLemda(lemda * 24 * 60);
    //         } else if (arrivalRate === "Second") {
    //             setLemda(lemda * 24 * 60 * 60);
    //         }
    //     } else if (event.target.value === "Hour") {
    //         if (arrivalRate === "Day") {
    //             setLemda(lemda / 24);
    //         } else if (arrivalRate === "Minute") {
    //             setLemda(lemda * 60);
    //         } else if (arrivalRate === "Second") {
    //             setLemda(lemda * 60 * 60);
    //         }
    //     } else if (event.target.value === "Minute") {
    //         if (arrivalRate === "Day") {
    //             setLemda(lemda / (24 * 60));
    //         } else if (arrivalRate === "Hour") {
    //             setLemda(lemda / 60);
    //         } else if (arrivalRate === "Second") {
    //             setLemda(lemda * 60);
    //         }
    //     } else if (event.target.value === "Second") {
    //         if (arrivalRate === "Day") {
    //             setLemda(lemda / (24 * 60 * 60));
    //         } else if (arrivalRate === "Hour") {
    //             setLemda(lemda / (60 * 60));
    //         } else if (arrivalRate === "Minute") {
    //             setLemda(lemda / 60);
    //         }
    //     }
    // };

    // const handleServiceChange = (event) => {
    //     setServiceRate(event.target.value);
    //     if (event.target.value === "No units") {
    //         setMue(0);
    //     } else if (event.target.value === "Day") {
    //         if (serviceRate === "Hour") {
    //             setMue(mue * 24);
    //         } else if (serviceRate === "Minute") {
    //             setMue(mue * 24 * 60);
    //         } else if (serviceRate === "Second") {
    //             setMue(mue * 24 * 60 * 60);
    //         }
    //     } else if (event.target.value === "Hour") {
    //         if (serviceRate === "Day") {
    //             setMue(mue / 24);
    //         } else if (serviceRate === "Minute") {
    //             setMue(mue * 60);
    //         } else if (serviceRate === "Second") {
    //             setMue(mue * 60 * 60);
    //         }
    //     } else if (event.target.value === "Minute") {
    //         if (serviceRate === "Day") {
    //             setMue(mue / (24 * 60));
    //         } else if (serviceRate === "Hour") {
    //             setMue(mue / 60);
    //         } else if (serviceRate === "Second") {
    //             setMue(mue * 60);
    //         }
    //     } else if (event.target.value === "Second") {
    //         if (serviceRate === "Day") {
    //             setMue(mue / (24 * 60 * 60));
    //         } else if (serviceRate === "Hour") {
    //             setMue(mue / (60 * 60));
    //         } else if (serviceRate === "Minute") {
    //             setMue(mue / 60);
    //         }
    //     }
    // };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Grid container flexDirection="row" justifyContent="space-evenly">




                        <Grid md={4.5}>

                            <Box
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    padding: 3,
                                    mb: 5,
                                }}
                                className="container"
                            >
                                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                                    Mean of Inter Arrival (having Gamma dist. in minutes)
                                </Typography>
                                <Box mb={2}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="gammaLemda"
                                        label="λ"
                                        type="number"
                                        id="gammaLemda"
                                        value={gammaLemda}
                                        onChange={(e) => setGammaLemda(e.target.value)}
                                    />
                                </Box>

                            </Box>
                        </Grid>

                        <Grid md={4.5}>

                            <Box
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    padding: 3,
                                    mb: 5,
                                }}
                                className="container"
                            >
                                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                                    Variance of Inter Arrival (having Gamma dist. in minutes)
                                </Typography>
                                <Box mb={2}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="gammaVariance"
                                        label="σ2"
                                        type="number"
                                        id="gammaVariance"
                                        value={gammaVariance}
                                        onChange={(e) => setGammaVariance(e.target.value)}
                                    />
                                </Box>

                            </Box>
                        </Grid>

                        <Grid md={4.5}>

                            <Box
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    padding: 3,
                                    mb: 5,
                                }}
                                className="container"
                            >
                                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                                    Mean of Inter Arrival (having Normal dist. in minutes)
                                </Typography>
                                <Box mb={2}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="normalLemda"
                                        label="λ"
                                        type="number"
                                        id="normalLemda"
                                        value={normalLemda}
                                        onChange={(e) => setNormalLemda(e.target.value)}
                                    />
                                </Box>

                            </Box>
                        </Grid>

                        <Grid md={4.5}>

                            <Box
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    padding: 3,
                                    mb: 5,
                                }}
                                className="container"
                            >
                                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                                    Variance of Inter Arrival (having Normal dist. in minutes)
                                </Typography>
                                <Box mb={2}>
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="normalVariance"
                                        label="σ2"
                                        type="number"
                                        id="normalVariance"
                                        value={normalVariance}
                                        onChange={(e) => setNormalVariance(e.target.value)}
                                    />
                                </Box>

                            </Box>
                        </Grid>





                    </Grid>

                    <Button
                        type="submit"
                        // fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: '#ff0000',
                            width: '60%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            display: 'flex',
                            alignItem: 'center',
                            justifyContent: 'center',
                            padding: '12px',
                            borderRadius: '10px',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#ff0000',
                                border: '2px solid #ff0000'
                            }
                        }}
                    >
                        Calculate
                    </Button>
                </Box>

                {true ? (
                    <>
                        <Typography
                            sx={{
                                fontSize: 30,
                                fontWeight: "bold",
                            }}
                        >
                            Result
                        </Typography>

                        <Box
                            sx={{
                                borderRadius: 2,
                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                padding: 3,
                                mb: 3,
                            }}
                        >
                            <Grid conatiner flexDirection="column">
                                <Typography
                                    sx={{
                                        fontSize: 25,
                                        fontWeight: "bold",
                                        display: "inline-flex",
                                        color: "purple",
                                    }}
                                >
                                    <CountUp
                                        start={0}
                                        end={l}
                                        duration={2}
                                        separator=" "
                                        decimals={5}
                                        decimal="."
                                        onEnd={() => console.log("Ended! 👏")}
                                        onStart={() => console.log("Started! 💨")}
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                            </div>
                                        )}
                                    </CountUp>
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                            fontSize: 25,
                                            fontWeight: "normal",
                                            display: "inline-flex",
                                        }}
                                    >
                                        Customers
                                    </Typography>
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 25, fontWeight: "bold", color: "purple" }}
                                >
                                    L{" "}
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                            fontSize: 25,
                                            fontWeight: "normal",
                                            display: "inline-flex",
                                        }}
                                    >
                                        Average Customers in System
                                    </Typography>
                                </Typography>

                                <Typography sx={{ color: "gray" }}>
                                    Average number of customers in the system.
                                </Typography>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                borderRadius: 2,
                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                padding: 3,
                                mb: 3,
                            }}
                        >
                            <Grid conatiner flexDirection="column">
                                <Typography
                                    sx={{
                                        fontSize: 25,
                                        fontWeight: "bold",
                                        display: "inline-flex",
                                        color: "skyblue",
                                    }}
                                >
                                    <CountUp
                                        start={0}
                                        end={lq}
                                        duration={2}
                                        separator=" "
                                        decimals={5}
                                        decimal="."
                                        onEnd={() => console.log("Ended! 👏")}
                                        onStart={() => console.log("Started! 💨")}
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                            </div>
                                        )}
                                    </CountUp>
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                            fontSize: 25,
                                            fontWeight: "normal",
                                            display: "inline-flex",
                                        }}
                                    >
                                        Customers
                                    </Typography>
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 25, fontWeight: "bold", color: "skyblue" }}
                                >
                                    Lq{" "}
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                            fontSize: 25,
                                            fontWeight: "normal",
                                            display: "inline-flex",
                                        }}
                                    >
                                        Average Customers in Queue
                                    </Typography>
                                </Typography>

                                <Typography sx={{ color: "gray" }}>
                                    Average number of customers (entities) in the queue. In other
                                    words the expected amount of customers waiting to be served.
                                </Typography>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                borderRadius: 2,
                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                padding: 3,
                                mb: 3,
                            }}
                        >
                            <Grid conatiner flexDirection="column">
                                <Typography
                                    sx={{
                                        fontSize: 25,
                                        fontWeight: "bold",
                                        display: "inline-flex",
                                        color: "green",
                                    }}
                                >
                                    <CountUp
                                        start={0}
                                        end={w}
                                        duration={2}
                                        separator=" "
                                        decimals={5}
                                        decimal="."
                                        onEnd={() => console.log("Ended! 👏")}
                                        onStart={() => console.log("Started! 💨")}
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                            </div>
                                        )}
                                    </CountUp>
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                            fontSize: 25,
                                            fontWeight: "normal",
                                            display: "inline-flex",
                                        }}
                                    >
                                        {/* {arrivalRate} */}
                                    </Typography>
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 25, fontWeight: "bold", color: "green" }}
                                >
                                    W{" "}
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                            fontSize: 25,
                                            fontWeight: "normal",
                                            display: "inline-flex",
                                        }}
                                    >
                                        Average Time Spent in System
                                    </Typography>
                                </Typography>

                                <Typography sx={{ color: "gray" }}>
                                    Average time spent by a customer from arrival until fully
                                    served.
                                </Typography>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                borderRadius: 2,
                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                padding: 3,
                                mb: 3,
                            }}
                        >
                            <Grid conatiner flexDirection="column">
                                <Typography
                                    sx={{
                                        fontSize: 25,
                                        fontWeight: "bold",
                                        display: "inline-flex",
                                        color: "red",
                                    }}
                                >
                                    <CountUp
                                        start={0}
                                        end={wq}
                                        duration={2}
                                        separator=" "
                                        decimals={5}
                                        decimal="."
                                        onEnd={() => console.log("Ended! 👏")}
                                        onStart={() => console.log("Started! 💨")}
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                            </div>
                                        )}
                                    </CountUp>
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                            fontSize: 25,
                                            fontWeight: "normal",
                                            display: "inline-flex",
                                        }}
                                    >
                                        {/* {serviceRate} */}
                                    </Typography>
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 25, fontWeight: "bold", color: "red" }}
                                >
                                    Wq{" "}
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                            fontSize: 25,
                                            fontWeight: "normal",
                                            display: "inline-flex",
                                        }}
                                    >
                                        Average Time Waiting in Line
                                    </Typography>
                                </Typography>

                                <Typography sx={{ color: "gray" }}>
                                    Average time it takes a customer to start being served.
                                </Typography>
                            </Grid>
                        </Box>
                        <Box
                            sx={{
                                borderRadius: 2,
                                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                padding: 3,
                                mb: 3,
                            }}
                        >
                            <Grid conatiner flexDirection="column">
                                <Typography
                                    sx={{
                                        fontSize: 25,
                                        fontWeight: "bold",
                                        display: "inline-flex",
                                        color: "orange",
                                    }}
                                >
                                    <CountUp
                                        start={0}
                                        end={p}
                                        duration={2}
                                        separator=" "
                                        decimals={5}
                                        decimal="."
                                        onEnd={() => console.log("Ended! 👏")}
                                        onStart={() => console.log("Started! 💨")}
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                            </div>
                                        )}
                                    </CountUp>
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                            fontSize: 25,
                                            fontWeight: "normal",
                                            display: "inline-flex",
                                        }}
                                    ></Typography>
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 25, fontWeight: "bold", color: "orange" }}
                                >
                                    ρ{" "}
                                    <Typography
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                            fontSize: 25,
                                            fontWeight: "normal",
                                            display: "inline-flex",
                                        }}
                                    >
                                        Server Utilization
                                    </Typography>
                                </Typography>

                                <Typography sx={{ color: "gray" }}>
                                    Percentage of time a server is being utilized by a customer.{" "}
                                </Typography>
                            </Grid>
                        </Box>
                    </>
                ) : null}
            </Container>
        </ThemeProvider>
    );
}
