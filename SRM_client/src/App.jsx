// App.jsx

import React, { useState, useEffect } from "react";
import StepNavigator from "./components/StepNavigator";
import ProfileScreen from "./components/ProfileScreen";
import EntryAdjustmentScreen from "./components/EntryAdjustmentScreen";
import CasualScreen from "./components/CasualScreen";
import FirstInterviewScreen from "./components/FirstInterviewScreen";
import SecondInterviewScreen from "./components/SecondInterviewScreen";
import OtherScreens from "./components/OtherScreens";
import FinalInterviewScreen from "./components/FinalInterviewScreen";

function App() {
  const [profileData, setProfileData] = useState({
    name: "",
    furigana: "",
    photo: null,
    education: "",
    career: "",
    resume: null,
    careerSheet: null,
  });

  const [casualData, setCasualData] = useState({
    result: "",
    honesty: "",
    teamLove: "",
    charm: "",
    humility: "",
    notes: "",
  });

  const [interviewData, setInterviewData] = useState({
    firstInterview: {
      technicalSkills: "",
      problemSolving: "",
      logicalThinking: "",
      leadership: "",
      careerVision: "",
    },
    secondInterview: {
      technicalSkills: "",
      problemSolving: "",
      logicalThinking: "",
      leadership: "",
      careerVision: "",
    },
  });

  const [currentStep, setCurrentStep] = useState(0);

  const [stepLabels, setStepLabels] = useState([
    "エントリー",
    "調整中",
    "カジュアル",
    "調整中",
    "1次面接",
    "調整中",
    "2次面接",
    "調整中",
    "最終",
    "調整中",
  ]);

  const [steps, setSteps] = useState([
    { id: 1, type: 'profile' },
    { id: 2, type: 'entryAdjustment' },
    { id: 3, type: 'casual' },
    { id: 4, type: 'other' },
    { id: 5, type: 'firstInterview' },
    { id: 6, type: 'other' },
    { id: 7, type: 'secondInterview' },
    { id: 8, type: 'other' },
    { id: 9, type: 'finalInterview' },
    { id: 10, type: 'other' },
  ]);

  const handleAddStep = () => {
    const newStepName = `フォロー面談 ${steps.length + 1}`;
    setStepLabels((prev) => [...prev, newStepName]);
    setSteps((prev) => [...prev, { id: steps.length + 1, type: 'followUp' }]);
  };

  const renderStep = () => {
    const step = steps[currentStep];
    switch (step.type) {
      case 'profile':
        return (
          <ProfileScreen 
            profileData={profileData} 
            setProfileData={setProfileData}
            steps={stepLabels}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            onAddStep={handleAddStep}
          />
        );
      case 'entryAdjustment':
        return <EntryAdjustmentScreen profileData={profileData} setProfileData={setProfileData} />;
      case 'casual':
        return (
          <CasualScreen
            profileData={profileData}
            casualData={casualData}
            setCasualData={setCasualData}
          />
        );
      case 'firstInterview':
        return (
          <FirstInterviewScreen
            interviewData={interviewData}
            setInterviewData={setInterviewData}
          />
        );
      case 'secondInterview':
        return (
          <SecondInterviewScreen
            interviewData={interviewData}
            setInterviewData={setInterviewData}
          />
        );
      case 'finalInterview':
        return (
          <FinalInterviewScreen
            interviewData={interviewData}
            setInterviewData={setInterviewData}
          />
        );
      case 'other':
      case 'followUp':
        return <OtherScreens profileData={profileData} casualData={casualData} />;
      default:
        return <div>ステップが見つかりません。</div>;
    }
  };

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const fixedWidth = 1280;
      const fixedHeight = 720;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let scaleX = windowWidth / fixedWidth;
      let scaleY = windowHeight / fixedHeight;

      let newScale = Math.min(scaleX, scaleY);

      // スケールの最小値と最大値を設定
      newScale = Math.max(newScale, 0.5); // 最小50%
      newScale = Math.min(newScale, 1.5); // 最大150%

      setScale(newScale);
    };

    // 初回レンダリング時にスケールを設定
    updateScale();

    // リサイズ時にスケールを更新
    window.addEventListener("resize", updateScale);

    // クリーンアップ
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="app-container">
      <div
        className="scale-wrapper"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <div className="container">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}

export default App;
