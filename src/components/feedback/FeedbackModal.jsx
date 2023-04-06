import React, { useState } from "react";
import Feedback from "./Feedback";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import RateReviewIcon from '@mui/icons-material/RateReview';
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fab from '@mui/material/Fab';

const FeedbackModal = ({ userId, apiUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickAway = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        className="fixed bottom-4 right-4"
        sx={{
          borderRadius: 1,
          boxShadow: isModalOpen ? 2 : 0,
          overflow: "hidden",
        }}
      >
        {isModalOpen ? (
          <Box className="relative p-8 "> Leave Feedback
            <IconButton color="info"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2"
              size="small"
              aria-label="close feedback form"
              style={{ position: 'absolute', right: 30 , top: 25}}
            >
              <CloseIcon />
            </IconButton>
            <Feedback userId={userId} apiUrl={apiUrl} />
          </Box>
        ) : (
          <IconButton
            onClick={() => setIsModalOpen(true)}
            color="primary"
            aria-label="open feedback form"
          >
        <Fab size="medium" color="secondary" aria-label="add">
          <RateReviewIcon/>
        </Fab>
           
          </IconButton>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default FeedbackModal;
