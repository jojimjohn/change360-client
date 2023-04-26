import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    CircularProgress,
    Card,
    CardHeader,
    CardContent,
    Typography,
    TextField,
    TextareaAutosize,
    Skeleton,
    Avatar,
    styled
  } from "@mui/material";
import axios from 'axios';

const UserInteract = ({address, apiUrl }) => {
  const [questionNum, setQuestionNum] = useState(1);
  const [responses, setResponses] = useState([]);
  const [showTextBox, setShowTextBox] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

const UserChatBubble = styled(Card)({
  padding: '10px',
  borderRadius: '15px',
  maxWidth: '70%',
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  marginBottom: '8px',
});

const AIChatBubble = styled(Card)({
  padding: '10px',
  borderRadius: '15px',
  maxWidth: '70%',
  backgroundColor: '#333333',
  color: '#ffffff',
  marginBottom: '8px',
});

const UserAvatar = styled(Avatar)({
  backgroundColor: '#2196f3',
});

const AIAvatar = styled(Avatar)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
}));

  
  const ChatBox = styled(Box)({
    flexGrow: 1,
    p: 3,
    minHeight: '50vh',
    backgroundColor: '#1a1a1a',
    padding: '10px',
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
    whiteSpace: 'pre-wrap',
  });
  
  const ChatInput = styled(TextareaAutosize)({
    backgroundColor: 'black',
    color: 'white',
    resize: 'vertical',
    width: '100%',
  });

  const ChatButton = styled(Button)({
    marginTop: '1rem',
  });

 // console.log(address);

  const handleNext = async () => {    
    const response = document.getElementById('response').value;

    if (response <= 1) {
      return // Do not allow empty response
    }

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
             
     // console.log(jsonData);
   
      try {
       const aiResponse = await axios.post(`${apiUrl}/ai`, jsonData);
       
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
    if (event.key === 'Enter' && event.ctrlKey) {
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

  
  const formatMessage = (message) => {
    const sections = message.split('\n\n');
  
    return sections.map((section, index) => {
      const lines = section.trim().split('\n');
      const tableHeaders = lines[0].split('|').map((header) => header.trim());
      const tableRows = lines.slice(2).map((row) => row.split('|').map((cell) => cell.trim()));
  
      if (tableRows.length > 0 && tableHeaders.length > 1) {
        return (
          <div key={index} style={{ backgroundColor: '#f1f1f1', padding: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#e7e7e7' }}>
                <tr>
                  {tableHeaders.map((header) => (
                    <th key={header} style={{ padding: '8px', border: '1px solid #ddd' }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, rowIndex) => (
                  <tr key={rowIndex} style={{ backgroundColor: rowIndex % 2 === 0 ? '#f9f9f9' : 'white' }}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} style={{ padding: '8px', border: '1px solid #ddd' }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        return (
          <div key={index} style={{ backgroundColor: '#f1f1f1', padding: '16px' }}>
            <h3 style={{ margin: 0, marginBottom: '16px', color: '#2196f3' }}>{lines[0]}</h3>
            {lines.slice(1).map((row, rowIndex) => (
              <p key={rowIndex} style={{ margin: 0 }}>
                {row}
              </p>
            ))}
          </div>
        );
      }
    });
  };


  return (
    <ChatBox>
    {responses.map((response, index) => (
      <>
        <Box key={`q${index}`} sx={{ mb: 2, display: 'flex', justifyContent: 'flex-start' }}>
        <AIAvatar src={`/images/logo.png`} />
          <AIChatBubble sx={{ ml: 1 }}>
            <ChatQuestion>{response.question}</ChatQuestion>
          </AIChatBubble>
        </Box>
        <Box key={`r${index}`} sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <UserAvatar />
          <UserChatBubble sx={{ ml: 1 }}>
            <ChatResponse>{response.response}</ChatResponse>
          </UserChatBubble>
        </Box>
      </>
    ))}
    {responses.length <= 3 && (
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-start' }}>
        <AIAvatar src={`/images/logo.png`} />
        <AIChatBubble sx={{ ml: 1 }}>
          <ChatQuestion>{questionText}</ChatQuestion>
        </AIChatBubble>
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

    {isLoading || response != null || error != null ? (
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-start' }}>
       <AIAvatar src={`/images/logo.png`} />
        <AIChatBubble sx={{ ml: 1 }}>
          {isLoading ? (
            <>
              <CircularProgress />
              <Typography variant="body2" color="textSecondary">
                Please wait while the AI is generating a custom response...
              </Typography>
            </>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <ChatResponse>{formatMessage(response.message)}</ChatResponse>
          )}
        </AIChatBubble>
      </Box>
    ) : (
      ''
    )}
  </ChatBox>
  

  );
};

export default UserInteract;
