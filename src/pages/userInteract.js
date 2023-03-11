import React, { useState } from 'react';
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
    Avatar,
    styled
  } from "@mui/material";
import axios from 'axios';

const UserInteract = ({address}) => {
  const [questionNum, setQuestionNum] = useState(1);
  const [responses, setResponses] = useState([]);
  const [showTextBox, setShowTextBox] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const ChatBox = styled(Box)({
    flexGrow: 1,
    p: 3,
  });
  
  const ChatHeader = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  });
  
  const ChatQuestion = styled(Typography)({
    fontSize: '1.2rem',
    fontWeight: 'bold',
  });
  
  const ChatResponse = styled(Typography)({
    fontSize: '1.2rem',
  });
  
  const ChatInput = styled(TextField)({
    marginBottom: '1rem',
  });
  
  const ChatButton = styled(Button)({
    marginTop: '1rem',
  });

  console.log(address);

  const handleNext = async () => {    
    const response = document.getElementById('response').value;
   // setResponses([...responses, { question: questionText, response }]);
    document.getElementById('response').value = '';
            
    if (questionNum <= 4) {
        setResponses([...responses, { question: questionText, response }]);
      }


    if (questionNum === 4) {
      setShowTextBox(false);
      setIsLoading(true);

      setResponses([...responses, { question: questionText, response }]);

      const newResponses = responses.concat([{ question: questionText, response }]);
      const answers = newResponses.map(response => `${response.question.props.children} ${response.response}`).join(', ');
  
      // Construct the JSON data to be passed to the API
      const jsonData = {
        answers: answers,
        address
       };
             
      console.log(jsonData);
   
      try {
             //https://change360-v1.onrender.com/
            //http://localhost:5000/
         const aiResponse = await axios.post('http://localhost:5000/api/ai', jsonData);
       
       console.log(aiResponse.data);
       // setResponses([...responses, { question: "AI's Response", response: aiResponse.data }]);
       setIsLoading(false);
       setResponse(aiResponse.data);

      } catch (error) {
        console.error(error);
      }
    } else {
      setQuestionNum(questionNum + 1);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        handleNext();
    }
  };

  let questionText;
  switch (questionNum) {
    case 1:
      questionText = <b>What progress have you made in your nutrition and meal planning since our last discussion?</b>;
      break;
    case 2:
      questionText = <b>What challenges have you faced and successes have you had in your training since our last discussion?</b>;
      break;
    case 3:
      questionText = <b>What changes have you noticed in your body since you began the program?</b>;
      break;
    case 4:
      questionText = <b>Do you feel that any adjustments need to be made to the program?</b>;
      break;
    default:
      questionText = '';
  }

  return (
    <ChatBox>
        <ChatHeader gutterBottom>
            Change 360:
        </ChatHeader>
        {responses.slice(0, 3).map((response, index) => (
        <Box key={index} sx={{ mb: 2 }}>
            <ChatQuestion>{response.question}</ChatQuestion>
            <ChatResponse>{response.response}</ChatResponse>
        </Box>
            ))}
            {responses.length > 3 && (
            <Box key={responses.length - 1} sx={{ mb: 2 }}>
                <ChatQuestion>{responses[3].question}</ChatQuestion>
                <ChatResponse>{responses[3].response}</ChatResponse>
            </Box>
            )}
        {responses.length <= 3 && (
            <Box sx={{ mb: 2 }}>
            <ChatQuestion>{questionText}</ChatQuestion>
        </Box>
            )}
        {showTextBox && (
            <Box sx={{ mb: 2 }}>
            <ChatInput id="response" label="Response" fullWidth variant="outlined" onKeyPress={handleKeyPress} />
            </Box>
        )}
        {showTextBox && (
        <ChatButton variant="contained" color="primary" onClick={handleNext}>
            {questionNum === 4 ? 'Submit' : 'Next'}
        </ChatButton>
        )}

  {isLoading || response != null || error != null? (

    <Card sx={{ maxWidth: '80%', m: 2 }}>
       <CardHeader
       sx={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         p: 2,
         bgcolor: '#f5f5f5',
         borderBottom: '1px solid #ccc',
       }}
       avatar={
         isLoading ? (
           <Skeleton
             animation="wave"
             variant="circular"
             width={40}
             height={40}
           />
         ) : (
           <Avatar
             alt="Change 360"
             src="../../assets/logo_small.jpg"
             sx={{ mr: 2 }}
           >
             C
           </Avatar>
         )
       }
       title={
         isLoading ? (
           <Skeleton
             animation="wave"
             height={10}
             width="80%"
             style={{ marginBottom: 6 }}
           />
         ) : (
           <Typography variant="h6">Change 360</Typography>
         )
       }
     />
       <CardContent>
         {isLoading ? (
           <React.Fragment>
             <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
             <Skeleton animation="wave" height={10} width="80%" />
           </React.Fragment>
         ) : (
         <>
           {error && <Typography color="error">{error}</Typography>}
           {response && (
         <Box sx={{ mt: 2 }}>
           <Typography variant="body2" color="text.secondary" component="p">
           {response.message.split('\n\n').map((text, index) => (
             <p key={index}>{text}</p>
           ))}
           </Typography>
       
    
         </Box>    
         )}
       </>
         )}
       </CardContent>
    </Card>
    ) :('') }

    </ChatBox>
  

  );
};

export default UserInteract;
