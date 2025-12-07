"use client"

import useCoastFireCalculator from "@/src/function/coastFireAgeOfAchievement/hooks/useCoastFireCalculator";

const CoastFireAgeOfAchievement = () => {

  const inputs = {
    age: 40,
    currentAsset: 100,
    monthlyPMT: 10, //積立額
    rate: 0.05,
    requiredRetirementMoney: 2000,
    retiredAge: 65,
  }

  const {
    trajectory,
    coastFireAge,
    achievedResult
  } = useCoastFireCalculator(inputs);


  return(
    <>
      <p>あああ</p>
      <div>
        {trajectory.map((item, index) => (
          <pre key={index}>{JSON.stringify(item)}</pre>
        ))}
      </div>
      <p>{coastFireAge}</p>
      <div>
        {achievedResult?.map((item, index) => (
          <pre key={index}>{JSON.stringify(item)}</pre>
        ))}
      </div>
    </>
  )
}

export default CoastFireAgeOfAchievement;
