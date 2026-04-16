"use client"
import { FadeIn } from "../components/animation/fadeIn";
import AboutCoastFire from "../components/coastFireSection/aboutCoastFire";
import HowToUse from "../components/coastFireSection/howtouse";
import CoastFireSimulation from "../components/coastFireSection/simulation";
import Menseki from "../components/common/Menseki";
import ShareCoastFire from "../components/share/coast-fire/page";

export default function CoastFirePageClient() {

  return (
    <div className="co-headerBunSageru">

      <section>
        <CoastFireSimulation/>
        <FadeIn>
          <div className="flex justify-center mb-10">
            <ShareCoastFire/>
          </div>
        </FadeIn>
        <HowToUse/>

      </section>

      <section className="mensekiContainer" id="menseki">
        <div className="co-screenPosition">
          {/* 免責事項 */}
          <Menseki/>
        </div>
      </section>

    </div>
  );
}
