import React from "react";
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { Colors } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';;
// import plugin from 'tailwindcss';

Chart.register(CategoryScale);
Chart.register(Colors);
Chart.register(ChartDataLabels)


const DoughnutChart = ({ chartData }) => {

  const options = {
    tooltips: {
        enabled: false
    },
    plugins: {
        datalabels: {
            formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {sum += data});
                let percentage = (value*100 / sum).toFixed(2)+"%";
                return percentage;
            },
            color: 'rgb(255,255,255)',
        },
        colors: {
          forceOverride: true
        },
        legend: {
          display: true,
        }
    }
  };

    return (
      <div className="chart-container">
        <Doughnut
          data={ chartData }
          options= { options }
        />
      </div>
    );
  }

  export default DoughnutChart;