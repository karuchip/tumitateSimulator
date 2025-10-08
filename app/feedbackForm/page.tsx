"use client"

import { useState } from "react";

export default function FeedbackForm() {

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // 送信用URL
  const feedbackFormUrl = process.env.NEXT_PUBLIC_FEEDBACKFORM_URL;

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if(!message.trim()) {
      setError("内容を入力してください。");
      return;
    }
    if (message.length > 600) {
      setError("600文字以内で入力してください。")
      return;
    }

    setError("");

    const formData = new FormData();
    formData.append("message", message);

    if(!feedbackFormUrl) {
      console.error('FEEDBACKFORM_URL is not defined');
      return;
    }

    await fetch(feedbackFormUrl, {
      method: "POST",
      body: formData,
      headers: {Accept: "application/json"},
    });

    alert("送信が完了しました。ありがとうございます！")
    setMessage("")
  }

  return (

    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "350px",
        margin: "100px auto 0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        textAlign: "center",
      }}
    >
      <h3>ご意見・ご感想送信欄</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="ご意見・ご感想をお聞かせください"
        style={{
          width: "100%",
          height: "120px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          padding: "8px",
          resize: "none",
        }}
        rows={5}
        maxLength={600} // ← これで入力時の上限も設定可能
      />


      <div style={{
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center",
      }}>
        <div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <p
          style={{
            color: message.length > 600 ? "red" : "#000",
            textAlign: "right",
            fontSize: "13px",

          }}
        >
          {message.length}/600
        </p>
      </div>


      <button
        type="submit"
        className="co-"
        style={{
          background: "#60A092",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        送信
      </button>

      <p style={{ fontSize: "12px", color: "#777" }}>
        ※入力内容は保存・収集されません。送信内容は開発者のみに通知されます。
      </p>

    </form>
  );
}
