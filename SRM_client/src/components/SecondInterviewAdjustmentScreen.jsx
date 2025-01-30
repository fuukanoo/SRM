// SecondInterviewAdjustmentScreen.jsx

import React, { useEffect, useState } from "react";

function SecondInterviewAdjustmentScreen({ profileData, casualData, firstInterviewData, secondInterviewData }) {
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState(null);
  const [resumePreviewUrl, setResumePreviewUrl] = useState(null);
  const [careerSheetPreviewUrl, setCareerSheetPreviewUrl] = useState(null);

  useEffect(() => {
    if (profileData.photo) {
      const url = URL.createObjectURL(profileData.photo);
      setPhotoPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [profileData.photo]);

  useEffect(() => {
    if (profileData.resume) {
      const url = URL.createObjectURL(profileData.resume);
      setResumePreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [profileData.resume]);

  useEffect(() => {
    if (profileData.careerSheet) {
      const url = URL.createObjectURL(profileData.careerSheet);
      setCareerSheetPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [profileData.careerSheet]);

  return (
    <div className="container">
      {/* 名前と写真 */}
      <div className="flex-row">
        <div
          className="profile-photo"
          style={{
            backgroundImage: photoPreviewUrl ? `url(${photoPreviewUrl})` : "none",
          }}
        >
          {!photoPreviewUrl && <p>写真未挿入</p>}
        </div>
        <div>
          <h3>{profileData.furigana || "フリガナ未入力"}</h3>
          <h2>{profileData.name || "名前未入力"}</h2>
        </div>
      </div>

      {/* エントリー画面の情報 */}
      <div className="info-section">
        <p>
          <strong>最終学歴:</strong> {profileData.education || "未入力"}
        </p>
        <p>
          <strong>職務経歴:</strong> {profileData.career || "未入力"}
        </p>
        <p>
          <strong>履歴書:</strong>{" "}
          {profileData.resume ? (
            <span
              onClick={() => {
                window.open(resumePreviewUrl, "_blank");
              }}
              style={{ cursor: "pointer", color: "#007bff" }}
            >
              📎
            </span>
          ) : (
            "未アップロード"
          )}
        </p>
        <p>
          <strong>職務経歴書:</strong>{" "}
          {profileData.careerSheet ? (
            <span
              onClick={() => {
                window.open(careerSheetPreviewUrl, "_blank");
              }}
              style={{ cursor: "pointer", color: "#007bff" }}
            >
              📎
            </span>
          ) : (
            "未アップロード"
          )}
        </p>
      </div>

      {/* カジュアル画面の情報 */}
      <div className="info-section">
        <p>
          <strong>判定結果:</strong> {casualData.result || "未入力"}
        </p>
        <p>
          <strong>誠実:</strong> {casualData.honesty || "未入力"}
        </p>
        <p>
          <strong>チーム愛:</strong> {casualData.teamLove || "未入力"}
        </p>
        <p>
          <strong>愛嬌:</strong> {casualData.charm || "未入力"}
        </p>
        <p>
          <strong>謙虚さと責任感:</strong> {casualData.humility || "未入力"}
        </p>
        <p>
          <strong>備考記入欄:</strong> {casualData.notes || "未入力"}
        </p>
      </div>

      {/* 一次面接の情報 */}
      <div className="info-section">
        <h3>一次面接評価</h3>
        <p>
          <strong>専門知識・技術力:</strong> {firstInterviewData.technicalSkills || "未入力"}
        </p>
        <p>
          <strong>問題解決能力:</strong> {firstInterviewData.problemSolving || "未入力"}
        </p>
        <p>
          <strong>論理的思考力:</strong> {firstInterviewData.logicalThinking || "未入力"}
        </p>
        <p>
          <strong>リーダーシップ・主体性:</strong> {firstInterviewData.leadership || "未入力"}
        </p>
        <p>
          <strong>キャリアビジョン:</strong> {firstInterviewData.careerVision || "未入力"}
        </p>
      </div>

      {/* 二次面接の情報 */}
      <div className="info-section">
        <h3>二次面接評価</h3>
        <p>
          <strong>専門知識・技術力:</strong> {secondInterviewData.technicalSkills || "未入力"}
        </p>
        <p>
          <strong>問題解決能力:</strong> {secondInterviewData.problemSolving || "未入力"}
        </p>
        <p>
          <strong>論理的思考力:</strong> {secondInterviewData.logicalThinking || "未入力"}
        </p>
        <p>
          <strong>リーダーシップ・主体性:</strong> {secondInterviewData.leadership || "未入力"}
        </p>
        <p>
          <strong>キャリアビジョン:</strong> {secondInterviewData.careerVision || "未入力"}
        </p>
      </div>
    </div>
  );
}

export default SecondInterviewAdjustmentScreen;
