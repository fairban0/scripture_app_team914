import { LoginRequest, LoginResponse } from "../services/api";

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  try {
    console.log("Sending login request with:", credentials);

    const response = await fetch("https://localhost:5000/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });

    if (!response.ok) {
      const contentType = response.headers.get("Content-Type");
      let errorMessage = "Login failed.";

      if (contentType && contentType.includes("application/json")) {
        const errorResponse = await response.json();
        errorMessage = errorResponse.message || errorMessage;
      } else {
        const textResponse = await response.text();
        console.error("Server returned non-JSON response:", textResponse);
        errorMessage = textResponse || errorMessage;
      }

      throw new Error(errorMessage);
    }

    const data = await response.json();

    // Handle array responses
    if (Array.isArray(data)) {
      console.log("Received array:", data);
      return data[0]; // Assuming you want the first item
    }

    return data; // Return parsed JSON object
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login error:", error.message);
    } else {
      console.error("Unknown error occurred:", error);
    }
    throw new Error("Network error. Please try again.");
  }
}
