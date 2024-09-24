"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export const ScrollComponent = () => {
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      return setScrollY(true);
    }

    setScrollY(false);
  };

  const scrollToTarget = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        fontSize: 24,
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid #0033A0",
        borderBottom: "1px solid #0033A0",
        padding: "35px 250px",
        margin: "40px 120px",
      }}
    >
      <span
        onClick={() => scrollToTarget("images")}
        style={{
          color: "#0033A0",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        사진보기
      </span>
      <span
        onClick={() => scrollToTarget("detailInfo")}
        style={{
          color: "#0033A0",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        상세정보
      </span>
      <span
        onClick={() => scrollToTarget("essay")}
        style={{
          color: "#0033A0",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        기행문
      </span>
      <span
        onClick={() => scrollToTarget("location")}
        style={{
          color: "#0033A0",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        위치
      </span>
      <span
        onClick={() => scrollToTarget(" references")}
        style={{
          color: "#0033A0",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        참고자료
      </span>
      <span
        onClick={() => scrollToTarget("review")}
        style={{
          color: "#0033A0",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        간략후기
      </span>

      {scrollY && (
        <div
          onClick={() => scrollToTarget("top")}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            cursor: "pointer",
            border: "1px solid black",
            padding: 5,
            boxShadow: "0 3px 3px rgba(0,0,0,0.3)",
          }}
        >
          <Image src="/Arrow upward.svg" width={32} height={32} alt="맨 위로" />
        </div>
      )}
    </div>
  );
};
