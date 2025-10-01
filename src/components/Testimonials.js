import React, { useState, useEffect } from "react";
import "../App.css";

function Testimonials() {
  // Load feedback from localStorage on mount, start empty if none
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("testimonials");
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
  });

  const [input, setInput] = useState({ name: "", text: "" });

  // Save to localStorage whenever feedbacks change
  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name.trim() && input.text.trim()) {
      setFeedbacks([...feedbacks, { name: input.name, text: input.text }]);
      setInput({ name: "", text: "" });
    }
  };

  const handleDelete = (index) => {
    const newFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(newFeedbacks);
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="feedback-list">
        {feedbacks.map((fb, index) => (
          <div key={index} className="feedback">
            <p>
              "{fb.text}" <small>- {fb.name}</small>
            </p>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              ×
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="Your Name"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Write your feedback..."
            value={input.text}
            onChange={(e) => setInput({ ...input, text: e.target.value })}
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </section>
  );
}

export default Testimonials;
