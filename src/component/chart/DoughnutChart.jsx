import React from "react";
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { Colors } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
// import '@energiency/chartjs-plugin-piechart-outlabels';


Chart.register(CategoryScale);
Chart.register(Colors);
Chart.register(ChartDataLabels)


const DoughnutChart = ({ chartData }) => {

  const options = {
    responsive: true,
    zoomOutPercentage: 55,
    tooltips: {
        enabled: false
    },
    hover: {
      mode: null
    },
    plugins: {
        datalabels: {
            formatter: (value, ctx) => {
              const total = ctx.chart.getDatasetMeta(0).total;
              let percentage = (value * 100 / total).toFixed(2) + "%";
              return ctx.chart.data.labels[ctx.dataIndex] + '\n' + percentage;
            },
            font: {
              weight: 'bold',
              size: 16, 
            },
            align: 'center',
            color: 'rgb(0,0,0)',
        },
        // colors: {
        //   forceOverride: true
        // },
        legend: {
          display: false,
        },
    }
  };

    return (
      <div className="chart-container flex justify-center">
        <Doughnut className=''
          data={ chartData }
          options= { options }
        />
      </div>
    );
  }

  export default DoughnutChart;