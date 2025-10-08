"use client"
import AboutCoastFire from "@/app/components/coastFireSection/aboutCoastFire"
import CoastFireSimulation from "../components/coastFireSection/simulation";

export default function CoastFirePage() {

  return (
    <div className="co-headerBunSageru">
      <AboutCoastFire/>
      <CoastFireSimulation/>
    </div>
  );
}
