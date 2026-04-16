import Link from "next/link";

const ShareCoastFire = () => {

  const text = `コーストFIREシミュレーターやってみたら意外な結果だった…！無料で試せます
  コーストFIREに必要な積立額はいくら⬇︎
  `;

  const url = "https://fire.hika-design.com/coastFirePage"
  const hashtags = "コーストFIRE,資産形成";

  const shareUrl =
  "https://twitter.com/intent/tweet?" +
  `text=${encodeURIComponent(text)}&` +
  `url=${encodeURIComponent(url)}&` +
  `hashtags=${hashtags}`;

  return(
    <Link
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-500"
    >
      このアプリをXでシェア
    </Link>
  )
}

export default ShareCoastFire
