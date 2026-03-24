"use client";

import { Line } from "react-chartjs-2";
import type { ChartDataset, TooltipItem } from "chart.js";
import { useEffect, useRef } from "react";

// chartSetup.ts など
import {
  Chart as ChartJS,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  annotationPlugin,
);

type AssetPoint = {
  age: number;
  principal: number;
  pv: number;
};

type Props = {
  continueData: AssetPoint[];
  coastStopData: AssetPoint[] | null;
  coastFireAge: number | null;
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
  };
}

const CoastFireChart = ({
  continueData,
  coastStopData,
  coastFireAge,
}: Props) => {

  const chartRef = useRef<ChartJS | null>(null);
  // X軸（年齢）
  const labels = continueData.map(d => d.age);
  const datasets: ChartDataset<'line'>[] = [
    {
      label: "積立を続けた場合の資産推移",
      data: continueData ? continueData.map(d => Math.floor(d.pv)) : [],
      borderColor: "#59CAB2",
      backgroundColor: "#8bf9e184",
      tension: 0.3,
      fill: "start",
      pointRadius: 0,
      order: 2,
    },
  ];
  // Coast FIRE達成時のみ追加
  if (coastStopData) {
    datasets.push({
      label: "FIRE達成後に積立を停止した場合の資産推移",
      data: coastStopData ? coastStopData.map(d => Math.floor(d.pv)) : [],
      borderColor: "#a9556e",
      backgroundColor: "#eba8bc9a",
      borderDash: [6, 6],
      tension: 0.3,
      fill: "start",
      pointRadius: 0,
      order: 1,
    });
  }
  const data = {
    labels,
    datasets,
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
  }, [labels, coastFireAge]);


  const options: ChartOptions<"line"> & { plugins: { annotation?: AnnotationsPluginOptions } } = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 14,
            weight: 500,
          },
        }
      },
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
          label: (context: TooltipItem<'line'>) => {
            const value = context.parsed?.y ?? 0;
            return `${Number(value).toLocaleString()} 万円`;
          },
        },
      },
      annotation: {
        annotations: {
          fireLine: {
            type: "line",
            xMin: coastFireAge != null ? coastFireAge - continueData[0].age : 0,
            xMax: coastFireAge != null ? coastFireAge - continueData[0].age : 0,
            borderColor: "gray",
            borderWidth: 1.5,
            borderDash: [5, 5],
            label: {
              display: coastFireAge != null,
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
            xMin: continueData[continueData.length-1].age - continueData[0].age,
            xMax: continueData[continueData.length-1].age - continueData[0].age,
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
      },
      y: {
        title: { display: true, text: "資産額" },
        ticks: {
          callback: (value: number | string) =>
            `${Number(value).toLocaleString()} 万円`,
        },
      },
    },
  };

  return (
    // <div className="relative h-full w-full">
    <div className="relative h-[350px] w-full">
      <Line data={data} options={options} />
    </div>
  )
};

export default CoastFireChart;

