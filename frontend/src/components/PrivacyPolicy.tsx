import React from "react";
import Header from "./Header";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="p-6 max-w-2xl mx-auto text-gray-800">
        <Header title="Privacy Policy" />
      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy outlines the types of
        information we collect, how we use it, and the steps we take to protect
        your data.
      </p>

      <h2 className="text-xl font-semibold mt-4">Information We Collect</h2>
      <p className="mb-4">We may collect personal information such as your name, email address, and other details you provide when using our services.</p>

      <h2 className="text-xl font-semibold mt-4">How We Use Your Information</h2>
      <p className="mb-4">We use your information to provide, improve, and personalize our services, as well as to communicate with you.</p>

      <h2 className="text-xl font-semibold mt-4">Data Security</h2>
      <p className="mb-4">We implement industry-standard security measures to protect your information from unauthorized access.</p>

      <h2 className="text-xl font-semibold mt-4">Changes to This Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. Please check back periodically for updates.</p>
    </main>
  );
};

export default PrivacyPolicy;
