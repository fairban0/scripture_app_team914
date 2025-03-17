/**
 * API service for communicating with ASP.NET backend
 */
import { useState, useEffect } from "react";

// Base URL for the ASP.NET API
const API_BASE_URL = "https://api.example.com/api"; // Replace with your actual ASP.NET API URL

// Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  expiresIn: number;
  userId: string;
  userName: string;
}

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

// API functions
export const login = async (
  credentials: LoginRequest,
): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw {
        message: errorData.message || "Login failed",
        statusCode: response.status,
        errors: errorData.errors,
      } as ApiError;
    }

    const data = await response.json();

    // Store the token in localStorage
    localStorage.setItem("authToken", data.token);
    localStorage.setItem(
      "tokenExpiry",
      (Date.now() + data.expiresIn * 1000).toString(),
    );

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logout = (): void => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("tokenExpiry");
};

// Hook for authentication state
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<{ userId: string; userName: string } | null>(
    null,
  );

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("authToken");
      const expiryString = localStorage.getItem("tokenExpiry");

      if (token && expiryString) {
        const expiry = parseInt(expiryString, 10);

        if (expiry > Date.now()) {
          // Token is valid
          setIsAuthenticated(true);

          // Get user info from token (simplified - in a real app, you might decode the JWT)
          const userId = localStorage.getItem("userId");
          const userName = localStorage.getItem("userName");

          if (userId && userName) {
            setUser({ userId, userName });
          }
        } else {
          // Token expired
          logout();
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }

      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  return { isAuthenticated, isLoading, user, logout };
};

// Function to create authenticated requests
export const createAuthenticatedRequest = async (
  url: string,
  method: string = "GET",
  body?: any,
) => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    throw new Error("No authentication token found");
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${url}`, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw {
      message:
        errorData.message || `Request failed with status ${response.status}`,
      statusCode: response.status,
      errors: errorData.errors,
    } as ApiError;
  }

  return response.json();
};
