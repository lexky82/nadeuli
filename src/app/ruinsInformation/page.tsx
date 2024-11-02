"use client";

import Image from "next/image";
import * as styles from "./style.css";
import { ChangeEventHandler, useState } from "react";
import { themeVars } from "@/styles/globalTheme.css";

const RuinsInformation = () => {
  const [searchWord, setSearchWord] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <div className={styles.ruinsInformationContainer}>
      <div
        className={styles.searchInputContainer}
        style={searchWord ? { paddingBottom: 300, borderColor: themeVars.colors.primary } : {}}
      >
        <Image
          src={`${searchWord ? "/Search.svg" : "/nonFocus-Search.svg"}`}
          width={32}
          height={32}
          alt="유적지 검색"
        />
        <input
          type="text"
          name="ruinsSearch"
          value={searchWord}
          onChange={handleChange}
          id="ruinsSearch"
          placeholder="유적지를 입력해주세요."
          className={styles.searchInput}
        />
      </div>

      {searchWord && (
        <div style={{ position: "absolute", width: 578, top: 70 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>방어시설</span>
            <span>삼년산성</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RuinsInformation;
