import { useState } from "react";
import { motion } from "framer-motion";
import "./CommentBox.css";

export default function CommentBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(""); // State to handle errors

  const handleSave = async () => {
    const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

    if (!userId) {
      setError("User ID is missing. Please log in again.");
      return;
    }

    try {
      const payload = {
        user_id: userId,
        annotation: comment,
      };

      console.log("Sending payload:", payload); // Log the payload for debugging

      const response = await fetch("https://localhost:5000/Scripture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Failed to save annotation.");
      }

      console.log("Saved comment:", comment);
      setComment(""); // Clear the comment box
      setIsOpen(false); // Close the comment box
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    }
  };

  return (
    <div className="relative">
      {/* Annotate Button */}
      <div className="comment-box-button-container">
        <button onClick={() => setIsOpen(true)} className="comment-box-button">
          Annotate
        </button>
      </div>

      {/* Comment Box Overlay */}
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="comment-box-overlay"
        >
          <h2 className="text-xl font-bold mb-4">Your Comments</h2>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="comment-box-textarea"
            placeholder="Type your comment here..."
          />
          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}
          <div className="comment-box-buttons">
            <button onClick={handleSave} className="comment-box-save-button">
              Save
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="comment-box-close-button"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
