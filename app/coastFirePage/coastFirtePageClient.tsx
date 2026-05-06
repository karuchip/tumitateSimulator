"use client"
import { FadeIn } from "../components/animation/fadeIn";
import FireLogicExplanation from "../components/coastFireSection/fire-logicexplanation";
import HowToUseFireSection from "../components/coastFireSection/howtouse";
import CoastFireSimulation from "../components/coastFireSection/simulation";
import CoastFireDefinition from "../components/common/coast-fire-definition";
import Menseki from "../components/common/Menseki";
import ShareCoastFire from "../components/share/coast-fire/page";

export default function CoastFirePageClient() {

  return (
    <div className="co-headerBunSageru">

      <section>
        <CoastFireSimulation/>
        <FadeIn>
          <HowToUseFireSection/>
        </FadeIn>
        <FadeIn>
          <CoastFireDefinition/>
        </FadeIn>

        <FireLogicExplanation/>

        <div className="flex justify-center mb-10">
          <ShareCoastFire/>
        </div>



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
