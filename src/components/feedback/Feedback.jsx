import React, { useState, useEffect } from "react";

const Feedback = ({ userId, apiUrl }) => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [inputVisible, setInputVisible] = useState(false);
  const [lastFeedbackTime, setLastFeedbackTime] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedTimestamp = localStorage.getItem("lastFeedbackTime");
    if (storedTimestamp) {
      setLastFeedbackTime(new Date(Number(storedTimestamp)));
    }
  }, []);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setInputVisible(true);
  };

  const handleSubmit = async () => {
    // Save feedback to the backend
    const response = await fetch(`${apiUrl}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        emoji: selectedEmoji,
        feedbackText: document.querySelector("textarea").value,
      }),
    });
  
    if (response.status === 201) {
    
      const now = new Date();
      setLastFeedbackTime(now);
      localStorage.setItem("lastFeedbackTime", now.getTime());
      setInputVisible(false);
      setSubmitted(true);
    } else {
      console.error("Failed to save feedback");
    }
  };

  const timeSinceLastFeedback = lastFeedbackTime
  ? (new Date() - lastFeedbackTime) / 1000 / 60 / 60
  : Infinity;

  if (timeSinceLastFeedback < 0) {
    return (
      <div className="bg-red-500 text-white p-4 rounded shadow-md">
        You have already left your feedback today! You can leave a feedback once every 24 hours.
      </div>
    );
  }

  return (
    <>
      {inputVisible ? (
        <div className="bg-white border p-4 rounded shadow-md">
          <p style={{ color: "black" }}>You selected {selectedEmoji}. Please enter details.</p>
          <textarea  style={{ color: "gray" }}  className="w-full h-24 p-2 mt-2 border rounded"  placeholder="Enter your feedback..."
      ></textarea>
     <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded" onClick={handleSubmit}>
      Submit
    </button>
    </div>
  ) : (
    <>
    {submitted ? (
        <div  style={{ color: "black" }} className="bg-green-500 text-white px-4 py-2 rounded">
          Thank you for your feedback!
        </div>
      ) : (
        
        <div className="bg-white border p-4 rounded shadow-md">
        <p style={{ color: "black" }}>How do you feel about the app?</p>
        <div className="flex space-x-4">
            <button style={{ fontSize: "3rem" }} onClick={() => handleEmojiClick("Happy")} title='Happy'>
            😃
            </button>
            <button style={{ fontSize: "3rem" }} onClick={() => handleEmojiClick("Disappointed")} title='Disappointed'>
            😞
            </button>
            <button style={{ fontSize: "3rem" }} onClick={() => handleEmojiClick("Idea")} title='Idea'>
            💡
            </button>
            <button style={{ fontSize: "3rem" }} onClick={() => handleEmojiClick("Bug")} title='Bug'>
            🐛
            </button>
        </div>
        </div>
  )}
  </>
  )}
</>

);
};

export default Feedback;         
