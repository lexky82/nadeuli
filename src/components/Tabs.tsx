"use client";

import React, { useEffect, useRef, useState } from "react";
import * as styles from "@/styles/components/Tabs.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

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
  const [barWidth, setBarWidth] = useState(0);
  const [barLeft, setBarLeft] = useState(0);
  const tabRefs = useRef<HTMLDivElement[] | null[]>([]);

  const handleTabClick = (index: number) => {
    setActiveKey(index);

    if (onChange) {
      onChange(index);
    }
  };

  useEffect(() => {
    if (tabRefs.current) {
      const currentTab = tabRefs.current[activeKey];

      if (currentTab) {
        setBarWidth(currentTab.clientWidth);
        setBarLeft(currentTab.offsetLeft);
      }
    }
  }, [activeKey]);

  return (
    <div>
      <div className={styles.tabLabelWrapper}>
        {items.map((item, index) => {
          return (
            <div
              key={item.key}
              onClick={() => handleTabClick(item.key)}
              className={styles.tabLabel}
              style={assignInlineVars({
                [styles.activeColor]: activeKey === index ? "#0033A0" : "#c1c1c1",
              })}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
            >
              {item.label}
            </div>
          );
        })}

        <span
          className={styles.tabsIndicator}
          style={{ width: `${barWidth}px`, left: `${barLeft}px` }}
        />
      </div>

      {items.filter((item) => item.key === activeKey)[0]?.children}
    </div>
  );
};

export default Tabs;
