const API_URL = "https://localhost:5000/api/scripture";

interface Comment {
  comment_id: number; // Explicitly define comment_id as required
  user_id: number;
  scripture_id: number;
  content: string;
  timestamp?: string; // Optional, if returned by the backend
}

export const addComment = async (newComment: Comment): Promise<Comment> => {
  try {
    const response = await fetch(`${API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to add comment.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

export const updateComment = async (
  comment_id: number,
  updatedComment: Comment
): Promise<Comment> => {
  try {
    console.log("Updating comment with payload:", updatedComment);
    console.log("Comment ID:", comment_id);

    const response = await fetch(`${API_URL}/updateComment/${comment_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...updatedComment,
        User: {
          id: updatedComment.user_id,
          email: "placeholder@example.com", // Replace with actual user email
          first_name: "PlaceholderFirstName", // Replace with actual first name
          last_name: "PlaceholderLastName", // Replace with actual last name
        },
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json().catch(() => null); // Handle non-JSON responses
      console.error(
        "Backend error response:",
        errorResponse || response.statusText
      );
      if (response.status === 500) {
        console.error("Internal Server Error:", errorResponse);
      }
      throw new Error(
        errorResponse?.message ||
          response.statusText ||
          "Failed to update comment."
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
};

export const fetchComment = async (
  userId: number,
  scriptureId: number
): Promise<Comment | null> => {
  try {
    const response = await fetch(
      `${API_URL}/comments/${userId}/${scriptureId}`
    );

    if (response.ok) {
      return await response.json();
    } else if (response.status === 404) {
      return null; // No comment found
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to fetch comment.");
    }
  } catch (error) {
    console.error("Error fetching comment:", error);
    throw error;
  }
};
