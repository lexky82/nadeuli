"use client";

import React, { useState } from "react";
import * as styles from "@/styles/components/Tabs.css";

interface TabItem {
  key: number;
  label: React.ReactNode;
  children: React.ReactNode;
}

interface TabsProps {
  defaultTabIndex?: number;
  items: TabItem[];
  onChange?: (index: number) => void;
}

const Tabs = ({ defaultTabIndex = 0, items, onChange }: TabsProps) => {
  const [activeKey, setActiveKey] = useState(defaultTabIndex);

  const handleTabClick = (index: number) => {
    setActiveKey(index);

    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div>
      <div className={styles.tabLabelWrapper}>
        {items.map((item) => {
          return (
            <div
              key={item.key}
              onClick={() => handleTabClick(item.key)}
              className={styles.tabLabel}
            >
              {item.label}
            </div>
          );
        })}
      </div>

      {items.filter((item) => item.key === activeKey)[0]?.children}
    </div>
  );
};

export default Tabs;
