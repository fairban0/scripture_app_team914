import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Settings.module.css"; // Import styles

const EditProfile: React.FC = () => {
  const navigate = useNavigate();

  // State for form fields
  const [firstName, setFirstName] = useState("Claire");
  const [lastName, setLastName] = useState("Smith");
  const [username, setUsername] = useState("csmith99");
  const [password, setPassword] = useState("");

  return (
    <main className="flex flex-col p-6 min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Profile</h1>

      {/* Wrapper Box */}
      <div className={styles.box}>
        <div className="flex flex-col gap-4">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.inputField}
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.inputField}
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.inputField}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-4">
          <button className={styles.saveButton} onClick={() => navigate(-1)}>
            Save Changes
          </button>
          <button className={styles.cancelButton} onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};

export default EditProfile;
