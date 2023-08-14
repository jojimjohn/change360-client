import React, {useState, useEffect} from "react";
import {
    Box,
    Button,
    CircularProgress,
    Card,
    CardHeader,
    CardContent,
    Typography,
    TextField,
    Skeleton,
    Avatar
} from "@mui/material";
import {Link} from "react-router-dom";

//import {addRewardPoints} from '../rewards/RewardsProvider';

const DisplayMealPlan = ({userInfo, handleNext, apiUrl}) => {

    // useEffect(() => {
    //     addRewardPoints('Personalized Exercise and Nutrition Plan', 20);
    // }, []);

    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();

        // Move to the next step handleNext(response.userId);
    };

    useEffect(() => {

        if (userInfo) {
            const fetchData = async () => {
                setIsLoading(true);

                try {
                    // Send a POST request to the backend to save the user's dietary information Get
                    // the Personalized Exercise and Nutrition Plan from the OpenAI API
                    const response = await fetch(`${apiUrl}/nutrition`, {
                        method: 'POST',
                        body: userInfo,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if (!response.ok) {
                        throw new Error('Something went wrong');
                        return;
                    }

                    const planData = await response.json();

                    setIsLoading(false);
                    setResponse(planData);
                    setError(null);

                } catch (error) {
                    setError(error.message);
                    setResponse(null);
                    setIsLoading(false);
                }

                setIsLoading(false);

            };
            fetchData();
        }
    }, [userInfo]);

    const formatMessage = (message) => {
        const sections = message.split('\n\n');

        return sections.map((section, index) => {
            const lines = section
                .trim()
                .split('\n');
            const tableHeaders = lines[0]
                .split('|')
                .map((header) => header.trim());
            const tableRows = lines
                .slice(2)
                .map((row) => row.split('|').map((cell) => cell.trim()));

            if (tableRows.length > 0 && tableHeaders.length > 1) {
                return (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#f1f1f1',
                            padding: '16px'
                        }}>
                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'collapse'
                            }}>
                            <thead
                                style={{
                                    backgroundColor: '#e7e7e7'
                                }}>
                                <tr>
                                    {
                                        tableHeaders.map((header) => (
                                            <th
                                                key={header}
                                                style={{
                                                    padding: '8px',
                                                    border: '1px solid #ddd'
                                                }}>
                                                {header}
                                            </th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableRows.map((row, rowIndex) => (
                                        <tr
                                            key={rowIndex}
                                            style={{
                                                backgroundColor: rowIndex % 2 === 0
                                                    ? '#f9f9f9'
                                                    : 'white'
                                            }}>
                                            {
                                                row.map((cell, cellIndex) => (
                                                    <td
                                                        key={cellIndex}
                                                        style={{
                                                            padding: '8px',
                                                            border: '1px solid #ddd'
                                                        }}>
                                                        {cell}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                );
            } else {
                return (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#f1f1f1',
                            padding: '16px'
                        }}>
                        <h3
                            style={{
                                margin: 0,
                                marginBottom: '16px',
                                color: '#2196f3'
                            }}>{lines[0]}</h3>
                        {
                            lines
                                .slice(1)
                                .map((row, rowIndex) => (
                                    <p
                                        key={rowIndex}
                                        style={{
                                            margin: 0
                                        }}>
                                        {row}
                                    </p>
                                ))
                        }
                    </div>
                );
            }
        });
    };

    return (
        <Box
            sx={{
                p: 2,
                width: {
                    xl: "80%"
                }
            }}
            m="auto">
            <Typography variant="h5">Result: Your Personalized Exercise and Nutrition Plan</Typography>
            <Box
                component="form"
                onSubmit={submitHandler}
                sx={{
                    mt: 2
                }}>

                {
                    isLoading || response != null
                        ? (

                            <Card
                                sx={{
                                    maxWidth: '80%',
                                    m: 2,
                                    boxShadow: 4,
                                    backgroundColor: '#f5f5f5'
                                }}>
                                <CardHeader
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        p: 2,
                                        bgcolor: '#e7e7e7',
                                        borderBottom: '1px solid #ccc'
                                    }}
                                    avatar={isLoading
                                        ? (
                                            <Skeleton animation="wave" variant="circular" width={40} height={40}/>
                                        )
                                        : (
                                            <Avatar
                                                alt="Change 360"
                                                src="../../assets/logo_small.jpg"
                                                sx={{
                                                    mr: 2
                                                }}></Avatar>
                                        )}
                                    title={isLoading
                                        ? (
                                            <> < Skeleton animation = "wave" height = {
                                                10
                                            }
                                            width = "80%" style = {{ marginBottom: 6 }}
                                            /><Typography variant="h6">Change 360: We are generating your Personalized Exercise and Nutrition Plan</Typography > </>
                                        )
                                        : (<Typography variant="h6">Change 360</Typography>)}/>

                                <CardContent
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                    {
                                        isLoading
                                            ? (
                                                <React.Fragment>
                                                    <Skeleton
                                                        animation="wave"
                                                        height={10}
                                                        style={{
                                                            marginBottom: 6
                                                        }}/>
                                                    <Skeleton animation="wave" height={10} width="80%"/>
                                                </React.Fragment>
                                            )
                                            : (
                                            <> {
                                                error && <Typography color="error">{error}</Typography>
                                            } {
                                                response && (
                                                    <Box
                                                        sx={{
                                                            mt: 2
                                                        }}>
                                                        <Typography variant="h6" gutterBottom="gutterBottom">
                                                            Hi {response.name}, here is your Personalized Exercise and Nutrition Plan.
                                                        </Typography>
                                                        {formatMessage(response.message)}
                                                        <Link
                                                            to={`/upgradeplan/${response.userId}`}
                                                            style={{
                                                                textDecoration: 'none',
                                                                marginTop: 10
                                                            }}>
                                                            <Button variant="contained" color="primary">
                                                                Upgrade to additional 2-Day Personalized Exercise and Nutrition Plan
                                                            </Button>
                                                        </Link>
                                                    </Box>
                                                )
                                            } </>
                                          ) }

                                </CardContent>
                            </Card>

                        )
                        : ('')
                }
            </Box>
        </Box>
    );
};

export default DisplayMealPlan;
