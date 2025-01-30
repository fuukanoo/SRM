// StepNavigator.jsx

import React from "react";
import "./StepNavigator.css";

function StepNavigator({ steps, currentStep, setCurrentStep, onAddStep }) {
  if (!steps) {
    return null; // stepsが渡されていない場合は何も表示しない
  }

  return (
    <div className="step-navigator">
      {steps.map((step, index) => (
        <button
          key={index}
          className={`step-button ${index === currentStep ? "active" : ""}`}
          onClick={() => setCurrentStep(index)}
        >
          {step}
        </button>
      ))}

      {/* プラスボタン */}
      <button className="add-button" onClick={onAddStep}>
        ＋
      </button>
    </div>
  );
}

export default StepNavigator;
