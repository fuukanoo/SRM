// ProfileScreen.jsx

import React, { useRef } from "react";
import "./ProfileScreen.css";
import StepNavigator from "./StepNavigator"; // ステップナビゲーションをインポート

function ProfileScreen({ profileData, setProfileData, steps, currentStep, setCurrentStep, onAddStep }) {
  const fileInputRef = useRef(null); // ファイル入力フィールドの参照を作成

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const photoPreviewUrl = profileData.photo
    ? URL.createObjectURL(profileData.photo)
    : null;

  return (
    <div className="profile-container">
      {/* ヘッダーセクション */}
      <div className="header-section">
        <div className="entry-label">エントリー</div>

        {/* 写真アップロードセクション */}
        <div className="photo-upload">
          <div
            className="photo-preview"
            style={{
              backgroundImage: photoPreviewUrl ? `url(${photoPreviewUrl})` : "none",
            }}
            onClick={() => fileInputRef.current.click()} // 四角形をクリックするとファイル選択
          >
            {!photoPreviewUrl && <p>写真未挿入</p>}
          </div>
          {/* 隠されたファイル入力フィールド */}
          <input
            type="file"
            name="photo"
            accept="image/*"
            ref={fileInputRef} // 隠されたファイル入力を参照
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </div>

        {/* ステップナビゲーション */}
        <div className="step-navigator-container">
          <StepNavigator 
            steps={steps} 
            currentStep={currentStep} 
            setCurrentStep={setCurrentStep} 
            onAddStep={onAddStep} 
          />
        </div>
      </div>

      {/* フォームセクション */}
      <div className="form-section">
        {/* 左列 */}
        <div className="form-column">
          {/* フリガナ */}
          <div className="form-group">
            <label htmlFor="furigana">フリガナ:</label>
            <input
              type="text"
              id="furigana"
              name="furigana"
              value={profileData.furigana || ""}
              onChange={handleInputChange}
              placeholder="未入力"
            />
          </div>

          {/* 名前 */}
          <div className="form-group">
            <label htmlFor="name">名前:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name || ""}
              onChange={handleInputChange}
              placeholder="未入力"
            />
          </div>

          {/* 最終学歴 */}
          <div className="form-group">
            <label htmlFor="education">最終学歴:</label>
            <input
              type="text"
              id="education"
              name="education"
              value={profileData.education || ""}
              onChange={handleInputChange}
              placeholder="未入力"
            />
          </div>
        </div>

        {/* 右列 */}
        <div className="form-column">
          {/* 職務経歴 */}
          <div className="form-group">
            <label htmlFor="career">職務経歴:</label>
            <input
              type="text"
              id="career"
              name="career"
              value={profileData.career || ""}
              onChange={handleInputChange}
              placeholder="未入力"
            />
          </div>

          {/* 履歴書のアップロード */}
          <div className="form-group">
            <label htmlFor="resume">履歴書:</label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileUpload}
            />
          </div>

          {/* 職務経歴書のアップロード */}
          <div className="form-group">
            <label htmlFor="careerSheet">職務経歴書:</label>
            <input
              type="file"
              id="careerSheet"
              name="careerSheet"
              onChange={handleFileUpload}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
