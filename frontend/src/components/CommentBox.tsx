import { useState } from "react";
import { motion } from "framer-motion";
import "./CommentBox.css"; // Import the custom CSS file

export default function CommentBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState(""); // State to store the comment

  const handleSave = () => {
    console.log("Saved comment:", comment); // Replace this with your save logic
    setIsOpen(false); // Close the comment box after saving
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
