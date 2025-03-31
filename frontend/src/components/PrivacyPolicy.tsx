import React from "react";
import Header from "./Header";
import NavigationHeader from "./NavigationHeader";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="px-6 py-6 sm:px-8 lg:px-10 max-w-2xl mx-auto text-gray-800 pb-24">
      <NavigationHeader className="mt-4" />
      <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy outlines the types
        of information we collect, how we use it, and the steps we take to
        protect your data.
      </p>

      <h2 className="text-xl font-semibold mt-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        and other details you provide when using our services.
      </p>

      <h2 className="text-xl font-semibold mt-4">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        We use your information to provide, improve, and personalize our
        services, as well as to communicate with you.
      </p>

      <h2 className="text-xl font-semibold mt-4">Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your
        information from unauthorized access.
      </p>

      <h2 className="text-xl font-semibold mt-4">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Please check back
        periodically for updates.
      </p>
    </main>
  );
};

export default PrivacyPolicy;
