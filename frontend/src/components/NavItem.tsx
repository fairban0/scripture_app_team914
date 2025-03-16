import React from "react";
import styles from "./InputDesign.module.css";

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false }) => {
  return (
    <div className={isActive ? styles.div29 : styles.div31}>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <div className={isActive ? styles.div30 : styles.div32}>{label}</div>
    </div>
  );
};

export default NavItem;
