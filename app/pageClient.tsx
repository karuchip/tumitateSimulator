"use client"

import Link from "next/link"
import Image from "next/image";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FadeIn } from "./components/animation/fadeIn";
import MensekiPage from "./mensekiPage/page";

export default function HomeClient() {
  return (

    <>
      <div className="pt-30 lg:pt-36">

        <FadeIn>
          <div className="text-center">
            <h1 className="text-[26px] lg:text-[42px] font-bold text-[#808080]">コーストFIREシミュレーター</h1>
            <p className="text-[14px] lg:!text-[24px] text-[#808080]">毎月いくらで達成できる？</p>
          </div>
          <p className="text-[14px] lg:!text-[16px] text-[#60A092] w-[280px] lg:w-fit mx-auto mt-6">コーストFIREとは、若いうちに資産形成を行い、その後は運用のみで老後資金を増やす手法です。</p>
        </FadeIn>

        {/* コーストFIREシュミレーター(2個) */}
        <div className="my-8 lg:my-14">

          <FadeIn>
            {/* 積み立て金額シュミレーター */}
            <div className="relative group lg:w-[800px] w-[280px] border border-[#C3C3C3] py-4 overflow-hidden shadow-lg mx-auto lg:ml-20">
              {/* ホバー時のレイヤー */}
              <div className="absolute inset-0 bg-[#000000]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
              {/* リンク */}
              <Link href="/coastFirePage">
                <div className="flex gap-4 justify-center px-4 lg-px:0">
                  {/* 画像(フルスクリーンのみ表示) */}
                  <div className="hidden lg:block">
                    <Image src="/home/homeImage1.png" height={400} width={300} alt="積立金額シュミレーター"/>
                  </div>

                  {/* テキスト */}
                  <div className="content-center lg:w-[450px] lg:px-4">
                    {/* タイトル */}
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-[#60A092] w-[10px] h-[60px] lg:h-[80px]">
                        <span></span>
                      </div>
                      <h2 className="text-[22px] lg:text-[32px] font-bold text-[#60A092] text-base/8 lg:text-base/12">積立金額<br/>シュミレーター</h2>
                    </div>
                    <p className="text-[#808080] text-[16px] lg:!text-[18px]">何歳で「積立卒業(=コーストFIRE)」したい？<br/>そのために<span className="font-bold">毎月いくら必要か</span>を、かんたんに逆算できます。</p>

                    {/* 区切り棒 */}
                    <div className="w-auto h-[1px] bg-[#60A193] my-3 lg:my-4">
                      <span></span>
                    </div>

                    {/* Result 得られる結果 */}
                    <div className="flex justify-between text-[#60A193] lg:px-6">
                      <p className="!text-[20px] lg:!text-[26px] content-center">Result</p>
                      <div className="w-fit">
                        <ul className="list-disc text-base/7 lg:text-base/8 !text-[16px] lg:!text-[20px]">
                          <li>必要積立額</li>
                          <li>資産推移見込み</li>
                          <li>老後の取り崩し可能額</li>
                        </ul>
                      </div>
                    </div>

                    {/* 区切り棒 */}
                    <div className="w-auto h-[1px] bg-[#60A193] my-3 lg:my-4">
                      <span></span>
                    </div>

                  {/* ホバー時の表示「使ってみる」 */}
                  <div className="absolute right-4 lg:right-12 bottom-4 lg:bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <p className="flex items-center justify-center !text-[26px] lg:!text-[32px] text-[#ffffff] font-bold">
                      <span>使ってみる</span>
                      <ArrowForwardIcon sx={{ fontSize: { xs: "60px", lg: "60px" } }} />
                    </p>
                  </div>
                  </div>
                </div>
              </Link>
            </div>
          </FadeIn>


          <FadeIn>
            {/* 達成年齢シュミレーター */}
            <div className="relative group lg:w-[800px] w-[280px] border border-[#C3C3C3] py-4 overflow-hidden shadow-lg mt-10 lg:mt-15  mx-auto lg:mr-20">
              {/* ホバー時のレイヤー */}
              <div className="absolute inset-0 bg-[#000000]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
              {/* リンク */}
              <Link href="/coast-fire-age">
                <div className="flex gap-4 justify-center px-4 lg-px:0">

                  {/* テキスト */}
                  <div className="content-center lg:w-[450px] lg:px-4">
                    {/* タイトル */}
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-[#C36782] w-[10px] h-[60px] lg:h-[80px]">
                        <span></span>
                      </div>
                      <h2 className="text-[22px] lg:text-[32px] font-bold text-[#C36782] text-base/8 lg:text-base/12">達成年齢<br/>シュミレーター</h2>
                    </div>
                    <p className="text-[#808080] text-[16px] lg:!text-[18px]">今の積立額だと<span className="font-bold">何歳でコーストFIRE達成できる？</span>を簡単にシミュレートできます。</p>

                    {/* 区切り棒 */}
                    <div className="w-auto h-[1px] bg-[#DA93A7] my-3 lg:my-4">
                      <span></span>
                    </div>

                    {/* Result 得られる結果 */}
                    <div className="flex justify-between text-[#DA93A7] lg:px-6">
                      <p className="!text-[20px] lg:!text-[26px] content-center">Result</p>
                      <div className="w-fit">
                        <ul className="list-disc text-base/7 lg:text-base/8 !text-[16px] lg:!text-[20px]">
                          <li>達成年齢予測</li>
                          <li>老後の資産額推定</li>
                          <li>資産推移見込み</li>
                        </ul>
                      </div>
                    </div>

                    {/* 区切り棒 */}
                    <div className="w-auto h-[1px] bg-[#DA93A7] my-3 lg:my-4">
                      <span></span>
                    </div>

                    {/* ホバー時の表示「使ってみる」 */}
                    <div className="absolute right-4 lg:right-12 bottom-4 lg:bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                      <p className="flex items-center justify-center !text-[26px] lg:!text-[32px] text-[#ffffff] font-bold">
                        <span>使ってみる</span>
                        <ArrowForwardIcon sx={{ fontSize: { xs: "60px", lg: "60px" } }} />
                      </p>
                    </div>
                  </div>

                  {/* 画像(フルスクリーンのみ表示) */}
                  <div className="hidden lg:block">
                    <Image src="/home/homeImage2.png" height={400} width={300} alt="達成年齢シュミレーター"/>
                  </div>

                </div>
              </Link>
            </div>
          </FadeIn>
        </div>



        {/* 資産推移シュミレーター */}
        <div className="mt-20 lg:mt-30 bg-[#FCFFE1] pb-20">

          <FadeIn>
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-[26px] lg:text-[32px] font-bold text-[#808080] pt-15 lg:pt-20">資産推移シミュレーター</h2>
            </div>
          </FadeIn>

          <FadeIn>
            {/* 離職期間の貯金推移シュミレーター */}
            <div className="relative group lg:w-[800px] w-[280px] border border-[#C3C3C3] py-4 overflow-hidden shadow-lg bg-[#ffffff]  mx-auto">
              {/* ホバー時のレイヤー */}
              <div className="absolute inset-0 bg-[#000000]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
              {/* リンク */}
              <Link href="/risyokuSavingSimulatiorPage">
                <div className="flex gap-4 justify-center px-4 lg-px:0">
                  {/* 画像(フルスクリーンのみ表示) */}
                  <div className="hidden lg:block">
                    <Image src="/home/homeImage3.png" height={400} width={300} alt="資産推移シュミレーター"/>
                  </div>

                  {/* テキスト */}
                  <div className="content-center lg:w-[450px] lg:px-4">
                    {/* タイトル */}
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-[#DF821E] w-[10px] h-[60px] lg:h-[80px]">
                        <span></span>
                      </div>
                      <h2 className="text-[22px] lg:text-[32px] font-bold text-[#DF821E] text-base/8 lg:text-base/12">離職期間の貯金推移<br/>シュミレーター</h2>
                    </div>
                    <p className="text-[#808080] text-[16px] lg:!text-[18px]">今の資産・支出・収入から<span className="font-bold">「あと何ヶ月貯金が持つ？」</span>をシュミレートします。<br/> FIRE前後やキャリアブレイク時の資産計算に最適のシュミレーターです。</p>

                    {/* 区切り棒 */}
                    <div className="w-auto h-[1px] bg-[#EB9D48] my-3 lg:my-4">
                      <span></span>
                    </div>

                    {/* Result 得られる結果 */}
                    <div className="flex justify-between text-[#EB9D48] lg:px-6">
                      <p className="!text-[20px] lg:!text-[26px] content-center">Result</p>
                      <div className="w-fit">
                        <ul className="list-disc text-base/7 lg:text-base/8 !text-[16px] lg:!text-[20px]">
                          <li>最終貯金残高</li>
                          <li>資産推移見込み</li>
                        </ul>
                      </div>
                    </div>

                    {/* 区切り棒 */}
                    <div className="w-auto h-[1px] bg-[#EB9D48] my-3 lg:my-4">
                      <span></span>
                    </div>

                  {/* ホバー時の表示「使ってみる」 */}
                  <div className="absolute right-4 lg:right-12 bottom-4 lg:bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <p className="flex items-center justify-center !text-[26px] lg:!text-[32px] text-[#ffffff] font-bold">
                      <span>使ってみる</span>
                      <ArrowForwardIcon sx={{ fontSize: { xs: "60px", lg: "60px" } }} />
                    </p>
                  </div>
                  </div>
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>

        <MensekiPage/>
      </div>
    </>
  );
}
