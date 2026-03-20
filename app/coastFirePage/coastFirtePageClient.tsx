"use client"
import AboutCoastFire from "../components/coastFireSection/aboutCoastFire";
import CoastFireSimulation from "../components/coastFireSection/simulation";
import Menseki from "../components/common/Menseki";

export default function CoastFirePageClient() {

  return (
    <div className="co-headerBunSageru">

      <section>
        <CoastFireSimulation/>
        <AboutCoastFire/>
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
