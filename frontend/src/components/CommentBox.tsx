import { useState } from "react";
import { motion } from "framer-motion";
import { addComment, updateComment, fetchComment } from "../api/ScriptureAPI";
import "./CommentBox.css";

interface CommentPayload {
  user_id: number;
  scripture_id: number;
  content: string;
  comment_id?: number; // Optional for new comments
}

export default function CommentBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [commentId, setCommentId] = useState<number | null>(null); // Track the comment ID for updates
  const [error, setError] = useState("");

  const handleSave = async () => {
    const userId = localStorage.getItem("userId");
    const scriptureId = 1; // Replace with actual scripture ID logic

    if (!userId) {
      setError("User ID is missing. Please log in again.");
      return;
    }

    try {
      const payload: CommentPayload = {
        user_id: parseInt(userId, 10),
        scripture_id: scriptureId,
        content: comment,
        comment_id: commentId || undefined, // Include comment_id only if it exists
      };

      console.log("Sending payload:", payload);

      if (commentId) {
        // Update existing comment
        await updateComment(commentId, {
          comment_id: payload.comment_id!,
          user_id: payload.user_id,
          scripture_id: payload.scripture_id,
          content: payload.content,
          // Add any additional fields required by the backend here
        });
      } else {
        // Add new comment
        const newComment = await addComment(payload as any); // Cast payload to match the backend's expectations
        setCommentId(newComment.comment_id); // Save the new comment ID
      }

      console.log("Saved comment:", comment);
      setComment("");
      setCommentId(null);
      setIsOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    }
  };

  const handleOpen = async () => {
    const userId = localStorage.getItem("userId");
    const scriptureId = 1; // Replace with actual scripture ID logic

    if (!userId) {
      setError("User ID is missing. Please log in again.");
      return;
    }

    try {
      const existingComment = await fetchComment(
        parseInt(userId, 10),
        scriptureId
      );

      if (existingComment) {
        setComment(existingComment.content); // Pre-fill the comment box with the existing comment
        setCommentId(existingComment.comment_id); // Track the comment ID for updates
      } else {
        setComment(""); // No existing comment, leave the box empty
        setCommentId(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    }

    setIsOpen(true);
  };

  return (
    <div className="relative">
      {/* Annotate Button */}
      <div className="comment-box-button-container">
        <button onClick={handleOpen} className="comment-box-button">
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
