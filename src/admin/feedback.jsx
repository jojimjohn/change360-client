import React, { useEffect, useState } from "react";

const Feedback = ({ apiUrl }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/feedback`)
      .then((response) => response.json())
      .then((data) => setFeedbacks(data.feedbacks));
  }, []);
  console.log(feedbacks);
  if (!Array.isArray(feedbacks)) {
    return <div>Loading feedback...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin - View Feedback</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">User ID</th>
            <th className="border p-2">Emoji</th>
            <th className="border p-2">Feedback</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback._id}>
              <td className="border p-2">{feedback.userId}</td>
              <td className="border p-2">{feedback.emoji}</td>
              <td className="border p-2">{feedback.feedbackText}</td>
              <td className="border p-2">{new Date(feedback.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Feedback;
