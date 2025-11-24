
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Chart} from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { useEffect, useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

type ResultItem = {
  age: number;
  principal: number;
  pv: number;
};

type Props = {
  resultTumitate: ResultItem[];
  currentAgeYear: number;
  coastAge: number;
  finalAge: number;
  tab: "stop" | "continue";
};


// チャート注釈用の型定義
interface AnnotationLine {
  type: "line";
  xMin: number;
  xMax: number;
  borderColor?: string;
  borderWidth?: number;
  borderDash?: number[];
  label?: {
    display: boolean;
    content: string[];
    position?: "start" | "center" | "end";
    font?: { size: number };
    backgroundColor?: string;
    color?: string;
    padding?: number;
  };
}
interface AnnotationsPluginOptions {
  annotations: {
    fireLine: AnnotationLine;
    retireLine: AnnotationLine;
  };
}

export default function CoastFireChart({ resultTumitate, currentAgeYear, coastAge, finalAge, tab}: Props) {
  const chartRef = useRef<Chart<"line", number[], string> | null>(null);

  const labels = resultTumitate.map((item) => item.age);
  const principal = resultTumitate.map((item) => Math.floor(item.principal / 10000));
  const pv = resultTumitate.map((item) => Math.floor(item.pv / 10000));


  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "資産額 (万円)",
        data: pv,
        borderColor: "#59CAB2",
        backgroundColor: "#8bf9e184",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 0,
        fill: 'start',
        order: 2,
      },
      {
        label: "投資額 (万円)",
        data: principal,
        borderColor: "#ff6334ff",
        backgroundColor: "rgba(253, 145, 112, 0.6)",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 0,
        fill: 'start',
        order: 1,
      },
    ],
  };

  // 初期ツールチップを表示する useEffect
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const chartInstance = chart;
    const ageIndex = labels.length - 1; //finalAge

    if (ageIndex >= 0) {
      // 特定の位置にツールチップをプログラム的に表示
      chartInstance.setActiveElements([
        { datasetIndex: 0, index: ageIndex },
        { datasetIndex: 1, index: ageIndex },
      ]);
      chartInstance.tooltip?.setActiveElements(
        [
          { datasetIndex: 0, index: ageIndex },
          { datasetIndex: 1, index: ageIndex },
        ],
        { x: 0, y: 0 }
      );
      chartInstance.update();
    }
  }, [labels, coastAge, tab]);



  const options: ChartOptions<"line"> & { plugins: { annotation?: AnnotationsPluginOptions } } = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
    plugins: {
    legend: { display: false, position: "top" }, //legend表示はtrue
    tooltip: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      titleColor: "#333",
      bodyColor: "#333",
      borderColor: "rgba(0,0,0,0.1)",
      borderWidth: 1,
      cornerRadius: 10,
      bodyFont: { size: 12 },
      mode: "index",
      intersect: false,
      callbacks: {
        title: (tooltipItems) => `${tooltipItems[0].label}歳`,
        label: (context) => {
          const y = context.parsed?.y ?? 0;
          return `${context.dataset.label}: ${y.toLocaleString()}`;
        },
        },
    },
      annotation: {
        annotations: {
          fireLine: {
            type: "line",
            xMin: coastAge - currentAgeYear,
            xMax: coastAge - currentAgeYear,
            borderColor: "gray",
            borderWidth: 1.5,
            borderDash: [5, 5],
            label: {
              display: true,
              content: ["コーストFIRE", "達成"],
              position: "end",
              font: {
                size: 11,
              },
              backgroundColor: "rgba(255,255,255,0.7)",
              color: "gray",
              padding: 4,
            },
          },
          retireLine: {
            type: "line",
            xMin: finalAge - currentAgeYear,
            xMax: finalAge - currentAgeYear,
            borderColor: "gray",
            borderWidth: 1.5,
            borderDash: [5, 5],
          },
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: "年齢 (歳)" },
        ticks: {
          callback: function (value: string | number, index: number) {
            const age = labels[index];
            return [currentAgeYear, coastAge, finalAge].includes(age) ? age : age;
          },
        },
      },
      y: {
        title: { display: true, text: "資産額 (万円)" },
      },
    },
  };

  return (
    <div className="relative h-[250px] w-full">
      <Line ref={chartRef} data={data} options={options}/>
    </div>
  );
}
