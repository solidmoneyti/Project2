import React from "react";
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { Colors } from 'chart.js';

Chart.register(CategoryScale);
Chart.register(Colors);

const DoughnutChart = ({ chartData }) => {

    return (
      <div className="chart-container">
        <Doughnut
          data={ chartData }
          options={{
            plugins: {
              colors: {
                forceOverride: true
              }
            }
          }}
        />
      </div>
    );
  }

  export default DoughnutChart;