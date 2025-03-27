import React, { useState, useEffect } from "react";
import { LoginResponse, ApiError } from "../services/api";
import { login } from "../types/login";
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [touched, setTouched] = useState({
    username: false,
    password: false,
  });

  // Validate username requirements
  const validateUsername = (username: string): boolean => {
    return username.length > 3;
  };

  // Validate password requirements
  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  useEffect(() => {
    const isUsernameValid =
      username.trim() !== "" && validateUsername(username);
    const isPasswordValid =
      password.trim() !== "" && validatePassword(password);

    setIsFormValid(isUsernameValid && isPasswordValid);

    if (touched.username) {
      if (username.trim() === "") {
        setUsernameError("Username is required");
      } else if (!validateUsername(username)) {
        setUsernameError("Username must be at least 4 characters long");
      } else {
        setUsernameError("");
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
  }, [username, password, touched]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ username: true, password: true });
    setLoginError("");

    if (isFormValid) {
      setIsLoading(true);
      try {
        // Pass the username and password (lowercase from state)
        const response: LoginResponse = await login({ username, password });
        localStorage.setItem("userId", response.userId.toString());
        localStorage.setItem("userName", response.userName);
        window.location.href = "/";
      } catch (error) {
        const apiError = error as ApiError;
        setLoginError(apiError.message || "Login failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBlur = (field: "username" | "password") => {
    setTouched({ ...touched, [field]: true });
  };

  return (
    <div className="login-container">
      <div className="welcome-message">
        <h1>
          Welcome,
          <br /> Glad to see you!
        </h1>
      </div>

      <div className="login-component">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="username" className="input-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              className={`input ${usernameError && touched.username ? "input-error" : ""}`}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => handleBlur("username")}
              aria-invalid={!!usernameError}
              required
            />
            {usernameError && touched.username && (
              <div className="error-message" role="alert">
                {usernameError}
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
              required
            />
            {passwordError && touched.password && (
              <div className="error-message" role="alert">
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
