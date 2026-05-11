import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        // 修正前のスペルミスがあったURL
        source: '/risyokuSavingSimulatiorPage',
        // 修正後の正しいURL
        destination: '/risyokuSavingSimulatorPage',
        // 恒久的な移転（301リダイレクト）としてGoogleに通知
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
