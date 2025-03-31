import styles from "./Settings.module.css";
import React, { ReactNode } from "react";

interface SettingsSectionProps {
  title: string;
  children: ReactNode;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  title,
  children,
}) => {
  return (
    <section className="relative">
      <h2 className="mb-1 text-xs text-black">{title}</h2>
      {children}
    </section>
  );
};

export default SettingsSection;
