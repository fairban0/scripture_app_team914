import React, { useState, useEffect } from "react";
import { login, LoginResponse, ApiError } from "../services/api";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate password requirements
  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  // Check form validity whenever inputs change
  useEffect(() => {
    const isEmailValid = email.trim() !== "" && validateEmail(email);
    const isPasswordValid =
      password.trim() !== "" && validatePassword(password);

    setIsFormValid(isEmailValid && isPasswordValid);

    // Set error messages only if the field has been touched
    if (touched.email) {
      if (email.trim() === "") {
        setEmailError("Email is required");
      } else if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }

    if (touched.password) {
      if (password.trim() === "") {
        setPasswordError("Password is required");
      } else if (!validatePassword(password)) {
        setPasswordError("Password must be at least 6 characters");
      } else {
        setPasswordError("");
      }
    }
  }, [email, password, touched]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched to show validation errors
    setTouched({
      email: true,
      password: true,
    });

    // Clear previous login errors
    setLoginError("");

    // Only proceed if form is valid
    if (isFormValid) {
      setIsLoading(true);

      try {
        // Call ASP.NET backend API
        const response = await login({ email, password });

        // Store user info for the auth hook
        localStorage.setItem("userId", response.userId);
        localStorage.setItem("userName", response.userName);

        // Redirect to dashboard or home page after successful login
        window.location.href = "/dashboard"; // Or use React Router navigation
      } catch (error) {
        // Handle API errors
        const apiError = error as ApiError;

        if (apiError.errors) {
          // Handle validation errors from the backend
          if (apiError.errors.Email) {
            setEmailError(apiError.errors.Email[0]);
          }
          if (apiError.errors.Password) {
            setPasswordError(apiError.errors.Password[0]);
          }
        } else {
          // General error message
          setLoginError(apiError.message || "Login failed. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBlur = (field: "email" | "password") => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  return (
    <div className="login-container">
      <div className="welcome-message">
        <h1>
          Welcome,
          <br />
          Glad to see you!
        </h1>
      </div>

      <div className="login-component">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`input ${emailError && touched.email ? "input-error" : ""}`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur("email")}
              aria-invalid={!!emailError}
              aria-describedby={emailError ? "email-error" : undefined}
              required
            />
            {emailError && touched.email && (
              <div className="error-message" id="email-error" role="alert">
                {emailError}
              </div>
            )}
          </div>

          <div className="input-field">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`input ${passwordError && touched.password ? "input-error" : ""}`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur("password")}
              aria-invalid={!!passwordError}
              aria-describedby={passwordError ? "password-error" : undefined}
              required
            />
            {passwordError && touched.password && (
              <div className="error-message" id="password-error" role="alert">
                {passwordError}
              </div>
            )}
          </div>

          {loginError && (
            <div className="login-error" role="alert">
              {loginError}
            </div>
          )}

          <div className="button-group">
            <button
              type="submit"
              className="sign-in-button"
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </div>

          <div className="forgot-password">
            <a href="#reset-password">Forgot password?</a>
          </div>
        </form>

        <div className="signup-section">
          <p className="signup-text">Don't have an account?</p>
          <a href="#signup" className="signup-link">
            Sign up here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
