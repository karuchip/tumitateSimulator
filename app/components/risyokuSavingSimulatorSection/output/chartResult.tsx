

import { RisyokuSavingSimulationOutput } from '@/src/type/RisyokuSavingSimulator/output';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type Props = {
  result: RisyokuSavingSimulationOutput
}


const ChartResult = ({result}: Props) => {

  const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
    },
    // title: {
    //   display: true,
    //   text: '貯金額の推移',
    // },
  },
  scales: {
    x: {
      title: {display: true, text: "経過月 (ヶ月目)"},
    },
    y : {
      title: {display: true, text: "貯金額 (万円)"},
    }
  }
};

  const labels = Array.from({length: result.resultSavingArray.length}, (_, i) => i + 1);

  const data = {
    labels,
    datasets: [
      {
        label: '貯金額 (万円)',
        data: result.resultSavingArray,
        backgroundColor: result.resultSavingArray.map((v) =>
          v < 0 ? 'rgba(255, 99, 132, 0.5)' : 'rgba(99, 255, 120, 0.5)',
        )
      }
    ]
  }

  return(
    <div className="relative h-[340px] w-full p-5" >
      <Bar options={options} data={data} />
    </div>
  )
}

export default ChartResult
