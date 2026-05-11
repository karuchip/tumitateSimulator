import FeedbackFormClient from "./feedBackFormClient";

export const metadata = {
  title: "コーストFIREシミュレーター | お問合せフォーム",
  description:
    "本シミュレーターに関するご感想やご意見等はこちらにお願いいたします。",
  alternates: {
    canonical: "https://fire.hika-design.com/feedbackForm"
  },
};

export default function FeedbackForm() {
  return(
    <FeedbackFormClient/>
  )
}
