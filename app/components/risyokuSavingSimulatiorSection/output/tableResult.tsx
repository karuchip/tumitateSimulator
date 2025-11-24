import { RisyokuSavingSimulationOutput } from "@/src/type/RisyokuSavingSimulator/output"

type Props = {
  result: RisyokuSavingSimulationOutput
}

const TableResult = ({result}:Props) => {
  return(
    <table className="w-60 overflow-hidden mt-4 mx-auto mb-10 border-collapse rounded-t-md border-2 border-[#60A092]">
      <thead>
        <tr className="bg-[#A3C5BE] text-[#ffffff]">
          <th></th>
          <th>経過月</th>
          <th>貯金額</th>
        </tr>
      </thead>

      <tbody>
        {result?.resultSavingArray.map((item, index) => (
          <tr key={index} className={index%2 == 1 ? "bg" : ""}>

            <td className="py-2">
              <div className="ml-4">
                <span
                    className={`marker ${item >= 0 ? "marker-green" : "marker-red"}`}
                  >
                </span>
              </div>
            </td>

            <td className="flex justify-center py-2">
                {index+1}ヶ月目
            </td>

            <td className="py-2">
              <div className="tdRisyokuPosition">
                {item}万円
              </div>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableResult
