"use client";

import React, { useState } from "react";
import NadeuliInfo from "./NadeuliInfo";

const Step2 = () => <div>기행문 작성</div>;
const Step3 = () => <div>대표 이미지 선택</div>;

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { label: "나들이 관련 정보 입력", component: <NadeuliInfo /> },
    { label: "기행문 작성", component: <Step2 /> },
    { label: "대표 이미지 선택", component: <Step3 /> },
  ];

  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "100px",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 71px)",
        backgroundColor: "#e3e3e3",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => handleStepChange(index + 1)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: currentStep === index + 1 ? "#00aaff" : "#fff",
              }}
            />
            <span>{step.label}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h3>{steps[currentStep - 1]?.label}</h3>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            background: "#f9f9f9",
            boxShadow: "0 4px 4px rgba(0,0,0,0.3)",
          }}
        >
          {steps[currentStep - 1]?.component}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
